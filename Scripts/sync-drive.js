// Synct alle .md bestanden in /kennisbank naar een vaste Google Drive map.
// - Bestaat het bestand al in Drive (zelfde naam)? Overschrijven (content update),
//   zodat de file-ID gelijk blijft en een gekoppelde Gemini Gem geen nieuwe
//   koppeling nodig heeft.
// - Bestaat het nog niet? Aanmaken (voor als er later een 8e/9e bestand bijkomt).
//
// Vereist env vars: GDRIVE_SA_KEY (JSON-string van het service-account),
// GDRIVE_FOLDER_ID (doelmap in Drive).

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

async function main() {
  const folderId = process.env.GDRIVE_FOLDER_ID;
  const saKeyRaw = process.env.GDRIVE_SA_KEY;

  if (!folderId || !saKeyRaw) {
    console.error('GDRIVE_FOLDER_ID of GDRIVE_SA_KEY ontbreekt. Check de repo secrets.');
    process.exit(1);
  }

  const credentials = JSON.parse(saKeyRaw);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const kennisbankDir = path.join(__dirname, '..', 'kennisbank');
  const localFiles = fs.readdirSync(kennisbankDir).filter((f) => f.endsWith('.md'));

  if (localFiles.length === 0) {
    console.log('Geen .md bestanden gevonden in /kennisbank — niks te doen.');
    return;
  }

  // Haal huidige bestanden in de Drive-map op, zodat we op naam kunnen matchen.
  const existing = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name)',
    pageSize: 100,
  });
  const existingByName = new Map(
    (existing.data.files || []).map((f) => [f.name, f.id])
  );

  for (const filename of localFiles) {
    const filePath = path.join(kennisbankDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const media = { mimeType: 'text/markdown', body: content };

    const existingId = existingByName.get(filename);

    if (existingId) {
      await drive.files.update({ fileId: existingId, media });
      console.log(`Bijgewerkt: ${filename} (${existingId})`);
    } else {
      const created = await drive.files.create({
        requestBody: { name: filename, parents: [folderId] },
        media,
        fields: 'id',
      });
      console.log(`Nieuw aangemaakt: ${filename} (${created.data.id}) — vergeet niet dit bestand ook aan je Gem te koppelen.`);
    }
  }

  console.log(`Klaar. ${localFiles.length} bestand(en) gesynct.`);
}

main().catch((err) => {
  console.error('Sync mislukt:', err);
  process.exit(1);
});
