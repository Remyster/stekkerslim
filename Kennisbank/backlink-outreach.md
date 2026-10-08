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
