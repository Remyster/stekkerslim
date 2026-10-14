---
description: Wekelijkse batch van 5 Pinterest-pins maken (Gemini-afbeeldingen + Pinterest-metadata)
---

Maak in één sessie **5 nieuwe Pinterest-pins** voor StekkerSlim.nl. Dit is de wekelijkse batch-versie van `/pinterest-pin` (die doet er maar 1). Gebruik dit commando op de vaste donderdag-afspraak, of wanneer Remy expliciet om een batch vraagt.

Deze werkwijze is uitgekristalliseerd op 3 september 2026 — lees dit door voordat je improviseert, browser-downloads van Gemini-afbeeldingen komen namelijk **niet** aan op Remy's schijf (extensie-beperking). De workflow hieronder omzeilt dat bewust.

## Stap 0 — Wachtrij aanvullen tot 5 open items
Open `Kennisbank/pinterest-pins.md`. Tel de rijen met status "open". Vul aan tot minimaal 5 door nieuwe rijen toe te voegen onderaan de tabel — kies pagina's uit de "Pagina's — volledig overzicht" in `CLAUDE.md` die nog niet eerder gepind zijn (check de Log-sectie). Varieer onderwerp (niet 5x hetzelfde thema).

Board: er is momenteel geen apart board per onderwerp (Thuisbatterij/Smarthome/Reviews bestaan niet) — gebruik "Zonnepanelen & Besparen" tenzij Remy een nieuw board heeft aangemaakt. Check dat aan het begin van de sessie.

## Stap 1 — Beeldstijl kiezen (varieer t.o.v. vorige keer)
Kijk in `Kennisbank/pinterest-pins.md` onderaan bij "Laatst gebruikte beeldstijl" welke stijl de vorige batch had. Kies deze keer bewust een andere richting, bijvoorbeeld:
- **Flat minimal infographic** (gebruikt in batch 1, sept 2026): platte iconen, navy achtergrond, groene gloed.
- **Isometrisch 3D**: kleine isometrische huiskamer/apparaten, zelfde kleurenpalet.
- **Warm fotografisch-achtig**: zachter licht, meer materiaaltextuur (hout, stof), minder "app-scherm".
- **Split-screen voor/na**: linker- en rechterhelft met duidelijk contrast (bijv. hoge vs lage energierekening).
- **Close-up productfocus**: één object centraal (stekker/batterij/meter), sterk uitgelicht, weinig omgeving.

Noteer de gekozen stijl, die gebruik je consistent voor alle 5 prompts in deze batch (herkenbaarheid als serie), maar wel per pagina een andere invulling van het onderwerp. Kleuren blijven altijd navy `#0B1628` / groen `#00D17A` / accent `#FFD23F`, StekkerSlim.nl-watermerk klein rechtsonder, verticaal 2:3.

## Stap 2 — 5 prompts genereren in Gemini (browser, één chat)
Gebruik de Chrome-browsertools (Remy's eigen sessie). Ga naar `gemini.google.com/app`, kies model "Flash" (niet Flash-Lite — die genereert geen afbeeldingen goed).

Voor elk van de 5 wachtrij-items, op volgorde:
1. Lees kort de betreffende pagina (titel/H1/kernboodschap) zodat de prompt inhoudelijk klopt.
2. Klik in het invoerveld, typ de Engelse beeldprompt (stijl uit stap 1 + onderwerp van de pagina), verstuur.
3. **Wacht tot de afbeelding volledig gerenderd is** (meestal 10-20 sec, soms 2 rondes wachten) voordat je de volgende prompt verstuurt — niet vooruit typen terwijl er nog gegenereerd wordt, dat verliest de invoer.
4. Check kort visueel (screenshot) of het resultaat bruikbaar is (geen rare artefacten, past bij onderwerp). Bij een mislukte afbeelding: prompt lichtjes aanpassen en opnieuw, max 2-3 pogingen per item.

**Download de afbeeldingen niet zelf** — dat werkt niet betrouwbaar via de browserextensie. Laat alle 5 gewoon in deze ene Gemini-chat staan (voor Remy als overzicht).

## Stap 3 — Remy uploadt, jij vult de tekst
Zeg tegen Remy dat alle 5 afbeeldingen klaarstaan in de Gemini-chat. Remy downloadt en upload ze zelf, één voor één, in de Pinterest pin-builder (`pinterest.com/pin-builder/`). Zodra hij een afbeelding heeft geladen (hij zegt dit, of je ziet het via een screenshot van de Pinterest-tab), vul jij meteen in:
- **Titel**: hoofdzoekwoord van de pagina, max ~100 tekens.
- **Beschrijving** ("Tell everyone what your Pin is about"): 2-4 zinnen, natuurlijke taal, eindigt met zachte CTA ("Lees het volledige artikel op StekkerSlim.nl" / "Bekijk het op StekkerSlim.nl").
- **Alt-tekst** ("Add alt text" → "Explain what people can see in the Pin"): korte objectieve beschrijving van wat er op de afbeelding te zien is.
- **Bestemmingslink** ("Add a destination link"): de volledige URL uit de wachtrij-tabel.
- **"Mark as AI-Modified"-toggle**: altijd aanzetten, dit is AI-gegenereerde content.

Let op bij het invullen: gebruik `find` om het juiste veld-ref te pakken voordat je typt — de veldvolgorde verschuift soms zodra title/description tekst bevatten, een blinde coördinaat-klik belandt dan al snel in het verkeerde veld (bv. link die per ongeluk in het alt-text veld terechtkomt). Check met een screenshot na het invullen.

**Raak board, publicatiedatum/-tijd en de Publish-knop niet aan** — dat regelt Remy zelf per pin (hij bepaalt zelf of iets meteen live gaat of ingepland wordt). Vraag alleen expliciet of hij wil dat jij op Publish klikt als hij daarom vraagt.

Herhaal dit voor alle 5 afbeeldingen, in het tempo dat Remy aangeeft (hij zegt "volgende" / "weer een open" als hij een nieuwe afbeelding heeft geladen).

## Stap 4 — Loggen
Zodra een pin door Remy gepubliceerd is (hij bevestigt dit of je ziet de pin-URL): werk `Kennisbank/pinterest-pins.md` bij — status naar "live", datum, en voeg een regel toe aan de Log-sectie (datum, pagina, board, pin-URL indien bekend, gebruikte beeldstijl).

Werk aan het eind van de sessie ook de regel "Laatst gebruikte beeldstijl" onderaan het bestand bij, zodat de volgende batch weet wat hij moet vermijden.

## Afsluiten
Korte samenvatting: welke 5 pagina's zijn behandeld, welke stijl gebruikt, hoeveel er al live staan vs. nog open (Remy kan zelf nog pins afmaken na deze sessie). Herinner er niet expliciet aan de volgende afspraak — die staat al in de agenda.
