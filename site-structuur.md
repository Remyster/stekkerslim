# StekkerSlim.nl — Site-structuur
*Laatst bijgewerkt: 16 juli 2026 (o.b.v. repo-inhoud + sitemap.xml)*

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

## Saldering & terugleveren (hoogste prioriteit H2 2026)
- `saldering-2027.html`
- `terugleverkosten.html`
- `terugleververgoeding-2027.html`
- `zonnestroom-na-2027.html`
- `netcongestie-uitgelegd.html`

## Energiecontracten
- `dynamisch-contract.html`
- `dynamisch-contract-zonnepanelen-thuisbatterij.html`
- `energiecontract-vergelijken-2026.html`

## Thuisbatterijen
- `thuisbatterij-top5-2026.html`
- `thuisbatterij-plug-and-play-2026.html`
- `thuisbatterij-zonder-zonnepanelen-2026.html`
- `thuisbatterij-energielabel-2026.html`
- `thuisbatterij-kopen-juli-2026.html`
- `wanneer-thuisbatterij-niet-slim.html`
- `loont-plug-in-thuisbatterij-2026.html`
- `plug-in-batterij-laden.html`
- `terugverdientijd-zonnepanelen-2026.html`

## Smart home / apparaten
- `smarthome-uitleg.html`
- `smarthome-producten.html`
- `smarthome-p1-meter.html`
- `homeassistant-energie-besparen.html`
- `slimme-stekkers.html`
- `beste-slimme-stekker-2026.html`
- `kwartierprijzen-slimme-stekker.html`
- `smart-lampen.html`
- `slimme-thermostaat-installeren.html`
- `wasmachine-dynamisch-tarief.html`

## Reviews
- `homewizard-energy-display-review.html`
- `homewizard-energy-display-deel2.html`
- `tapo-p115-p410m-review.html`
- `tapo-p115-p410m-eindoordeel.html`

## Actueel / nieuwswaarde
- `stroomprijs-record-juni-2026.html`

## ⚠️ Bekende gap
`thuisbatterij-kopen-juli-2026.html` en `wasmachine-dynamisch-tarief.html` staan (nog) niet in `sitemap.xml` (laatst gecontroleerd t/m 26 juni 2026). Check of deze zijn toegevoegd en resubmit de sitemap in Search Console als dat nog niet is gebeurd.

## Structured data — verplicht op elke pagina
`Article`, `BreadcrumbList`, optioneel `FAQPage`. **Nooit** `Product`, `Offer`, `price`, `availability`, `shippingDetails`, `hasMerchantReturnPolicy` — zie `affiliate-regels.md`.
