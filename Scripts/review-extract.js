#!/usr/bin/env node
/**
 * review-extract.js — maakt de reviewversie van een artikelpagina.
 *
 *   node Scripts/review-extract.js <bestand.html>   -> schrijft <bestand>.review.txt
 *
 * Waarom dit bestaat: een complete pagina is ruim 60 KB, waarvan ruim 32 KB
 * sjabloon (CSS, nav, mobiel menu, footer, zoekscript, _SP-array). Dat sjabloon
 * komt letterlijk uit een bestaande pagina en is door check-pagina.js al
 * nagemeten. Het vier keer naar reviewers sturen kost alleen maar ruimte in hun
 * contextvenster en levert nooit een opmerking op.
 *
 * De reviewversie bevat wat per artikel verschilt en dus beoordeeld moet worden:
 * de meta-tags, de JSON-LD-blokken en alles van de page-hero tot de footer.
 */

const fs = require('fs');

function extract(t) {
  const delen = [];

  // 1. De meta-tags die per artikel verschillen.
  const meta = [];
  const pak = (re) => { const m = t.match(re); if (m) meta.push(m[0].trim()); };
  pak(/<title>[\s\S]*?<\/title>/i);
  pak(/<meta[^>]+name=["']description["'][^>]*>/i);
  pak(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  (t.match(/<meta[^>]+property=["']og:[^"']*["'][^>]*>/gi) || []).forEach(x => meta.push(x.trim()));
  (t.match(/<meta[^>]+name=["']twitter:[^"']*["'][^>]*>/gi) || []).forEach(x => meta.push(x.trim()));
  delen.push('<!-- ===== META (uit de <head>) ===== -->\n' + meta.join('\n'));

  // 2. De JSON-LD-blokken, compleet, want daar wordt op gecontroleerd.
  const ld = t.match(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) || [];
  delen.push('<!-- ===== JSON-LD (' + ld.length + ' blokken) ===== -->\n' + ld.join('\n'));

  // 3. Van de page-hero tot de footer: de hero, het artikel en wat eronder hangt.
  const start = t.search(/<div[^>]*class\s*=\s*["'][^"']*\bpage-hero\b/i);
  const eind = t.search(/<footer[\s>]/i);
  if (start === -1 || eind === -1 || eind <= start) {
    throw new Error('Kon page-hero of footer niet vinden — is dit wel een complete artikelpagina?');
  }
  delen.push('<!-- ===== ARTIKEL (page-hero tot footer) ===== -->\n' + t.slice(start, eind).trim());

  return delen.join('\n\n');
}

function vingerafdruk(t) {
  const plat = (s) => s.replace(/\s+/g, ' ').trim();
  return [
    '- Aantal tekens: ' + t.length,
    '- Eerste 60 tekens: ' + plat(t.slice(0, 60)),
    '- Laatste 60 tekens: ' + plat(t.slice(-60)),
    '- Aantal <h1>: ' + (t.match(/<h1[\s>]/gi) || []).length,
    '- Aantal <h2>: ' + (t.match(/<h2[\s>]/gi) || []).length,
    '- Aantal JSON-LD blokken: ' + (t.match(/application\/ld\+json/gi) || []).length,
    '- Aantal links (<a href): ' + (t.match(/<a\s[^>]*href/gi) || []).length
  ].join('\n');
}

function main() {
  const bestand = process.argv[2];
  if (!bestand) {
    console.error('Gebruik: node Scripts/review-extract.js <bestand.html>');
    process.exit(2);
  }
  if (!fs.existsSync(bestand)) {
    console.error('Bestand niet gevonden: ' + bestand);
    process.exit(2);
  }

  const vol = fs.readFileSync(bestand, 'utf8');
  let kort;
  try {
    kort = extract(vol);
  } catch (e) {
    console.error('MISLUKT: ' + e.message);
    process.exit(1);
  }

  const uit = bestand.replace(/\.html?$/i, '') + '.review.txt';
  fs.writeFileSync(uit, kort, 'utf8');

  const pct = Math.round((1 - kort.length / vol.length) * 100);
  console.log('Geschreven: ' + uit);
  console.log('Volledige pagina: ' + vol.length + ' tekens');
  console.log('Reviewversie:     ' + kort.length + ' tekens  (' + pct + '% minder)');
  console.log('\nVINGERAFDRUK VAN DE REVIEWVERSIE — dit hoort in stap 7 van de hub');
  console.log(vingerafdruk(kort));
}

if (require.main === module) main();
module.exports = { extract, vingerafdruk };
