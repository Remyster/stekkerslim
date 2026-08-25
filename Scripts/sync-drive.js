// Synct alle .md bestanden in /Kennisbank naar een vaste Google Drive map.
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

  const kennisbankDir = path.join(__dirname, '..', 'Kennisbank');
  const localFiles = fs.readdirSync(kennisbankDir).filter((f) => f.endsWith('.md'));

  if (localFiles.length === 0) {
    console.log('Geen .md bestanden gevonden in /Kennisbank — niks te doen.');
    return;
  }

  const existing = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name)',
    pageSize: 100,
  });
  const existingByName = new Map(
    (existing.data.files || []).map((f) => [f.name, f.id])
  );

  const gelukt = [];
  const handmatig = [];
  const mislukt = [];

  for (const filename of localFiles) {
    const filePath = path.join(kennisbankDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const media = { mimeType: 'text/markdown', body: content };

    const existingId = existingByName.get(filename);

    try {
      if (existingId) {
        await drive.files.update({ fileId: existingId, media });
        console.log(`Bijgewerkt: ${filename} (${existingId})`);
        gelukt.push(filename);
      } else {
        const created = await drive.files.create({
          requestBody: { name: filename, parents: [folderId] },
          media,
          fields: 'id',
        });
        console.log(`Nieuw aangemaakt: ${filename} (${created.data.id}) — vergeet niet dit bestand ook aan je Gem te koppelen.`);
        gelukt.push(filename);
      }
    } catch (err) {
      // Een service-account heeft zelf geen opslagquotum en kan daardoor geen
      // nieuwe bestanden aanmaken in een gewone Drive-map. Bestaande bestanden
      // bijwerken lukt wel. Doorgaan met de rest i.p.v. de hele run afbreken.
      const quotaProbleem =
        err?.errors?.some((e) => e.reason === 'storageQuotaExceeded') ||
        /storage quota/i.test(err?.message || '');

      if (quotaProbleem && !existingId) {
        console.log(`OVERGESLAGEN: ${filename} — bestaat nog niet in Drive en kan niet worden aangemaakt.`);
        handmatig.push(filename);
      } else {
        console.error(`FOUT bij ${filename}: ${err?.message || err}`);
        mislukt.push(filename);
      }
    }
  }

  console.log('');
  console.log(`Klaar. ${gelukt.length} van ${localFiles.length} bestand(en) gesynct.`);

  if (handmatig.length) {
    console.log('');
    console.log('ACTIE NODIG — maak deze bestanden eenmalig met de hand aan in de Drive-map');
    console.log(`(https://drive.google.com/drive/folders/${folderId}), met exact deze naam.`);
    console.log('Daarna werkt de sync er vanzelf overheen:');
    handmatig.forEach((f) => console.log(`  - ${f}`));
  }

  if (mislukt.length) {
    console.log('');
    console.log('Mislukt om een andere reden:');
    mislukt.forEach((f) => console.log(`  - ${f}`));
  }

  if (handmatig.length || mislukt.length) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Sync mislukt:', err);
  process.exit(1);
});
