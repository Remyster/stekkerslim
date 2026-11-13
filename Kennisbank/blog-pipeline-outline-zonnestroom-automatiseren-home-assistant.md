# Stap 4: blogoutline, zonnestroom automatiseren met Home Assistant
Datum: 13 november 2026
Gekozen onderwerp: Zonnestroom zelf gebruiken met Home Assistant: automatiseringen die werken
Doelbestand: `zonnestroom-automatiseren-home-assistant.html` (NIEUWE pagina, bestaat nog niet in de repo)
Gemaakt door: Claude Code (stap 4), met de repo-bestanden op schijf voor me

## Beslissing over doelbestand (stap 2 en stap 3 spraken elkaar tegen)
Stap 2 noemde dit een VERDIEPING op een bestaande pagina, stap 3 noemde het NIEUWE BLOG. Gekozen: **nieuwe pagina**.
Reden: `zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html` is een algemene 7-stappengids met een andere zoekintentie (strategie), en haalt zijn kracht uit het feit dat hij licht blijft. Een YAML-uitwerking erin proppen maakt hem zwaar en vervaagt beide intenties. De nieuwe pagina krijgt wel een duidelijke doorverwijzing vanuit stap 5 van die gids.
Kannibalisatie met `homeassistant-energie-besparen.html` (middel): daar staan al twee zonne-voorbeelden (boiler bij teruglever boven 300 W gedurende 5 minuten, wasmachine-notificatie bij teruglever boven 800 W gedurende 10 minuten). De nieuwe pagina wordt het volledige antwoord op "teruglevering als trigger"; die bestaande secties blijven staan en krijgen een link naar de nieuwe pagina (stap 9). Niet herschrijven.

## 1. Title tag
**Zonnestroom automatiseren met Home Assistant: zo werkt het**
58 tekens (node gemeten). Dit is het stap-3-voorstel, ongewijzigd.

## 2. Meta description
**Start een slimme stekker automatisch bij zonnestroom-overschot via Home Assistant en je P1-meter. Triggers, voorwaarden en YAML om te kopiëren.**
143 tekens (node gemeten).
Let op: de stap-3-meta ("... Bekijk de exacte P1-meter triggers en geteste YAML-code.") claimt 153 tekens, gemeten zijn het er 149. Hij belooft ook "geteste" YAML. Dat mag pas op de pagina als Remy de automatisering echt heeft gedraaid. Gebruik de stap-3-meta alleen als de test klaar is; tot die tijd staat bovenstaande variant in de outline.

## 3. H1
**Zonnestroom automatiseren met Home Assistant: apparaten starten bij overschot**
77 tekens. Afwijking van stap 3: hun H1 ("Apparaten automatisch inschakelen bij zonnestroom-overschot in Home Assistant") bevat het doelzoekwoord "zonnestroom automatiseren" niet, terwijl `seo-richtlijnen.md` vraagt dat title en H1 het exacte zoekwoord dragen.

## 4. Doelgroep
Zonnepaneelbezitters met een draaiende Home Assistant en een P1-meter die vóór 1 januari 2027 meer zonnestroom direct willen gebruiken, en die een concreet, kopieerbaar voorbeeld willen in plaats van een uitleg van het principe. Lezers zonder P1-meter of Home Assistant worden doorverwezen, niet opgevangen.

## 5. Primaire zoekintentie
Uitvoering en probleemoplossing: "hoe start ik automatisch een apparaat als ik teruglever, zonder dat het blijft pendelen".

## 6. Artikelbelofte (2 zinnen)
Je bouwt stap voor stap een Home Assistant-automatisering die een apparaat start als je daadwerkelijk teruglevert, met voorwaarden die pendelen bij wisselende bewolking voorkomen. Je ziet ook wat Remy er zelf mee gemeten heeft, inclusief wat niet werkte en voor welke apparaten je dit beter niet doet.
(De tweede zin mag alleen blijven staan als de eigen meetdata er is, zie onderdeel 15.)

## 7. Complete H2/H3-structuur
Streefomvang: ongeveer 1800 tot 2400 woorden plus YAML-blokken.

