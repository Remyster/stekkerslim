#!/usr/bin/env node
/**
 * check-pagina.js — technische controle op een StekkerSlim-artikelpagina.
 *
 *   node Scripts/check-pagina.js <bestand.html>
 *
 * Dit is de overzetting van sspHtmlControles() uit de AI Hub naar een echt
 * bestand. Reden: in de blog-pipeline schreef een AI de pagina en gaf hij zelf
 * aan "alle 11 punten gedraaid en ok". Dat is geen controle, dat is een
 * mededeling. Hier kijkt een script naar de bytes die werkelijk op schijf staan.
 *
 * Exitcode 0 = alles goed, 1 = minstens één controle faalt.
 */

const fs = require('fs');
const path = require('path');

const EIGEN_DOMEIN = 'stekkerslim.nl';

// Merken die in de <head> van een hergebruikte template kunnen blijven staan.
// Essent staat hier bewust NIET bij: dat is sinds 2026 een actieve
// affiliate-partner, dus die naam hoort legitiem op de site voor te komen.
// Eneco staat er wel bij, want dat is een afgewezen partner (affiliate-regels.md).
const VREEMDE_MERKEN = ['dexter', 'energiedirect', 'vattenfall', 'eneco', 'budgetthuis'];

// Affiliate-netwerken en -domeinen uit Kennisbank/affiliate-regels.md.
// Alleen links hiernaartoe hebben rel="...sponsored" nodig. Een link naar de
// documentatie van Home Assistant is geen advertentie en mag die niet dragen.
const AFFILIATE_DOMEINEN = [
  'awin1.com', 'lt45.net', 'jf79.net', 'tidd.ly', 'daisycon', 'tc.tradetracker',
  'bol.com', 'amazon.nl', 'amzn.to', 'aliexpress'
];

