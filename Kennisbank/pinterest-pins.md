# Pinterest-pins — wachtrij en log

Bijgehouden voor twee slash-commands:
- `/pinterest-pin` — één pin per keer (ad hoc).
- `/pinterest-batch` — wekelijkse batch van 5 pins (vaste donderdag-afspraak, zie agenda).

Elke keer dat een commando draait, pakt Claude het bovenste item met status "open", maakt er een pin van, en zet de status om naar "live" (met datum) zodra de pin echt gepubliceerd is door Remy.

## Wachtrij

| # | Pagina | URL | Board (Pinterest) | Status | Datum live |
|---|--------|-----|--------------------|--------|------------|
| 1 | Thuisbatterij beslisvolgorde | `https://stekkerslim.nl/saldering-2027-thuisbatterij-beslisvolgorde.html` | Zonnepanelen & Besparen | live | 2026-09-03 |
| 2 | Indevolt SolidFlex 3000 AC review | `https://stekkerslim.nl/indevolt-solidflex-3000-review.html` | Zonnepanelen & Besparen | live | 2026-09-03 ¹ |
| 3 | Energiebespaar-calculator | `https://stekkerslim.nl/energiebespaar-calculator.html` | Zonnepanelen & Besparen | live | 2026-09-03 ¹ |
| 4 | Beste slimme stekker 2026 | `https://stekkerslim.nl/beste-slimme-stekker-2026.html` | Zonnepanelen & Besparen | live | 2026-09-03 ¹ |
| 5 | Dynamisch energiecontract | `https://stekkerslim.nl/dynamisch-contract.html` | Zonnepanelen & Besparen | live | 2026-09-03 ¹ |
| 6 | P1-meter + Home Assistant koppelen | `https://stekkerslim.nl/smarthome-p1-meter.html` | Zonnepanelen & Besparen | live | 2026-09-24 ¹ |
| 7 | Home Assistant energie besparen | `https://stekkerslim.nl/homeassistant-energie-besparen.html` | Zonnepanelen & Besparen | live | 2026-09-25 |
| 8 | Sluipverbruik meten en oplossen | `https://stekkerslim.nl/sluipverbruik-meten-oplossen.html` | Zonnepanelen & Besparen | live | 2026-09-24 ¹ |
| 9 | Misleidende thuisbatterij-verkoop herkennen | `https://stekkerslim.nl/misleidende-thuisbatterij-verkoop-herkennen.html` | Zonnepanelen & Besparen | live | 2026-09-24 ¹ |
| 10 | Thuisbatterij simuleren in Home Assistant | `https://stekkerslim.nl/thuisbatterij-simuleren-home-assistant.html` | Zonnepanelen & Besparen | live | 2026-09-24 ¹ |
| 11 | Slimme thermostaat installeren | `https://stekkerslim.nl/slimme-thermostaat-installeren.html` | Zonnepanelen & Besparen | live | 2026-10-01 |
| 12 | Kwartierprijzen + slimme stekker | `https://stekkerslim.nl/kwartierprijzen-slimme-stekker.html` | Zonnepanelen & Besparen | live | 2026-10-01 |
| 13 | Zonnepanelen onderpresteren | `https://stekkerslim.nl/zonnepanelen-onderpresteren.html` | Zonnepanelen & Besparen | live | 2026-10-01 |
| 14 | Wasmachine op dynamisch tarief | `https://stekkerslim.nl/wasmachine-dynamisch-tarief.html` | Zonnepanelen & Besparen | live | 2026-10-01 |
| 15 | Beste smart lampen 2026 | `https://stekkerslim.nl/smart-lampen.html` | Zonnepanelen & Besparen | live | 2026-10-01 |
| 16 | Smarthome uitleg — protocollen & platformen | `https://stekkerslim.nl/smarthome-uitleg.html` | Zonnepanelen & Besparen | live, ingepland door Remy | 2026-10-08 ² |
| 17 | Slimme stekkers per merk | `https://stekkerslim.nl/slimme-stekkers.html` | Zonnepanelen & Besparen | live, ingepland door Remy | 2026-10-08 ² |
| 18 | HomeWizard Energy Display review | `https://stekkerslim.nl/homewizard-energy-display-review.html` | Zonnepanelen & Besparen | live, ingepland door Remy | 2026-10-08 ² |
| 19 | Zonnestroom zelf gebruiken zonder thuisbatterij | `https://stekkerslim.nl/zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html` | Zonnepanelen & Besparen | live, ingepland door Remy | 2026-10-08 ² |
| 20 | Saldering 2027 | `https://stekkerslim.nl/saldering-2027.html` | Zonnepanelen & Besparen | live, ingepland door Remy | 2026-10-08 ² |

¹ Remy bevestigde op 8 okt 2026 dat deze pins inmiddels live staan. De exacte
publicatiedatum is niet vastgelegd; hier staat de datum waarop de pin gemaakt is
(batch 1 = 3 sept, batch 2 = 24 sept). Behandel die datums als bij benadering.

