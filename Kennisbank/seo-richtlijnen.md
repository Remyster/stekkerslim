# StekkerSlim.nl — SEO-richtlijnen
*Laatst bijgewerkt: 24 september 2026*

## Vaste technische regels
- Canonical: altijd non-www HTTPS, `<link rel="canonical" href="https://stekkerslim.nl/bestandsnaam.html">`.
- Interne links: gebruik `href="/"` voor de homepage, niet `href="index.html"`.
- OG-image bestandsnaam is `og-image.png` (met streepje) — niet `ogimage.png`. Dit gaat vaak fout, altijd checken.
- `<title>` en `<h1>` bevatten het exacte doelzoekwoord.
- Minimaal 500 woorden content, minimaal 1 affiliate link of CTA per pagina.

## Nieuwe pagina — checklist (altijd volledig uitvoeren)
1. Canonical tag
2. OG tags (title, description, image)
3. Title + H1 met exact doelzoekwoord
4. Minimaal 500 woorden
5. Minimaal 1 affiliate CTA
6. Toevoegen aan sitemap.xml
7. Interne links vanuit minimaal 3 bestaande pagina's
8. Kaart toevoegen aan blog.html
9. Sitemap resubmitten in Search Console
10. Indexering aanvragen in Search Console

## Bestaande pagina bijgewerkt — kortere checklist (24 september 2026)
Dit is een **andere** checklist dan die hierboven, en dat onderscheid werd eerder niet
gemaakt. Bij het bijwerken van bestaande pagina's, zonder dat er URL's bijkomen:

1. `lastmod` in `sitemap.xml` bijwerken — **alleen** voor pagina's met een écht zichtbare
   inhoudswijziging. Pagina's die alleen een nav-, footer- of `_SP`-regel kregen: niet
   aanraken. Zie het lastmod-incident van 8 augustus 2026.
2. `dateModified` in het `Article`-schema van die pagina's bijwerken.
3. Zichtbaar datumlabel op de pagina bijwerken ("Bijgewerkt: …") als dat er staat.
4. **Geen sitemap-resubmit.** Dat is alleen nuttig als er URL's zijn toegevoegd of verwijderd.
   Google haalt de sitemap op zijn eigen schema opnieuw op en leest dan de nieuwe `lastmod`.
   Resubmitten versnelt niets, en de sitemap-statistieken in Search Console lopen achter op
   Googles eigen crawl — dat veroorzaakte op 8 augustus al eens verwarring over het
   URL-aantal.
5. **Wel** URL-inspectie + "indexering aanvragen" per gewijzigde pagina, maar alleen als de
   wijziging substantieel is (nieuwe secties, flink meer woorden, gewijzigde title). Bij een
   prijsaanpassing of een paar nieuwe links is dat zonde van het dagquotum (~10-12).
   Aanvragen zonder echte verandering helpt niet en kan averechts werken.

## Feitelijke correcties die overal moeten gelden
- **Saldering**: correcte naam is "Wet beëindiging salderingsregeling", aangenomen door Eerste Kamer op 17 december 2024, ingangsdatum **1 januari 2027**. Gebruik "per 1 januari 2027", nooit "na 2027".
- **Batterijprestaties**: terugleveren-reductie tot ~400 kWh vereist actieve EMS/curtailment; zonder EMS blijft ~800-1.000 kWh over. Eigen verbruik stijgt van 30% naar 60-70% — dat is correct ZONDER EMS. Niet overdrijven.
- **"Gecrawld - momenteel niet geïndexeerd"** in Search Console = crawl-budget/autoriteit-issue op een jonge site, geen technische fout. Fix: handmatige URL-inspectie aanvragen.
- **"Pagina met omleiding"** en **"Alternatieve pagina met correcte canonieke tag"** voor http/www-varianten = verwacht GitHub Pages-gedrag, geen actie nodig.

## Clusterprioriteit — smarthome boven thuisbatterij (24 september 2026)
Search Console-analyse over 16 maanden: de thuisbatterij- en dynamisch-contract-pagina's
trekken vrijwel geen organisch verkeer, omdat hun hoofdzoektermen gedomineerd worden door
Frank Energie, Gaslicht.com, Consumentenbond, EasySwitch en Energienerds.nl. Die zijn met
2-3 uur per week niet in te halen. `smarthome-p1-meter.html` staat wél op **#4** voor
"p1 meter home assistant koppelen", tussen kleine onafhankelijke smarthome-blogs — een
winbare concurrentieklasse, en 44 van de 130 klikken komen van die ene pagina.

Praktische regels die daaruit volgen:
- Nieuwe content en interne links: geef het Home Assistant / P1-meter / smarthome-techniek-
  cluster voorrang. Bestaande thuisbatterij-pagina's blijven staan, maar krijgen geen nieuwe
  investering.
- De sterkste pagina moet ook de diepste pagina zijn. Toen dit werd opgezet was
  `smarthome-p1-meter.html` met 1392 woorden juist een van de dunste artikelen; die is
  uitgebreid naar ~2900 woorden. Check dit periodiek: rankt een pagina goed, maak hem beter.
- Hiërarchie op homepage en blog volgt de data, niet de affiliate-waarde. "Populaire
  artikelen" op de homepage bevatte drie pagina's die niemand las — dat soort blokken moet
  kloppen met de werkelijkheid.

## Prioriteit voor interne linking & CTA-plaatsing
Energiecontract-pagina's (Energiekiezer, Frank Energie, Pricewise) leveren beduidend meer affiliate-waarde op dan productpagina's — prioriteer deze voor CTA-plaatsing en interne links vanuit nieuwe content.

**Let op de spanning met de clusterprioriteit hierboven:** affiliate-waarde per klik is het
hoogst bij contract-pagina's, maar het verkeer komt uit de smarthome-hoek. Zet CTA's naar
contract- en productpartners dus juist ín de smarthome-content (HomeWizard Daisycon 18407 en
Coolblue Awin 85161 staan al live), in plaats van meer contentgewicht in de contract-pagina's
te stoppen die toch niet gevonden worden.

## CTA-integriteit
Check bij elke CTA of de tool waar je naar verwijst daadwerkelijk doet wat de CTA-tekst belooft. Voorbeeld van een fout die eerder gemaakt is: een blog over wasmachines op dynamisch tarief verwees naar de energiekosten-calculator met de belofte "wat kosten jouw wasbeurten" — die calculator berekent de totale jaarrekening, geen losse wasbeurten. Fix: CTA-tekst aanpassen aan wat de tool echt doet, niet andersom.
