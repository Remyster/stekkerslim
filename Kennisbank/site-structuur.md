# StekkerSlim.nl — Site-structuur
*Laatst bijgewerkt: 24 september 2026 (o.b.v. repo-inhoud + sitemap.xml)*

Alle pagina's zijn statische `.html` bestanden, direct onder de root. URL-patroon: `https://stekkerslim.nl/{bestandsnaam}.html` (non-www, canonical altijd https).

## Homepage & overzicht
- `index.html` — Homepage
- `blog.html` — Blog-overzicht, alle artikelen
- `over-ons.html` — Over Remy / StekkerSlim
- `privacy.html` — Privacyverklaring
- `vragen.html` — Vraag insturen

## Calculators
- `calculator-zonnepanelen.html`
- `calculator-energiekosten.html`
- `calculator-thuisbatterij.html`
- `calculator-laadpaal.html`
- `calculator-warmtepomp.html`
- `energiebespaar-calculator.html` — besparingspotentieel per slim device (stekker/thermostaat/P1+HA), toegevoegd 4 augustus 2026

## Zonnepanelen
- `terugverdientijd-zonnepanelen-2026.html`
- `zonnepanelen-onderpresteren.html` — oorzaken tegenvallende opbrengst + stappenplan, toegevoegd 24 augustus 2026
- `zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html` — 7 stappen om zonnestroom direct zelf te verbruiken zonder batterij, toegevoegd 9 september 2026

## Saldering & terugleveren (hoogste prioriteit H2 2026)
- `saldering-2027.html`
- `terugleverkosten.html`
- `netcongestie-uitgelegd.html`

## Energiecontracten
- `dynamisch-contract.html`
- `dynamisch-contract-zonnepanelen-thuisbatterij.html`
- `energiecontract-vergelijken-2026.html`

## Thuisbatterijen
- `thuisbatterij-top5-2026.html`
- `thuisbatterij-zonder-zonnepanelen-2026.html`
- `thuisbatterij-energielabel-2026.html`
- `wanneer-thuisbatterij-niet-slim.html`
- `loont-plug-in-thuisbatterij-2026.html`
- `plug-in-batterij-laden.html`
- `misleidende-thuisbatterij-verkoop-herkennen.html` — consumentenbescherming, bewust zonder affiliate-link, toegevoegd 23 september 2026

## Smart home / apparaten (strategisch de belangrijkste cluster sinds 24 september 2026)
Dit is de enige cluster waar de site aantoonbaar rankt — zie `seo-richtlijnen.md`,
"Clusterprioriteit". `smarthome-p1-meter.html` is de spil: #4 in Google en de grootste
trafficbron van de site. Nieuwe content en interne links horen hier eerst te landen.

- `smarthome-uitleg.html`
- `smarthome-producten.html`
- `smarthome-p1-meter.html` — **spil van de cluster.** Uitgebreid 24 september 2026 van 1392
  naar ~2900 woorden: DSMR-versietabel (voeding via P1, data-interval), P1-splitter-sectie,
  troubleshooting in 6 stappen, FAQ met FAQPage-schema
- `homeassistant-energie-besparen.html`
- `thuisbatterij-simuleren-home-assistant.html`
- `sluipverbruik-meten-oplossen.html` — stappenplan sluipverbruik opsporen met P1-meter + energiemeter, toegevoegd 2 september 2026
- `slimme-stekkers.html`
- `beste-slimme-stekker-2026.html`
- `kwartierprijzen-slimme-stekker.html`
- `smart-lampen.html`
- `slimme-thermostaat-installeren.html`
- `wasmachine-dynamisch-tarief.html`

## Reviews
- `indevolt-solidflex-3000-review.html`
- `indevolt-solidflex-3000-app-review.html`
- `homewizard-energy-display-review.html`
- `homewizard-energy-display-deel2.html`
- `tapo-p115-p410m-review.html`
- `tapo-p115-p410m-eindoordeel.html`

## Actueel / nieuwswaarde
- `stroomprijs-record-juni-2026.html`

## Samengevoegd — niet meer in sitemap.xml
Bestaan nog als bestand, maar dragen een canonical naar de pillar. Niet intern naar linken.

- `terugleververgoeding-2027.html` → `saldering-2027.html`
- `zonnestroom-na-2027.html` → `saldering-2027.html`
- `thuisbatterij-plug-and-play-2026.html` → `loont-plug-in-thuisbatterij-2026.html`
- `thuisbatterij-kopen-juli-2026.html` → `loont-plug-in-thuisbatterij-2026.html`
- `saldering-2027-thuisbatterij-beslisvolgorde.html` → `loont-plug-in-thuisbatterij-2026.html`

## Navigatie — sitebrede structuur (bijgewerkt 24 september 2026)
De nav is op alle 46 pagina's met een `<nav>` identiek en wordt mechanisch uitgerold. Twee
dropdowns: **Calculators** en **Smarthome**. De Smarthome-dropdown is op 24 september 2026
toegevoegd (was één losse link naar `smarthome-producten.html`) en bevat: P1 meter + Home
Assistant, Home Assistant automatiseren, Sluipverbruik opsporen, Beste slimme stekkers,
Slimme thermostaat, Alle smarthome-producten. Het mobiele menu heeft dezelfde items.

Een dropdown vereist drie dingen per pagina, en die liepen uit elkaar: de markup
(`<li class="nav-dropdown">`), de CSS (`.nav-dropdown-menu`) en de JS
(`querySelectorAll(".nav-dropdown")`, hover-toggle). Op 7 pagina's ontbrak de CSS en op 6 de
JS, omdat die pagina's nooit een dropdown hadden gehad — daar is beide toegevoegd.
**Bij een volgende nav-wijziging: controleer alle drie, niet alleen de markup.**

De 5 samengevoegde redirect-stubs hierboven hebben geen `<nav>` en zijn dus terecht
overgeslagen (45-46 bestanden in plaats van 51).

## Structured data — verplicht op elke pagina
`Article`, `BreadcrumbList`, optioneel `FAQPage`. **Nooit** `Product`, `Offer`, `price`, `availability`, `shippingDetails`, `hasMerchantReturnPolicy` — zie `affiliate-regels.md`.