- H2: Waarom sturen op actuele teruglevering
- H2: Wat je nodig hebt (en wanneer dit niet werkt)
- H2: Welke apparaten mag je extern schakelen
- H2: Stappenplan: de automatisering bouwen
  - H3: Eerst een melding, daarna pas schakelen
  - H3: Trigger: teruglevering boven een drempel, met minimale duur
  - H3: Voorwaarden: tijdvenster en geen dubbele start
  - H3: Actie en stopregel: inschakelen en weer loslaten
- H2: De complete YAML om te kopiëren
- H2: Praktijkresultaat: wat verschoof er echt
- H2: Wanneer dit niets oplevert
- H2: Veelgestelde vragen
- (afsluitend blok) Volgende stap / CTA

## 8. Per sectie: doel, kernpunten, verplichte feitchecks, voorgestelde eigen asset

### Waarom sturen op actuele teruglevering
- Doel: in maximaal 150 woorden uitleggen waarom een vaste timer niet volstaat en waarom P1-data beter past, zonder de salderingsuitleg te herhalen.
- Kernpunten: saldering stopt per 1 januari 2027 (link naar `saldering-2027.html`); vanaf dan telt elke zelf gebruikte kWh vol, teruggeleverde kWh niet. Een timer weet niet of de zon er is, de P1-meter wel.
- Feitcheck: ingangsdatum en de "minimaal 50% van het kale leveringstarief tot 1 januari 2030" uit de zonnestroomgids opnieuw bij Rijksoverheid verifiëren. In stap 2 komt die claim alleen uit de eigen StekkerSlim-pagina, dus het bewijs is circulair.
- Eigen asset: geen.

### Wat je nodig hebt (en wanneer dit niet werkt)
- Doel: randvoorwaarden en de belangrijkste eerlijke waarschuwing vooraan.
- Kernpunten: P1-meter in Home Assistant (link naar de P1-gids, niet opnieuw uitleggen), een energiemetende stekker, en een apparaat dat dit mag. **Gesigneerde sensor**: in Remy's eigen screenshot (`p1-meter-entiteiten.png`) staat de sensor "Vermogen" op -1.679 W, dus teruglevering is negatief. Een trigger "above 800" zoals op sommige bestaande pagina's werkt dan niet, het wordt `below` een negatief getal. Laat de lezer de eigen entiteit en het teken controleren.
- **Thuisbatterij of terugleverbegrenzer**: heeft de lezer een batterij die overschot opvangt, dan ziet de P1-meter bijna nooit teruglevering. Remy's eigen Indevolt (terugleverlimiet 0 W, energiemodus eigen verbruik voorrang) laat dat zien: op 14 september 2026 was er in totaal 11 minuten teruglevering, bijna alles korter dan een minuut. Voor die lezers is deze trigger ongeschikt. Eerlijke "niet doen"-regel, past bij `tone-of-voice.md`.
- Feitchecks: update-interval van de HomeWizard P1 (staat in de P1-gids per DSMR-versie, daar overnemen en niet opnieuw beweren); entiteitsnaam en teken in de eigen Home Assistant.
- Eigen asset: bestaande `p1-meter-entiteiten.png` (zie onderdeel 14).

### Welke apparaten mag je extern schakelen
- Doel: veiligheid vóór techniek, in lijn met de bestaande waarschuwingen.
- Kernpunten: beslisboom (onderdeel 9). Wasmachine: sommige machines starten na het insteken niet vanzelf, het programma moet "klaar staan"; test eerst met een niet-kritisch apparaat. Boiler, warmtepomp, laadpaal en vaste installaties: geen stekkerautomatisering, verwijs naar installateur (zoals de zonnestroomgids al doet).
- Feitchecks: handleiding van het gekozen apparaat over extern schakelen; nominaal en piekvermogen van apparaat én stekker (datasheet, niet uit het hoofd); Tapo-integratie vraagt eenmalig een TP-Link-account en kan na een update "compatibiliteit met derden" nodig hebben (Remy zijn P410M viel volgens zijn HA-notitie daardoor uit; eerst zelf reproduceren voor het erin gaat).
- Eigen asset: stekker-vermogensgrafiek tijdens een wasprogramma (laat zien dat het piekvermogen hoger is dan je denkt).

