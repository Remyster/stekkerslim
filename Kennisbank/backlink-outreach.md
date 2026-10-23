# Backlink outreach — smarthome-cluster

Doel: losse, persoonlijke e-mails naar Nederlandse smarthome/Home Assistant/P1-sites
om te vragen of ze willen linken naar `smarthome-p1-meter.html` (de winnende pagina
uit de contentstrategie van 24 sept 2026). Puur een linkverzoek, geen samenwerking/
productruil, geen affiliate-inzet. Ontstaan op 28 sept 2026 nadat social-scan op
Reddit structureel bleef falen (browser-issue) — Remy wilde als alternatief bedrijven
benaderen i.p.v. op fora/social te reageren.

## Verstuurd (28 sept 2026) — door Remy, via eigen mail
| # | Site | Contact | Gelinkte pagina | Status |
|---|------|---------|------------------|--------|
| 1 | Smarthomegids.nl | contactformulier | smarthome-p1-meter.html | Verstuurd, reactie afwachten |
| 2 | HAProfs.com (Smart Gateways B.V.) | support@smartgateways.nl | smarthome-p1-meter.html | **Reactie 30 sept**: Roel van Wanrooy (eigenaar) staat open voor een link, maar wil in ruil een inhoudelijke productaanbeveling van Smart Gateways op de site. Geweigerd (geen ongeteste aanbevelingen, zie contentregels CLAUDE.md) — tegenvoorstel gestuurd: eerlijke vergelijkingsreview als zij een testunit sturen, zelfde model als HomeWizard/Indevolt/Tapo. Reactie afwachten. |
| 3 | homeassistanttips.nl | info@homeassistanttips.nl | smarthome-p1-meter.html | Verstuurd, reactie afwachten |
| 4 | SlimHuys.nl | hallo@slimhuys.nl | smarthome-p1-meter.html | Verstuurd, reactie afwachten |
| 5 | Zuidwijk.com | configs@zuidwijk.com | smarthome-p1-meter.html | **Reactie 30 sept**: Marcel Zuidwijk reageerde positief en meldde een feitelijke fout in de DSMR-tabel (DSMR 4 levert wél stroom via P1, max 100mA — pagina zei ten onrechte "nee"). Gecorrigeerd op smarthome-p1-meter.html (tabel + troubleshooting + FAQ, dateModified + sitemap lastmod → 2026-09-30). **Geen link te verwachten** — Marcel linkt principieel niet naar sites waar ook zijn concurrentie wordt aangeboden. Biedt wel aan gratis een SlimmeLezer Mini (eigen open-source P1-dongle, ESP32C3, github.com/zuidwijk/SlimmeLezer) op te sturen om te testen, geen tegenprestatie gevraagd. Remy heeft geaccepteerd, adres verstuurd 30 sept, Mini onderweg. **Verzonden 7 okt**: order #32512, SlimmeLezer Mini, € 22,25 met 100% korting, PostNL T&T 3SMYPA615220130. Review-kans zodra hij binnen is (zelfde model als HomeWizard/Indevolt/Tapo), geen SEO-doel. |

## Productoutreach-ronde (6 okt 2026) — reviewsamples, geen linkverzoek
Aparte ronde, ander doel: hardwarefabrikanten in het smarthome-cluster vragen om een
reviewsample. Eerdere outreach zat volledig in de batterijhoek; dit is de eerste keer
in de HA/ESPHome-hoek.