² Op 8 okt 2026 door Remy zelf ingediend met "Publish at a later date". De
gekozen publicatiedata zijn niet vastgelegd; 2026-10-08 is de datum waarop de pins
zijn aangemaakt en ingepland, niet per se de datum waarop ze verschijnen.

Nieuwe items: voeg gewoon een rij toe onderaan de tabel (status "open"). Volgorde in de tabel = volgorde van posten.

**Board-opmerking (3 sept 2026):** het Pinterest-account heeft geen aparte boards voor "Thuisbatterij", "Smarthome/Reviews" of "Energie besparen/Tools" — alleen "Zonnepanelen & Besparen" is topically passend. Tot Remy nieuwe boards aanmaakt, gaat alles daarheen.

## Richtlijnen per pin
- **Formaat afbeelding:** verticaal, 1000×1500px (2:3), Pinterest-standaard.
- **Titel:** bevat het hoofdzoekwoord van de pagina, max ~100 tekens.
- **Beschrijving:** 2-4 zinnen, natuurlijke taal, geen keyword-stuffing, eindigt met zachte CTA ("Lees het volledige artikel op StekkerSlim.nl").
- **Bestemmingslink:** altijd de volledige `https://stekkerslim.nl/...` URL uit de tabel, geen affiliate-link direct als pin-bestemming (Pinterest-beleid) — de affiliate links zitten al op de pagina zelf.
- **Merk:** logo/tekst "StekkerSlim.nl" zichtbaar in de afbeelding (kleine watermark, geen dominante branding).
- **Kleuren:** consistent met de site — groen `#00D17A`, navy `#0B1628`, accent `#FFD23F`.
- **Alt-tekst:** altijd invullen (korte objectieve beschrijving van de afbeelding), apart veld van de beschrijving.
- **AI-Modified toggle:** altijd aanzetten in Pinterest — de afbeeldingen zijn AI-gegenereerd via Gemini.
- ~~**Inplannen kan niet meer (1 okt 2026):** de optie "Publish at a later date" is uit de pin-builder verdwenen.~~ **Achterhaald op 8 okt 2026:** de optie staat er gewoon weer, naast "Publish immediately", en is die dag ook gebruikt. Het was dus tijdelijk of een A/B-test, geen permanente wijziging. Pins kunnen weer in één sessie gemaakt en over de week gespreid worden.

## Log (gepubliceerd)
- **2026-09-03** — Thuisbatterij beslisvolgorde → board "Zonnepanelen & Besparen" (geen apart Thuisbatterij-board beschikbaar op het account) → https://nl.pinterest.com/pin/398639004542610496/ — afbeelding via Gemini (Flash), gemarkeerd als AI-Modified.
- **2026-09-03** — Items #2 t/m #5 (Indevolt review, Energiebespaar-calculator, Beste slimme stekker 2026, Dynamisch energiecontract): afbeeldingen gegenereerd in Gemini, titel/beschrijving/alt-tekst/link/AI-toggle ingevuld door Claude in Pinterest, upload + board/planning/publiceren gedaan door Remy zelf. Zet ze op "live" met datum + pin-URL zodra bevestigd.
- **2026-09-24** — Batch 2: items #6 t/m #10 (P1-meter+HA, HA energie besparen, Sluipverbruik, Misleidende thuisbatterij-verkoop, Thuisbatterij simuleren in HA) — 5 afbeeldingen gegenereerd in Gemini (Flash, isometrisch 3D). Item 8 (Sluipverbruik) had eerst een foute headline ("...en Home Assistant" i.p.v. "...en oplossen") door vermenging met de vorige prompt — herkend en gecorrigeerd in dezelfde chat. Wachtrij aangevuld met smarthome-clusterpagina's conform de contentrichting sinds 24 sept 2026. Alle 5 afbeeldingen door Remy geüpload in Pinterest pin-builder; titel/beschrijving/alt-tekst/link/AI-toggle door Claude ingevuld. Item #7 (HA energie besparen) door Remy ingepland op 2026-09-25 12:00; de overige 4 staan op "Publish immediately" en wachten op publiceren door Remy zelf. Zet elk item op "live" met datum + pin-URL zodra bevestigd.

- **2026-10-01** — Batch 3: items #11 t/m #15 (Slimme thermostaat, Kwartierprijzen + slimme stekker, Zonnepanelen onderpresteren, Wasmachine op dynamisch tarief, Beste smart lampen 2026) — 5 afbeeldingen in één Gemini-chat (Flash, split-screen voor/na). Wachtrij was leeg en is aangevuld met 5 nieuwe pagina's; de batch mengt bewust smarthome (thermostaat, lampen, kwartierprijzen) met twee praktische besparingsonderwerpen. Remy heeft alle 5 afbeeldingen zelf in één keer in de pin-builder geladen (5 concepten tegelijk); Claude vulde per concept titel, beschrijving, alt-tekst, link en de AI-Modified-toggle in. Board blijft "Zonnepanelen & Besparen" — gecontroleerd in de board-dropdown, er zijn nog steeds geen smarthome-/thuisbatterij-boards. **Alle 5 zijn op 1 oktober 2026 direct gepubliceerd.** De planningsoptie ("Publish at a later date") was niet meer beschikbaar in de pin-builder, dus inplannen kon niet — alles staat live vanaf die datum.