### Stappenplan: de automatisering bouwen
- Doel: de kern, in volgorde van makkelijk naar complex (`tone-of-voice.md`).
- **Eerst een melding, daarna pas schakelen**: conform `homeassistant-energie-besparen.html` ("veiliger dan automatisch schakelen"). Hergebruik dat idee, link ernaar, voeg de volgende stap toe.
- **Trigger**: numeric_state op de gesigneerde P1-vermogenssensor, onder een negatieve drempel, met `for:` van 10 minuten als voorbeeld. Geen universele wattagedrempel: de drempel is "piekvermogen van het apparaat plus een marge", gemeten bij de lezer zelf. Methode in onderdeel 9.
- **Voorwaarden**: tijdvenster (alleen overdag), stekker staat uit, apparaat is "klaar om te starten" (via vermogen van de stekker, niet 0 maar laag), geen dubbele start binnen de dag.
- **Actie en stopregel**: let op de terugkoppeling. Zodra het apparaat draait, daalt de teruglevering met precies dat verbruik, dus de startvoorwaarde verdwijnt vanzelf. Stoppen op "teruglevering onder drempel" zou het programma midden in een wasbeurt afkappen. Daarom: nooit de stekker uitzetten tijdens een lopend programma, alleen vrijgeven zodra het vermogen onder een standby-niveau zakt. Dit is het moeilijkste stuk en het onderdeel waar eigen meetdata het meest toevoegt.
- Feitchecks: huidige Home Assistant-syntaxis. De site gebruikt overal de oude schrijfwijze (`platform:`, `service:`); controleer in de Home Assistant-documentatie of de nieuwere plurale vorm (`triggers:` / `actions:`) inmiddels de aanbevolen vorm is en kies één lijn, vermeld de minimale HA-versie.
- Eigen asset: screenshot van de visuele editor met dezelfde trigger.

### De complete YAML om te kopiëren
- Doel: één blok voor wie de editor wil overslaan, plus het blok voor de losse stopregel.
- Kernpunten: alle entity_id's als duidelijke placeholders met een opmerking "vervang door je eigen" (zoals `homeassistant-energie-besparen.html` al doet), geen waarden die klinken als advies. Alleen "geteste" noemen na de testperiode.
- Feitcheck: YAML eerst in Remy's eigen Home Assistant laten valideren (Controleer configuratie) voor publicatie.
- Eigen asset: geen extra, de YAML zelf is het bewijs.

### Praktijkresultaat: wat verschoof er echt
- Doel: het enige dat de grote sites niet kunnen kopiëren.
- Kernpunten: periode van 7 tot 14 dagen, zonnige én bewolkte dagen, per dag: moment van inschakelen, duur van de teruglevering vooraf, kWh van het apparaat dat tijdens teruglevering liep, kWh dat daarbuiten liep. Alleen "verschoven kWh" rapporteren, geen eurobesparing zonder eigen tarief, en geen jaarextrapolatie.
- Eerlijk gedeelte: minstens één dag waarop het niet werkte of juist te vaak afging, met de oorzaak. Dat is beslisregel 2 uit `CLAUDE.md` ("een fout die hij zelf maakte").
- Feitchecks: alle getallen uit eigen logboek, geen schattingen.
- Eigen asset: grafiek en tabel, zie onderdeel 14 en 15.

### Wanneer dit niets oplevert
- Doel: de eerlijke afweging die de tone-of-voice verplicht stelt. Stap 3 heeft dit blok niet; toegevoegd.
- Kernpunten: te weinig teruglevering; batterij vangt het op; geen apparaat dat verschoven mag worden; gezin dat overdag al thuis is en direct verbruikt; eerst `zonnepanelen-onderpresteren.html` als de opbrengst zelf tegenvalt.

### Veelgestelde vragen
Zie onderdeel 11.

### Afsluitend blok
Zie onderdeel 12.

## 9. Praktisch rekenvoorbeeld, stappenplan en beslisboom