| Site | Contact | Status |
|------|---------|--------|
| Athom Technology | info@athom.tech (Peter Sun) | **Reactie 8 okt 04:18**: stuurt een sample, vroeg om adres + model. Zelfde dag beantwoord: ESP32-C3 EU Plug V3 (ESPHome, 16A, HLW8032), verzoek om 2 stuks zodat de onderlinge meetspreiding tussen twee identieke stekkers getest kan worden naast de P1-meter. Drie vragen meegestuurd die vóór publicatie beantwoord moeten zijn: (1) komt de randaarde door — NL-sockets zijn type F en wasmachine/vaatwasser moeten geaard, Athom vermeldt dit nergens; (2) staat ESPHome voorgeïnstalleerd, is de BLE-proxy standaard aan, en is de YAML ergens gepubliceerd om naar te linken; (3) eigen webshop of AliExpress-winkel, en wat kost het inclusief verzending en invoerrechten naar NL. Vastgelegd: we vermelden dat het sample gratis was en sturen geen concept vooraf ter goedkeuring. Wachten op verzending. |
| Shelly | — | Verstuurd 6 okt, nog geen reactie |
| SMLIGHT | — | Verstuurd 6 okt, nog geen reactie |
| Tibber | — | Verstuurd 6 okt, nog geen reactie |

⚠️ **Let op bij antwoorden:** de Athom-reply ging per ongeluk uit vanaf
remyegberts@gmail.com in plaats van het info@stekkerslim.nl-alias waarmee de eerste
mail verstuurd was. Selecteer het alias in de afzender-dropdown vóór het typen.

## Nog niet verstuurd — bewust overgeslagen deze ronde
| # | Site | Contact | Reden |
|---|------|---------|-------|
| 6 | Robbshop.nl | servicedesk@robbshop.nl | Niet gedaan, kan later alsnog |
| 7 | The Smart Home Blog (voorheen domotica-blog.nl) | contactformulier op hellosmarthome.nl | Niet gedaan, kan later alsnog |

## Kandidaten-onderzoek (niet uitgeput — bij een volgende ronde breder zoeken)
Deze 7 kwamen uit een eerste, niet-uitputtende zoekronde op basis van de sites die
al in CLAUDE.md genoemd stonden als vergelijkbare concurrentieklasse (Smarthomegids.nl,
SlimHuys, HAProfs) plus een paar extra gevonden via zoeken (homeassistanttips.nl,
Zuidwijk.com, Robbshop.nl, The Smart Home Blog). Nog niet gezocht: bredere lijst via
bijv. Google op "p1 meter home assistant" influencers/blogs, YouTube-makers, of
andere DSMR/P1-hardwareverkopers.

## Vervolg
- Reacties bijhouden in dit bestand (wie linkt, wie niet, wie reageert helemaal niet).
- Bij een volgende ronde: overwegen 6 en 7 alsnog te versturen, en/of breder zoeken
  naar meer kandidaten.
- Zie ook `Kennisbank/social-scan-bronnen.md` — Reddit is als bron gestopt (browser-
  issue, structureel, niet incidenteel), dit is het alternatief daarvoor.

## Kandidaten ronde 2 (23 okt 2026) — webonderzoek, nog niets verstuurd
Gevonden via zoeken; contactgegevens en partnerprogramma's zijn NIET geverifieerd
(geen e-mailadressen verzonnen — eerst op de eigen site zoeken). Al eerder benaderd
en dus overgeslagen: Zendure, Sessy, Hombli, Quatt, Anker SOLIX, Sonoff, Zonneplan,
EcoFlow, Marstek, thuisbatterij.nl, Vattenfall, Athom Technology, Shelly, SMLIGHT,
Tibber, everHome, Zuidwijk, HAProfs, Smarthomegids, SlimHuys, homeassistanttips.nl.