function controles(t) {
  const r = [];
  const tel = (re) => (t.match(re) || []).length;
  const push = (ok, naam, uitleg) => r.push({ ok, naam, uitleg });

  const isPagina = /<!DOCTYPE\s+html/i.test(t);
  push(isPagina, 'Volledige pagina',
    isPagina ? 'Begint met <!DOCTYPE html>.' : 'Geen <!DOCTYPE html> — dit is een fragment, geen publiceerbare pagina.');

  push(/<html[^>]*lang\s*=\s*["']nl["']/i.test(t), 'lang="nl"',
    'Zonder lang="nl" leest Google de pagina als taalonbekend.');

  push(/<nav[\s>]/i.test(t), '<nav> aanwezig', 'De navigatie uit de sitetemplate ontbreekt.');
  push(/<footer[\s>]/i.test(t), '<footer> aanwezig', 'De footer uit de sitetemplate ontbreekt.');
  push(/<style[\s>]/i.test(t) || /<link[^>]+rel=["']stylesheet/i.test(t), 'CSS aanwezig',
    'Geen <style>-blok en geen stylesheet — de pagina rendert ongestyled.');

  // Afsluitende tags: dit ontbrak in de run van 8 oktober 2026 en werd pas in
  // stap 8 door een reviewer opgemerkt.
  push(/<\/body>/i.test(t) && /<\/html>/i.test(t), 'Afgesloten met </body></html>',
    'De pagina eindigt zonder </body> en/of </html>.');

  const h1 = tel(/<h1[\s>]/gi);
  push(h1 === 1, 'Precies één <h1>', h1 + ' gevonden, moet er precies 1 zijn.');

  // Alleen de buitenste page-hero tellen: page-hero-inner is een ander element
  // en mag niet meetellen.
  const hero = tel(/class\s*=\s*["'][^"']*\bpage-hero\b[^-]/gi);
  push(hero === 1, 'Precies één page-hero', hero + ' gevonden, moet er precies 1 zijn.');

  const canon = t.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  push(!!canon && new RegExp(EIGEN_DOMEIN.replace('.', '\\.'), 'i').test(canon[0]),
    'Canonical naar ' + EIGEN_DOMEIN,
    canon ? 'Canonical wijst niet naar ' + EIGEN_DOMEIN + ': ' + canon[0] : 'Geen canonical-tag gevonden.');

  const og = t.match(/<meta[^>]+property=["']og:image["'][^>]*>/i);
  push(!!og && /og-image\.png/i.test(og[0]), 'og:image = og-image.png',
    og ? 'og:image wijst niet naar og-image.png (MET streepje): ' + og[0] : 'Geen og:image gevonden.');

  const ldGoed = tel(/<script[^>]*type\s*=\s*["']application\/ld\+json["']/gi);
  const ldFout = tel(/<script[^>]*type\s*=\s*["']application\/ld[^+"']*json["']/gi);
  push(ldGoed > 0 && ldFout === 0, 'JSON-LD type klopt',
    ldFout > 0 ? ldFout + 'x geschreven zonder het plusteken (application/ld json) — ongeldig, Google negeert dat blok.'
               : 'Geen enkel <script type="application/ld+json"> gevonden.');

  let ldKapot = 0;
  const ldTypes = [];
  const ldRe = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = ldRe.exec(t)) !== null) {
    try {
      const obj = JSON.parse(m[1].trim());
      [].concat(obj).forEach(o => { if (o && o['@type']) ldTypes.push(String(o['@type'])); });
    } catch (e) { ldKapot++; }
  }
  push(ldKapot === 0, 'JSON-LD is geldige JSON (' + ldGoed + ' blokken: ' + (ldTypes.join(', ') || 'geen') + ')',
    ldKapot + ' blok(ken) laten zich niet parsen — controleer komma\'s en accolades.');

  // "availability" alleen als JSON-sleutel afkeuren. Als gewoon woord in een
  // FAQ-antwoord is het onschuldig, en dat kwam op 8 oktober 2026 ook voor.
  const merchant = /"@type"\s*:\s*"(Product|Offer|AggregateOffer)"/i.test(t) ||
                   /"(price|availability|shippingDetails|hasMerchantReturnPolicy)"\s*:/i.test(t);
  push(!merchant, 'Geen merchant-schema',
    'Product/Offer/price/availability als schema-eigenschap gevonden — StekkerSlim is een doorverwijssite, geen webshop.');

  const links = t.match(/<a\s[^>]*href\s*=\s*["']https?:\/\/[^"']+["'][^>]*>/gi) || [];
  const extern = links.filter(a => !new RegExp(EIGEN_DOMEIN.replace('.', '\\.'), 'i').test(a));
  const isAffiliate = (a) => AFFILIATE_DOMEINEN.some(d => a.toLowerCase().includes(d));

  const zonderNoopener = extern.filter(a => !/rel\s*=\s*["'][^"']*noopener/i.test(a));
  push(zonderNoopener.length === 0, 'Externe links met rel="noopener"',
    zonderNoopener.length + ' van de ' + extern.length + ' externe links missen rel="noopener". Eerste: ' + (zonderNoopener[0] || '').slice(0, 90));

  const affZonderSponsored = extern.filter(a => isAffiliate(a) && !/rel\s*=\s*["'][^"']*sponsored/i.test(a));
  push(affZonderSponsored.length === 0, 'Affiliate-links met rel="...sponsored"',
    affZonderSponsored.length + ' affiliate-link(s) missen sponsored. Eerste: ' + (affZonderSponsored[0] || '').slice(0, 90));

  // Omgekeerd ook fout: sponsored op een gewone bronlink zegt tegen Google dat
  // het betaalde plaatsing is, en dat is het niet.
  const nietAffMetSponsored = extern.filter(a => !isAffiliate(a) && /rel\s*=\s*["'][^"']*sponsored/i.test(a));
  push(nietAffMetSponsored.length === 0, 'Geen sponsored op gewone bronlinks',
    nietAffMetSponsored.length + ' niet-affiliate link(s) dragen rel="...sponsored". Eerste: ' + (nietAffMetSponsored[0] || '').slice(0, 90));

  const kop = t.slice(0, Math.min(t.length, 6000)).toLowerCase();
  const gevonden = VREEMDE_MERKEN.filter(merk => kop.indexOf(merk) !== -1);
  push(gevonden.length === 0, 'Geen vreemd merk in de <head>',
    'Gevonden in de kop van het document: ' + gevonden.join(', ') + ' — controleer auteur, publisher, canonical en OG-tags.');

  push(/_SP\s*=|_SP\.push|const\s+_SP/i.test(t), '_SP zoekscript aanwezig',
    'De _SP-array uit de sitetemplate ontbreekt — het artikel komt dan niet in de zoekfunctie van de site.');

  // Staat de pagina zelf ook in zijn eigen _SP-array? Zonder die regel is het
  // artikel niet vindbaar in de zoekfunctie van de site.
  const bestandsnaam = path.basename(process.argv[2] || '');
  const inSp = bestandsnaam && t.includes('"' + bestandsnaam + '"');
  push(!!inSp, '_SP bevat deze pagina',
    'De regel voor ' + bestandsnaam + ' ontbreekt in de _SP-array.');

  const artikel = (t.match(/<article[\s\S]*?<\/article>/i) || [
    t.replace(/<head[\s\S]*?<\/head>/gi, '')
     .replace(/<nav[\s\S]*?<\/nav>/gi, '')
     .replace(/<footer[\s\S]*?<\/footer>/gi, '')
  ])[0] || t;

  const leesbaar = artikel
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]*>/g, ' ');

  const streepjes = (leesbaar.match(/(\s[—–]\s?|\s?[—–]\s|\s--+\s)/g) || []);
  push(streepjes.length === 0, 'Geen gedachtestreepjes in de tekst',
    streepjes.length + 'x een — of – of -- in de lopende tekst. Vervang door komma, punt, dubbele punt of haakjes.');

  const fotos = (t.match(/<!--\s*FOTO:/gi) || []).length;
  push(fotos > 0, 'Foto-plekken aangegeven (' + fotos + ')',
    'Geen enkele <!-- FOTO: ... --> regel gevonden. Zonder beeld leest het als een handleiding.');

  const imgs = (t.match(/<img\s[^>]*src\s*=\s*["'][^"']+["']/gi) || [])
    .filter(s => !/^\s*<img[^>]*src\s*=\s*["'](https?:|data:)/i.test(s));
  const ontbrekend = imgs
    .map(s => (s.match(/src\s*=\s*["']([^"']+)["']/i) || [])[1])
    .filter(src => src && !fs.existsSync(path.join(path.dirname(process.argv[2] || '.'), src)));
  push(ontbrekend.length === 0, 'Alle lokale afbeeldingen bestaan',
    ontbrekend.length + ' <img> wijst naar een bestand dat niet in de repo staat: ' + ontbrekend.slice(0, 3).join(', '));

  const woorden = leesbaar.replace(/\s+/g, ' ').trim().split(' ').length;
  push(woorden >= 400, 'Genoeg tekst (' + woorden + ' woorden)',
    'Maar ' + woorden + ' woorden zichtbare tekst — dat is geen volwaardig artikel.');

  // Titel en meta description: lengtes die Google afkapt.
  const titel = (t.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  push(titel.length > 0 && titel.length <= 60, 'Title max 60 tekens (' + titel.length + ')',
    titel ? 'Title is ' + titel.length + ' tekens, Google kapt af rond 60: "' + titel + '"' : 'Geen <title> gevonden.');

  const desc = (t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) || [])[1] || '';
  push(desc.length > 0 && desc.length <= 155, 'Meta description max 155 tekens (' + desc.length + ')',
    desc ? 'Description is ' + desc.length + ' tekens.' : 'Geen meta description gevonden.');

  return r;
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
    console.error('Gebruik: node Scripts/check-pagina.js <bestand.html>');
    process.exit(2);
  }
  if (!fs.existsSync(bestand)) {
    console.error('Bestand niet gevonden: ' + bestand);
    process.exit(2);
  }

  const t = fs.readFileSync(bestand, 'utf8');
  const res = controles(t);
  const fout = res.filter(x => !x.ok);

  console.log('CONTROLE: ' + bestand + '  (' + t.length + ' tekens)');
  console.log('='.repeat(72));
  res.forEach(x => {
    console.log((x.ok ? '  OK   ' : '  FOUT ') + x.naam);
    if (!x.ok) console.log('         ' + x.uitleg);
  });
  console.log('='.repeat(72));
  console.log(fout.length === 0
    ? 'ALLE ' + res.length + ' CONTROLES GOED'
    : fout.length + ' VAN DE ' + res.length + ' CONTROLES GEFAALD');

  console.log('\nVINGERAFDRUK VAN HET VOLLEDIGE BESTAND');
  console.log(vingerafdruk(t));

  process.exit(fout.length === 0 ? 0 : 1);
}

if (require.main === module) main();
module.exports = { controles, vingerafdruk };
