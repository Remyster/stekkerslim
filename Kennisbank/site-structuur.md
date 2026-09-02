# StekkerSlim.nl — Site-structuur
*Laatst bijgewerkt: 25 augustus 2026 (o.b.v. repo-inhoud + sitemap.xml)*

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

## Smart home / apparaten
- `smarthome-uitleg.html`
- `smarthome-producten.html`
- `smarthome-p1-meter.html`
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

## Structured data — verplicht op elke pagina
`Article`, `BreadcrumbList`, optioneel `FAQPage`. **Nooit** `Product`, `Offer`, `price`, `availability`, `shippingDetails`, `hasMerchantReturnPolicy` — zie `affiliate-regels.md`.