- **2026-10-08** — Batch 4: items #16 t/m #20 (Smarthome uitleg, Slimme stekkers per merk, HomeWizard Energy Display review, Zonnestroom zelf gebruiken, Saldering 2027) — 5 afbeeldingen in één Gemini-chat, nieuwe stijl: warm fotografisch (zie hieronder). De wachtrij was leeg: alle oudere items stonden op live. Drie van de vijf komen uit het smarthome-cluster, Zonnestroom en Saldering 2027 zijn erbij gekozen omdat saldering het meest tijdgebonden onderwerp op de site is (stopt over nog geen drie maanden) — dat is bestaande content verspreiden, geen nieuwe vergelijkingscontent, dus het botst niet met de contentrichting van 24 sept. Remy heeft de 5 afbeeldingen zelf geüpload; Claude vulde per pin titel, beschrijving, alt-tekst, link en de AI-Modified-toggle in, en controleerde daarna in de DOM dat alle vijf links en toggles klopten en dat er geen leeg zesde formulier openstond. **Remy heeft alle vijf zelf gepubliceerd met "Publish at a later date".**
  - **Leerpunt:** Gemini's invoerveld pakt een `type`-actie niet altijd op; de tweede prompt verdween spoorloos en moest opnieuw. Controleer na het typen met een screenshot óf de tekst in het veld staat, en klik daarna op de verzendknop via een `find`-ref in plaats van een vaste coördinaat — de knop verschuift mee met de hoogte van het invoerveld.

**Pin-URL's hoeven niet.** Remy heeft ze niet bij de hand en ze voegen niets toe aan de wachtrij: status + datum is genoeg om te weten wat al gepind is. Vraag er dus niet standaard om. Wel op te halen van zijn profiel als er ooit een reden is (bijvoorbeeld om te zien welke pin verkeer trekt).
  - **Twee leerpunten uit deze ronde.** (1) In Gemini stond **Deep Research** standaard aangevinkt; de eerste prompt startte daardoor een onderzoeksplan in plaats van een afbeelding. Chip uitzetten (knop "Deep Research deselecteren") en een nieuwe chat beginnen vóór de eerste prompt. (2) Bij meerdere pin-concepten op één pagina staan de formulieren **niet** in de volgorde van de zijbalk en zijn blinde coördinaat-klikken onbetrouwbaar: de eerste link belandde bij de verkeerde pin. Werkwijze die wél werkt: `find` op "destination link" geeft alle refs, dan per ref `scroll_to` + screenshot om te zien bij welke pin hij hoort, en daarna per pin `read_page` voor titel/beschrijving/alt-refs.

## Laatst gebruikte beeldstijl
- **Batch 4 (8 okt 2026)**: warm fotografisch — fotorealistische scènes met warm
  avond- of middaglicht (zonsondergang door een raam, schemering boven een dak),
  navy schaduwen (#0B1628), dunne groene lichtdraden (#00D17A) die apparaten of
  zonnepanelen met elkaar verbinden, ondiepe scherptediepte. Koptekst bovenaan in
  twee regels: eerste regel geel (#FFD23F), tweede wit. StekkerSlim.nl-watermerk
  rechtsonder. Volgende batch: kies weer iets anders — nog niet gebruikt zijn
  close-up productfocus zonder omgeving, en een schematische/diagram-stijl.
- **Batch 3 (1 okt 2026)**: split-screen voor/na — verticale deling in het midden, linkerhelft grijs en gedimd (de oude situatie), rechterhelft met groene gloed (#00D17A) en het slimme alternatief, navy achtergrond (#0B1628), headline bovenaan met het eerste deel in geel (#FFD23F), StekkerSlim.nl-watermerk rechtsonder. Volgende batch: kies weer iets anders, bijvoorbeeld warm fotografisch-achtig of close-up productfocus.
- **Batch 2 (24 sept 2026)**: isometrisch 3D — kleine isometrische scènes (meterkast, huiskamer, laptop-dashboard), navy achtergrond (#0B1628), groene gloed (#00D17A) voor positieve/tip-pagina's, gele/amberkleurige waarschuwingsstijl (#FFD23F als dominant) voor de misleiding-pagina, StekkerSlim.nl-watermerk rechtsonder. Volgende batch (`/pinterest-batch`): kies een andere stijl, zie opties in de skill zelf.
- **Batch 1 (3 sept 2026)**: flat minimal infographic — platte iconen/illustraties, navy achtergrond (#0B1628), groene gloed (#00D17A), gele accenten (#FFD23F), StekkerSlim.nl-watermerk rechtsonder.