**A. Beslisboom: mag dit apparaat via een stekker?**
1. Staat in de handleiding dat extern schakelen of stroomonderbreking geen kwaad kan? Nee of onbekend: stop, gebruik de ingebouwde starttimer.
2. Valt het piekvermogen binnen de specificatie van de stekker (datasheet van die stekker, apparaat via typeplaatje of eigen meting)? Nee: stop.
3. Start het apparaat na stroomherstel vanzelf of staat het programma "klaar"? Nee: dan werkt een stekker niet, gebruik een melding.
4. Is het een boiler, warmtepomp, laadpaal of vaste installatie? Ja: geen stekker, installateur.
5. Anders: begin met een melding, dan pas schakelen.

**B. Drempel bepalen (geen vaste waarde, zelf meten)**
1. Meet met de stekker één volledige cyclus en noteer het hoogste vermogen en het vermogen in de standbyfase.
2. Drempel voor teruglevering = piekvermogen van de cyclus plus een marge. De marge kies je na een paar dagen observatie, de pagina noemt hier geen getal.
3. Minimale duur: begin met 10 minuten als voorbeeld uit de bestaande Home Assistant-gids en pas aan na je eigen grafiek van wolkenpartijen.
4. Stopregel: pas vrijgeven als het apparaatvermogen onder het standbyniveau komt.
5. Eerst een week alleen melding, dan schakelen.