| Prio | Bedrijf | Soort | Waarom | Kanttekening |
|------|---------|-------|--------|--------------|
| 1 | Homey Energy Dongle (Athom B.V., Eindhoven — niet Athom Technology) | P1-dongle, €39, verkocht via Coolblue/MediaMarkt | Past in P1-cluster, derde P1-lezer naast HomeWizard en SlimmeLezer | Homey-ecosysteem, minder open dan ESPHome; Coolblue-affiliate bestaat al |
| 1 | Smartstuff (Ultra X2 / Ultra Mini dongle) | P1-dongle, ESPHome/HA/Homey | Zelfde vergelijking als SlimmeLezer | Details alleen uit een communitypagina, eerst productsite checken |
| 2 | plan-d-io P1-dongle | Open-source P1-hardware | Past bij "zelf meten en sturen" | Wie verkoopt in NL is onduidelijk |
| 2 | SmartHomeShop (P1MeterKit) | P1-kit voor ESPHome | Cluster-fit | Winkel/herkomst niet gecheckt |
| 2 | Plugwise (Smile P1) | NL-bedrijf, officiële HA-integratie | Lokaal, NL-markt | Nog geen reviewplan |
| 3 | Jackery SolarVault 3 (NL-launch maart 2026, via groothandels) | Plug-in/AC-batterij, buitenlands, verkoopt in NL | Groeit hard volgens Solar Magazine | Richt zich op installateurs; hun affiliate (elders) verbiedt vergelijkbare producten promoten — botst met onze onafhankelijkheid |
| 3 | Sigenergy (Sigenmate) | Batterij, buitenlands, op Bright Energy Party | NL-aanwezigheid | Vooral installateursmarkt |
| 3 | Bluetti | Batterij, via NL-webshops | Verkoopt in NL | Geen NL-partnerprogramma gevonden |
| 3 | ThuisbatterijNederland.nl (Nieuw-Vennep) | Merkonafhankelijke installateur | Mogelijke linkruil/doorverwijzing voor installatievragen | Thuisbatterij-hoek, buiten de cluster-prioriteit |
| 4 | Smappee (BE) | P1-module | Verkoopt in NL | Cloud-API nodig in HA, botst met "lokaal"-lijn |
| 4 | Solar Magazine (industry register) | Vakmedia | Mogelijk vermelding | Voorwaarden/kosten onbekend |

Geen nieuwe Daisycon/Awin-campagnes gevonden voor Jackery, Bluetti, Growatt, Sigenergy of
Anker in NL (zoekresultaten dun) — direct in Daisycon zoeken voordat je dit aanneemt.

### Verstuurd 23 okt 2026 (info@stekkerslim.nl) — reviewsamples, ronde 2
| Bedrijf | Adres | Taal | Vraag | Status |
|---------|-------|------|-------|--------|
| Homey (Athom B.V.) | info@homey.app (algemeen adres, geen press-adres gevonden) | NL | Energy Dongle als reviewsample + vraag naar partnerprogramma voor contentmakers | Verstuurd, geen reactie |
| Smartstuff | info@smart-stuff.nl | NL | P1-dongle als reviewsample, model naar hun keuze | Verstuurd, geen reactie |
| Jackery | marketing.eu@jackery.com | EN | SolarVault 3 als reviewsample, model naar hun keuze | Verstuurd, geen reactie |
Zelfde opzet als eerdere rondes: gratis ontvangen vermelden, geen concept vooraf, bereik eerlijk bescheiden genoemd. Niet verstuurd: plan-d-io, SmartHomeShop, Plugwise, Sigenergy, Bluetti, ThuisbatterijNederland.nl.

### Verstuurd 23 okt 2026 (info@stekkerslim.nl) — aanvulling, 3 extra
| Bedrijf | Adres | Taal | Vraag | Status |
|---------|-------|------|-------|--------|
| Innr (NL, Zigbee-stekkers/lampen) | service@innr.com (enige gevonden adres) | NL | Slimme stekker (bij voorkeur met verbruiksmeting) als reviewsample + partnerprogramma | Verstuurd, geen reactie |
| ThuisbatterijNederland.nl | info@thuisbatterijnederland.nl | NL | Wederzijdse verwijzing zonder betaling of aanbevelingsplicht (wij linken bij installatievragen, zij naar P1/HA-uitleg) | Verstuurd, geen reactie |
| Victron Energy Benelux | salesbenelux@victronenergy.com | NL | Praktijkverslag Victron + Home Assistant, klein meet-/communicatieproduct in bruikleen, of doorverwijzing | Verstuurd, geen reactie |
Niet gemaild: Plugwise (alleen contactformulier), SmartHomeShop (alleen supportportaal), plan-d-io (Belgisch hobbyproject, geen product), Sigenergy en Bluetti (geen NL-contactadres gevonden). Gelogd als open: Plugwise- en SmartHomeShop-formulier eventueel handmatig invullen.