**C. Invultabel voor de lezer (en voor Remy's eigen data)**
Kolommen: apparaat, piekvermogen (gemeten), standbyvermogen (gemeten), drempel, minimale duur, stopregel. Voorbeeldrij pas invullen met Remy's eigen cijfers.

## 10. Interne links met exacte ankertekst en URL
Alleen bestanden die ik op schijf heb gezien. Bewijs (echte `<h1>` en `<title>` uit het bestand):

| Bestand | h1 | title | Anker in het artikel |
|---|---|---|---|
| `smarthome-p1-meter.html` | HomeWizard P1 meter + Home Assistant 2026: in 5 stappen live | HomeWizard P1 Meter & Home Assistant 2026 — Slim Besparen vóór Saldering 2027 \| StekkerSlim.nl | "HomeWizard P1 meter koppelen in Home Assistant" |
| `homeassistant-energie-besparen.html` | Home Assistant voor energiebesparing: peakshaving, boiler op zonnestroom en slimme automatiseringen | Home Assistant voor Energiebesparing: Peakshaving, Boiler & Slimme Apparaten \| StekkerSlim.nl | "energie besparen met Home Assistant" |
| `zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html` | Zonnestroom zelf gebruiken zonder thuisbatterij: 7 praktische stappen | Zonnestroom zelf gebruiken zonder batterij: 7 stappen | "zonnestroom zelf gebruiken zonder thuisbatterij" |
| `beste-slimme-stekker-2026.html` | Beste slimme stekkers 2026: nu extra nuttig voor zonnepanelen na saldering | Beste Slimme Stekker 2026: Onmisbaar na Saldering 2027 \| StekkerSlim.nl | "energiemetende slimme stekkers" |
| `tapo-p115-p410m-eindoordeel.html` | Tapo P115 en P410M na 2 weken: eerlijk eindoordeel | Tapo P115 en P410M review na 2 weken: eerlijk eindoordeel 2026 \| StekkerSlim.nl | "Tapo P115 en P410M na twee weken" |
| `kwartierprijzen-slimme-stekker.html` | Kwartierprijzen & slimme stekker: zo automatiseer je besparen | Kwartierprijzen Slimme Stekker 2026: Automatisch Besparen op Dynamisch Contract \| StekkerSlim.nl | "automatiseren op kwartierprijzen" (alleen bij de zin dat prijs en zon twee losse signalen zijn) |
| `wasmachine-dynamisch-tarief.html` | Wasmachine en vaatwasser automatisch op de goedkoopste uren draaien | Wasmachine op dynamisch tarief: veilig stappenplan \| StekkerSlim.nl | "wasmachine veilig automatisch laten starten" |
| `athom-esphome-stekker-review.html` | Athom ESPHome-stekker in Home Assistant: eerste verslag | Athom ESPHome-stekker (PG01V3) in Home Assistant \| StekkerSlim | "Athom ESPHome-stekker in Home Assistant" (alternatief voor wie geen cloudaccount wil) |
| `saldering-2027.html` | Saldering 2027: dit verandert er écht voor jou | Saldering stopt 2027: wat nu met je zonnepanelen? \| StekkerSlim.nl | "saldering stopt per 1 januari 2027" |

Extra ten opzichte van stap 3: kwartierprijzen (stap 2 had hem), wasmachine, Athom en saldering. Geen links naar de samengevoegde pagina's uit `site-structuur.md`.
Bestaande pagina's die naar dit artikel moeten linken (minimaal drie, `seo-richtlijnen.md`): `zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html` (bij stap 5), `smarthome-p1-meter.html`, `homeassistant-energie-besparen.html` (bij beide zonne-voorbeelden). Plus kaart in `blog.html`.

## 11. FAQ (5 vragen, past bij FAQPage-schema, tekst moet identiek zijn aan het zichtbare antwoord)
1. **Kan ik elke wasmachine automatisch laten starten met een slimme stekker?** Nee. Antwoord: niet elke machine start na stroomherstel vanzelf; check de handleiding en test eerst met iets onschuldigs; machine met geplande start eerst via eigen timer proberen.
2. **Wat is de beste trigger-waarde voor mijn zonne-overschot in Home Assistant?** Geen universele. Antwoord: piekvermogen van je apparaat plus marge, zelf gemeten, en let op het teken van je P1-sensor.
3. **Heb ik een slimme stekker nodig als mijn apparaat Home Connect ondersteunt?** Alleen invullen als de Home Connect-claim is gecontroleerd (zie onderdeel 13). Kan het niet geverifieerd worden, dan vervalt deze vraag en komt er een andere in de plaats: "Waarom schakelt mijn apparaat niet automatisch bij overschot?"
4. **Hoe voorkom ik dat de automatisering bij bewolking blijft in- en uitschakelen?** Antwoord: minimale duur in de trigger, geen uitschakelen tijdens een programma, stopregel op het vermogen van het apparaat.
5. **Werkt dit ook als ik een thuisbatterij heb?** Meestal niet goed. Antwoord: een batterij vangt het overschot op, dus de P1-meter ziet weinig teruglevering; kijk dan naar de laadstatus of de eigen app van de batterij.

## 12. Nuchtere CTA
Hoofd-CTA is intern: naar `smarthome-p1-meter.html` voor wie nog niet meet ("Meet eerst, automatiseer daarna", hergebruik van de bestaande kop in de zonnestroomgids). De CTA moet aansluiten bij wat de pagina doet (`seo-richtlijnen.md`, CTA-integriteit): deze lezer heeft al een P1-meter en Home Assistant, dus een hoofd-CTA op de HomeWizard P1 past niet.
Optioneel, klein vak "Nog geen P1-meter?" met het bestaande HomeWizard-affiliatepatroon uit de zonnestroomgids (`rel="noopener sponsored"`, disclosure-regel eronder). Geen aparte Energy Socket-CTA: Remy heeft die niet getest, en de triggerlogica ervan is in stap 2 onbevestigd. Geen thuisbatterij- of contract-CTA's (`CLAUDE.md`: cluster boven vergelijkers). Schema: alleen Article, BreadcrumbList, FAQPage.

## 13. Feiten die vlak voor publicatie opnieuw gecontroleerd moeten worden
- Salderingsregeling stopt per 1 januari 2027 en de minimale terugleververgoeding "50% van het kale leveringstarief tot 1 januari 2030": Rijksoverheid, niet de eigen pagina.
- Home Assistant-syntaxis (oude versus plurale schrijfwijze) en de minimale versie, uit de HA-documentatie.
- Naam, eenheid en teken van de P1-vermogenssensor in Remy's eigen Home Assistant. De bestaande pagina's gebruiken drie verschillende namen (`sensor.p1_netto_teruglever`, `sensor.p1_meter_power_usage`, en in stap 3 een "teruglevering-entiteit"), terwijl Remy's screenshot alleen "Vermogen" toont. Niet blind kopiëren.
- Update-interval van de P1-meter per DSMR-versie (staat in `smarthome-p1-meter.html`; daar overnemen).
- Piek- en nominaal vermogen van de gebruikte stekker (datasheet) en van het apparaat (typeplaatje of eigen meting).
- Handleiding van de gekozen wasmachine of andere apparaat over extern schakelen.
- Home Connect: of en hoe die koppeling met Home Assistant werkt (FAQ 3). Staat nergens in de repo.
- Tapo-integratie: TP-Link-account bij eerste koppeling (staat in het eindoordeel) en het "compatibiliteit met derden"-gedrag na updates (eerst zelf reproduceren).
- Bijgewerkt-datums, `dateModified`, `datePublished`.
- Concurrentieclaims uit stap 3 (Vandebron, Smarthomeduurzaam, Groene-woningen) zijn door niemand geverifieerd en gaan niet op de pagina.

## 14. Fotoplan (4 foto's)
1. **Automatiseringseditor met de trigger** (Home Assistant, visuele editor en YAML naast elkaar). Wie: Remy, screenshot. Waarom: laat zien dat het echt in zijn omgeving staat; tekst kan dat niet bewijzen.
2. **Grafiek P1-vermogen over een testdag, met inschakelmoment gemarkeerd** (apexcharts of History). Wie: Remy, screenshot. Waarom: toont het pendelen of juist het ontbreken ervan, en de vertraging tussen overschot en start. Dit is het eigen bewijs dat in stap 2 als ontbrekend is benoemd.
3. **Vermogensgrafiek van de stekker tijdens een wasprogramma**. Wie: Remy, screenshot. Waarom: laat de pieken van de verwarmfase zien en onderbouwt de waarschuwing over stekkerspecificatie.
4. **Bestaande `p1-meter-entiteiten.png`** (sensorenkaart met "Vermogen" negatief bij teruglevering). Wie: bestaand. Waarom: onderbouwt de uitleg over het negatieve teken. De fotoregel in `CLAUDE.md` geldt alleen voor de drie HomeWizard-review-foto's, dit bestand valt daar niet onder.

## 15. Eigen materiaal van Remy
- **Wat**: 7 tot 14 dagen logboek van één afgebakende automatisering (liefst een wasmachine met geplande start, anders een niet-kritisch apparaat), met screenshot van de editor, grafiek van een testdag, stekkergrafiek en een dagtabel.
- **Waar**: sectie "Praktijkresultaat", de "Eerst een melding"-stap en de stopregel.
- **Wat Remy moet doen**: (1) apparaat kiezen dat extern schakelen mag; (2) eerst een week alleen melding; (3) dan schakelen; (4) per dag noteren: teruglevering vooraf, inschakeltijd, kWh tijdens teruglevering en daarbuiten; (5) minstens één mislukte of rare dag vastleggen.
- **Complicatie in zijn eigen setup**: de Indevolt-batterij (terugleverlimiet 0 W) vangt het overschot op, waardoor de P1-trigger zelden afgaat. Remy moet kiezen: testen op momenten dat de batterij vol is, de testopzet vooraf zo uitleggen, of de batterij-staat als extra voorwaarde meenemen. Dit is zijn keuze en raakt zijn eigen installatie, ik wijzig niets. Heeft hij geen productiesensor (de HA-notitie zegt dat die niet bestaat), dan kan het artikel ook geen "zon schiet te kort"-claim doen.
- **Zonder dit materiaal?** Nee. Dan is het pure uitleg zonder eigen bewijs en valt het buiten beslisregel 2 uit `CLAUDE.md`. Alternatief als de test er niet komt: publiceren als kortere "meld eerst, schakel later"-uitbreiding op `homeassistant-energie-besparen.html`, zonder "geteste"-claims.

## Wat niet in de pagina komt
- Geen besparing in euro's, geen jaarbedrag, geen universele wattagedrempel.
- Geen advies voor boiler, warmtepomp, laadpaal of omvormer-afschakeling.
- Geen conclusies over andere stekkermerken dan wat Remy zelf heeft gemeten.
- Geen concurrentieclaims over Vandebron en andere partijen.
