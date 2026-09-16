# Blog Pipeline — log

Bijgehouden door `/blog-pipeline`. Per run: stap, AI, chat-URL (om op terug te komen), datum, antwoord (of samenvatting + bestandsverwijzing bij hele lange output).

## Run 1 — gestart 15 sept 2026

**Onderwerp:** nog niet definitief gekozen — eerste test liep op het aloude veld "Zonnestroom zelf gebruiken zonder thuisbatterij" (al een live pagina, dus stap 1 negeerde dit en zocht zelf nieuwe ideeën).

### Stap 1A — Gemini: Content Gap Scout
- Chat-URL: https://gemini.google.com/app/f1c80f004edac9e0 (titel: "StekkerSlim Content Gap Analyse")
- Status: **onvolledig/onbetrouwbaar** — twee pogingen:
  1. Generieke `gemini.google.com/app` zonder `@Google Drive`-vermelding: Gemini meldde zelf geen Drive/live-site-toegang te hebben, leverde 5 ideeën volledig op aannames (incl. 2 ideeën die al bestaande pagina's dupliceren: "thuisbatterij zonder zonnepanelen" en "sluipverbruik meten" bestaan al op de site).
  2. Met correcte `@Google Drive`-vermelding: Drive-koppeling activeerde wel, maar zoekopdracht naar map "Kennisbank StekkerSlim" vond niets — waarschijnlijk heet de map in Drive "StekkerSlim Kennisbank" (omgekeerde volgorde). Antwoord week af van het gevraagde format (ging over pipeline-architectuur i.p.v. 5 ideeën).
- **Actie voor volgende run**: gebruik de vaste Gemini Gem-URL uit `blog-pipeline-prompts.md` (`gemini.google.com/u/0/gem/53bd2e7c05e5`) i.p.v. generieke chat, en fix eerst de Drive-mapnaam (Remy checkt dit).

### Stap 1B — Grok: Signaal- & Clusterscout
- Chat-URL: https://grok.com/c/540e03f4-bec6-43a1-ba7b-b65d23630f91
- Status: **compleet en goed onderbouwd.** GitHub-connector werkte vanzelf (autonome tool-call), plus X-doorzoeking en live-site-check.
- Antwoord (5 ideeën, samengevat — volledige tekst stond in de chat-conversatie):
  1. AANSLUITEND — Misleidende thuisbatterij-verkoop herkennen (bron: NOS 5 aug 2026, VEH-meldpunt). Overlap: loont-plug-in-thuisbatterij-2026.html, thuisbatterij-top5-2026.html, wanneer-thuisbatterij-niet-slim.html.
  2. AANSLUITEND — Flexibiliteitsvergoeding netbeheerder (bron: NOS juni 2026, 50-70k huishoudens pilot). Overlap: netcongestie-uitgelegd.html, dynamisch-contract-zonnepanelen-thuisbatterij.html.
  3. AANSLUITEND — Terugleverkosten na 1-1-2027 per contracttype (bron: GoT/Tweakers/X-klachten Vattenfall). Overlap: terugleverkosten.html, saldering-2027.html, energiecontract-vergelijken-2026.html.
  4. NIEUW TERREIN — Virtueel salderen en lokale flex (bron: Enexis-pilots, NLFlex). Geen overlap.
  5. NIEUW TERREIN — Time-of-use nettarieven (bron: Tweede Kamer/ACM-codewijzigingsvoorstel 2026). Geen overlap.
  - Volgorde: 1 (misleiding) > 3 (terugleverkosten) > 2 (flex-vergoeding) > 4 (virtueel salderen) > 5 (ToU-tarieven).
  - Handoff naar stap 2: niet dupliceren met saldering-2027.html, terugleverkosten.html, loont-plug-in-thuisbatterij-2026.html, wanneer-thuisbatterij-niet-slim.html, netcongestie-uitgelegd.html, dynamisch-contract*.html, thuisbatterij-top5-2026.html. Factcheck nodig voor ideeën 2, 4, 5.

### Volgende stap
Stap 1A moet opnieuw (met Gem-URL + gefixte Drive-mapnaam) voordat stap 2 (Perplexity-selectie uit 10 ideeën) zinvol is — nu zijn er maar 5 bruikbare ideeën (van Grok alleen).

**Geplande eerste volledige run: 16 september 2026, 20:00** (agenda-item aangemaakt). Cadans voor daarna nog niet bepaald — eerst zien hoe deze eerste keer gaat.

## Run 2 — 16 sept 2026

- **Drive-mapnaam bevestigd**: "StekkerSlim Kennisbank" (via mcp Google Drive search). `blog-pipeline-prompts.md` overal gecorrigeerd (was "Kennisbank StekkerSlim").
- **Stap 1A poging 1**: Gemini Gem-URL (`gemini.google.com/u/0/gem/53bd2e7c05e5`), model stond op **Flash-Lite**. Prompt per ongeluk getypt i.p.v. geplakt — newlines werden volledig weggeslikt (woorden aan elkaar geplakt, bijv. "zoektgaten"). Antwoord kwam terug onvolledig: 4 ideeën i.p.v. 5, geen SOORT-labels (AANSLUITEND/NIEUW TERREIN), geen externe bronnen geraadpleegd ("nee"), geen Mijn volgorde / Handoff-sectie. **Onbruikbaar, genegeerd.**
- **Stap 1A poging 2**: model omgezet naar **Pro**. Prompt via clipboard (`navigator.clipboard.writeText` + Ctrl+V) correct geplakt, opmaak intact, @Google Drive-chip actief, verzonden. Direct na verzenden: "Dit gesprek werd gemaakt met een Gem die verwijderd is." Bij herladen van de Gem-URL: Google reCAPTCHA ("ongebruikelijk verkeer van uw netwerk"). Geblokkeerd — CAPTCHA's worden nooit automatisch ingevuld.
- **Actie voor Remy**: zelf inloggen/CAPTCHA wegklikken op `gemini.google.com/u/0/gem/53bd2e7c05e5`, en checken of de Gem "StekkerSlim Site Guardian – Blog Validator + Site Checker" nog bestaat.
- **Les voor volgende run**: bij Gemini-stappen altijd clipboard-paste gebruiken (nooit `type` voor lange prompts — newlines gaan verloren) en model expliciet op **Pro** zetten (staat soms op Flash-Lite).

### Stap 1A — Gemini: Content Gap Scout (compleet, na CAPTCHA-onderbreking Remy opgelost)
- Chat-URL: https://gemini.google.com/u/0/gem/53bd2e7c05e5/0ca901d8155e3993
- Model: Pro. Prompt via clipboard geplakt (opmaak intact). Eerste generatie stopte halverwege "Mijn volgorde" (alleen ID 4 en 1) en miste de hele Handoff-sectie — met een korte vervolgvraag alsnog compleet gekregen.
- **Bronstatus**: Google Drive gelezen: ja. Live site: gedeeltelijk (via Drive-kennisbank, niet rechtstreeks gescraped). Sitemap: ja. Externe bronnen: ja (Tweakers, Gathering of Tweakers, Reddit r/Klussers). 34 blogs + 6 calculators gevonden.
- **5 ideeën**:
  1. SOORT AANSLUITEND — Zonnepanelen automatisch uitschakelen bij negatieve prijzen. Overlap: terugleverkosten.html, dynamisch-contract.html, zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html. Factcheck: garantie-effect van AC-zijde afschakelen.
  2. SOORT AANSLUITEND — Welke huishoudapparaten leveren écht geld op bij slim plannen (wasmachine/vaatwasser/droger/boiler-ranglijst). Overlap: wasmachine-dynamisch-tarief.html, energiebespaar-calculator.html. Factcheck: actuele kWh/cyclus 2026.
  3. SOORT AANSLUITEND — Warmtepomp slim aansturen met dynamisch contract (pendelen voorkomen, vloerverwarming als thermische buffer). Overlap: dynamisch-contract.html, slimme-thermostaat-installeren.html, calculator-warmtepomp.html. Factcheck: welke merken bieden najaar 2026 API-koppeling.
  4. SOORT NIEUW TERREIN — Elektrische/warmtepompboiler als goedkope thermische batterij (PV-diverter i.p.v. lithium-accu). Geen overlap. Factcheck: kWh-opslag 100L-vat 15→65°C, legionella-risico.
  5. SOORT NIEUW TERREIN — Verwarmen met airco bij dynamische uurprijzen (lucht-lucht warmtepomp i.p.v. cv-ketel). Geen overlap. Factcheck: COP-daling rond vriespunt.
  - Volgorde: 4 (boiler) > 1 (zon uitschakelen) > 3 (warmtepomp) > 2 (apparaten) > 5 (airco).
  - Handoff: niet dupliceren met terugleverkosten.html, dynamisch-contract.html, zonnestroom-zelf-gebruiken-zonder-thuisbatterij.html, wasmachine-dynamisch-tarief.html, energiebespaar-calculator.html, slimme-thermostaat-installeren.html. Te bevestigen: Tado Awin-status (86413), CVtotaal-links (14618) al bruikbaar? Onzeker: mag een omvormer zonder gecertificeerd EMS handmatig/smart-relais afgeschakeld worden volgens netbeheerder-netcode.

### Stap 1A + 1B beide compleet — klaar voor stap 2 (Perplexity)
Gemini (1A, 5 ideeën hierboven) + Grok (1B, zie Run 1 hierboven) zijn nu beide klaar. Volgende sessie: stap 2 bij Perplexity, met beide volledige antwoorden als INPUT GEMINI / INPUT GROK.

### Stap 2 — Perplexity: Selectie, research & factcheck (compleet)
- Chat-URL: https://www.perplexity.ai/search/9e15ddd3-b29b-45a0-bcad-44110841a31b
- Modus: **Zoeken** (niet Computer, niet Diepgaand onderzoek — zie hieronder de modus-problemen). Model GPT-5.6 Terra Denken. Duurde ca. 7 minuten research (72 bronnen).
- **Modus sprong tijdens het intypen 2x vanzelf om** (naar "Computer" en naar "Diepgaand onderzoek"), telkens ontdekt en gecorrigeerd vóór verzenden door de modus-knop expliciet via het dropdown-menu op "Zoeken" te zetten vlak voor het versturen. Twee mislukte pogingen kwamen terecht in de betaalde "Computer"-modus en blokkeerden meteen op "Insufficient credits" — geen echte kosten gemaakt, wel tijd verloren. Klembord-plakken (navigator.clipboard) blijkt onbetrouwbaar in deze browserautomatisering (hangt op timeout) — voortaan altijd direct typen, zie [[reference_blog_pipeline_ui_bediening]].
- **Bronstatus**: GitHub gedeeltelijk (sitemap.xml content niet uitleesbaar via connector), Drive ja (INDEX.md, blogs-gepubliceerd.md, blogs-in-progress.md), live site gedeeltelijk (live sitemap.xml niet op te halen).
- **Beoordeling 10 ideeën**: G1 (zon uitschakelen) AANPASSEN — onveilig als "omvormer met smart-stekker uitschakelen", alleen kansrijk als het over officiële exportlimiet/curtailment gaat. G2 (apparaten-ranglijst) STOP — te veel overlap. G3 (warmtepomp sturen) PARKEREN — te systeemafhankelijk. G4 (boiler als batterij) DOORLATEN. G5 (airco verwarmen) DOORLATEN. R1 (misleidende verkoop) DOORLATEN — actueel en uniek. R2 (flexvergoeding) PARKEREN — geen harde cijfers. R3 (terugleverkosten 2027) STOP — dupliceert bestaande pillar. R4 (virtueel salderen) PARKEREN. R5 (ToU-nettarieven) PARKEREN — nog geen ACM-besluit.
- **Top 3**:
  1. **Misleidende thuisbatterij-verkoop herkennen: checklist vóór je tekent** — SEO-titel "Misleidende thuisbatterij-verkoop herkennen: 10 controles vóór je tekent". Bronnen: VEH-meldpunt (5 aug 2026, agressieve/misleidende verkoop verduurzaming, 53% klachten over thuisbatterijen), ACM ConsuWijzer (bedenktijd meestal 14 dagen), saldering stopt 1-1-2027. Interne links: loont-plug-in-thuisbatterij-2026.html, wanneer-thuisbatterij-niet-slim.html, saldering-2027-thuisbatterij-beslisvolgorde.html, thuisbatterij-simuleren-home-assistant.html. VERPLICHTE DIEPTE-FACTCHECK IN STAP 3: ja (consumentenrecht, rendementclaims, productcompatibiliteit).
  2. Zonnestroom opslaan als warmte (elektrische boiler/warmtepompboiler) — bronnen Milieu Centraal, RIVM (legionella-advies 60°C).
  3. Verwarmen met airco bij dynamische stroomprijzen — bronnen Milieu Centraal, Daikin.
- **MIJN KEUZE (Perplexity): nummer 1** — misleidende verkoop. Waarschuwing: alle 3 opties hebben VERPLICHTE DIEPTE-FACTCHECK IN STAP 3 nodig (consumentenrecht/veiligheid/productcompatibiliteit).
- **Handoff naar stap 3**: niet dupliceren met loont-plug-in-thuisbatterij-2026.html, thuisbatterij-top5-2026.html, wanneer-thuisbatterij-niet-slim.html, saldering-2027.html, terugleverkosten.html. Te checken in stap 3: actuele VEH-klachtencijfers, exacte wettelijke bedenktijd + uitzonderingen bij maatwerk/installatie, regels telefonische verkoop, bruikbare vs nominale batterijcapaciteit, garantievoorwaarden.
- Geen reactie van Remy op de 3 opties nodig volgens de prompt-regel ("reageert Remy niet, dan gaat nummer 1 door") — proefdraai ging door met nummer 1.

### Stap 3 — Gemini: SEO- en cannibalisatiebriefing (compleet)
- Chat-URL: https://gemini.google.com/u/0/gem/53bd2e7c05e5/0fe7fc6abc8a4ccc (Pro-modus). Werkwijze vanaf nu: Remy plakt de prompt zelf in zijn browser (handmatig relay), geen browserautomatisering meer door Claude Code — zie [[reference_blog_pipeline_ui_bediening]] voor de aanleiding (tientallen dubbele chats door foutieve automatisering, nu afgeschaft).
- Score: 8,5/10 (feitelijke juistheid 9, actualiteit 9, SEO 8, affiliatekwaliteit 9, consistentie 8, leesbaarheid 8).
- **Concurrent gevonden**: Ecoquote.nl heeft sinds juni 2026 een vergelijkbaar artikel (focus op telefonische verkoop). StekkerSlim onderscheidt zich met VEH-meldpunt-data (aug 2026) + technische offerte-controle (netto vs bruto capaciteit, AC/DC-conversieverlies) i.p.v. alleen telefonische verkoop.
- **Interne links geverifieerd (door Claude Code zelf, lokaal in de repo)**: loont-plug-in-thuisbatterij-2026.html, wanneer-thuisbatterij-niet-slim.html, thuisbatterij-simuleren-home-assistant.html, calculator-thuisbatterij.html — alle 4 bestaan, titels bevestigd.
- **Titel/meta geverifieerd (door Claude Code)**: title "Misleidende thuisbatterij-verkoop herkennen: 10 rode vlaggen" = exact 60 tekens. Meta description = 151 tekens (Gemini zei 154, klein verschil, beide binnen de 155-limiet).
- **WINNAAR VOOR PUBLICATIE**:
  - H1: Misleidende verkoop van thuisbatterijen herkennen: checklist vóór je tekent
  - Structuur: H2 De explosie van agressieve thuisbatterij-verkoop → H2 10 Rode vlaggen (H3 per vlag: overheid/netbeheerder-claim, geen netto capaciteit, tijdsdruk, onmogelijke terugverdientijd) → H2 Al getekend onder druk? (H3 14 dagen bedenktijd) → H2 Waar meld je misleidende aanbieders (ACM/VEH) → H2 FAQ.
  - FAQ (5 vragen): bedenktijd bij thuisbatterij-aanschaf; wat te doen bij ondertekend onder druk; hoe check je terugverdientijd; waar melden; bestaan er subsidies voor gratis thuisbatterij.
  - Schema: Article, BreadcrumbList, FAQPage (geen merchant-schema).
  - Ankerteksten: "een plug-in batterij is vaak goedkoper" → loont-plug-in-thuisbatterij-2026.html; "wanneer een thuisbatterij financieel niet uitkan" → wanneer-thuisbatterij-niet-slim.html; "simuleer eerst je daadwerkelijke batterij-rendement" → thuisbatterij-simuleren-home-assistant.html; "onafhankelijke thuisbatterij terugverdientijd calculator" → calculator-thuisbatterij.html.
  - Te herchecken vlak voor publicatie: recente VEH-meldpunt-updates sinds 5 aug 2026; exacte 14-dagen-voorwaarden bij deelleveringen/al-gestarte installatie.

### Stap 4 — outline (door Claude Code zelf als Bouwer, compleet)
Zie `Kennisbank/blog-pipeline-outline-misleidende-thuisbatterij-verkoop.md` voor de volledige outline. Remy had aangegeven dat de "Bouwer"-stap beter door Claude Code zelf gedaan kan worden i.p.v. via de losse claude.ai/project-URL (referentie-PDF "Alle urls.pdf": "Stekkerslim bouwen: ... Maar dit kan jij denk ik beter zelf doen").

**Werkwijze vanaf nu (vastgesteld 16 sept 2026)**: Remy relayt handmatig. Claude Code geeft complete prompts (incl. input erin geplakt, nooit een placeholder/verwijzing), Remy plakt ze in zijn eigen browser bij de betreffende AI, en plakt het antwoord terug. Geen browserautomatisering meer.

### Stap 5 — Outline-review, 3 prompts verzonden naar Remy (16 sept 2026)
Drie complete prompts (Grok = lezerswaarde, Perplexity = feiten & veiligheid, Gemini = SEO & links) met de volledige stap 4-outline erin geplakt, gegeven aan Remy om te plakken in zijn eigen chats. Alle drie antwoorden binnengekomen:
- **Perplexity (feiten & veiligheid)**: 7/10, AANPASSEN. Vond een echt gat: geen woord over brandveiligheid/installatie-eisen, en een privacyrisico bij het geplande fotoplan-item "geanonimiseerde echte offerte". Beide verwerkt in stap 6.
- **Grok (lezerswaarde)**: 8-9/10, AANPASSEN. Stelde voor de 10 rode vlaggen los te trekken uit gegroepeerde H3's naar één scanbare lijst, plus een "3+ vlaggen? Stop en reken na"-beslisbox en CTA-herhaling halverwege. Verwerkt. Claim over "typfouten/onvolledige paden" in interne links kon niet gereproduceerd worden bij eigen verificatie — genegeerd.
- **Gemini (SEO & links)**: 8,5/10, GO. Terechte link naar /saldering-2027.html toegevoegd. Voorgestelde linkcorrectie (loont-plug-in-thuisbatterij-2026.html → thuisbatterij-plug-and-play-2026.html) VERWORPEN: de voorgestelde vervanger bleek zelf een "Verplaatst:"-doorverwijsstub naar het origineel, onafhankelijk bevestigd via grep op de titel.

### Stap 6 — Volledige HTML geschreven (door Claude Code zelf als StekkerPen, 16 sept 2026)
Bestand: `misleidende-thuisbatterij-verkoop-herkennen.html` (58.528 tekens, 1 x `<h1>`). Head/nav/footer/CSS letterlijk gekopieerd van `saldering-2027.html` (template-verificatieplicht). Volledig CHANGELOG als HTML-comment bovenaan het bestand: wat verwerkt is uit de 3 stap-5-reviews, wat bewust genegeerd is (zie hierboven), en wat Remy nog handmatig moet checken vóór publicatie (exacte bedenktermijn ACM ConsuWijzer, actuele VEH-meldpuntcijfers, netto/bruto-percentage met een echte fabrikant-datasheet, 3 foto-assets). Geen bruto/netto-percentage verzonnen — outline verbood dit expliciet zonder een echte bron. Nieuwe `_SP`-entry toegevoegd aan de footer-array. Nog niet gepubliceerd, geen sitemap/blog.html-wijziging, geen commit/push.

### Stap 7 — 4 reviewprompts verzonden naar Remy (16 sept 2026)
Vier complete prompts (Grok/Perplexity/Gemini/DeepSeek) met de exacte fingerprint van het HTML-bestand erin (58.528 tekens, 1x h1) gegeven aan Remy. I.v.m. de bestandsgrootte (58KB) is de volledige HTML zelf niet 4x in de chat herhaald — Remy plakte die zelf uit het bestand achter de INPUT-sectie van elke prompt. Alle vier antwoorden binnengekomen (exacte AI-toewijzing per antwoord niet met zekerheid vast te stellen uit het format, inhoud wel verwerkt):
- Eén reviewer: PUBLICEERBAAR NA KLEINE FIX, vooral streepjes en een lange zin.
- Eén reviewer (specifieke cijfers "800 klachten, 53%" genoemd zonder bron): PUBLICEERBAAR NA KLEINE FIX.
- Eén reviewer (zorgvuldige juridische/technische nuance, ISDE/RVO-referentie): PUBLICEERBAAR NA KLEINE FIX.
- Perplexity (met s3-bronverwijzingen): **NIET PUBLICEERBAAR** — belangrijkste blokkers: ongefundeerde claims ("aanzienlijk deel meldingen", "meeste aanbieders eerlijk", "erkend installateur", zelfbedachte "3 vlaggen"-drempel), en de publieke CHANGELOG-comment in de broncode.

Alle terechte punten verwerkt door Claude Code (stap 8, gecombineerd met stap 7-verwerking):
- Alle gedachtestreepjes in zichtbare artikeltekst vervangen (streepjes in het sitebrede sjabloon zelf, identiek aan saldering-2027.html, zijn NIET aangepast).
- Ongefundeerde/te stellige claims afgezwakt of van een bronlink voorzien (VEH-meldpunt, "meeste aanbieders eerlijk" verwijderd, netbeheerder-claim, installateur-terminologie, subsidie-frasering).
- Zelfbedachte "3 vlaggen"-drempel vervangen door een zachtere formulering.
- Bedenktijd-uitzondering vollediger gemaakt + directe ACM ConsuWijzer-bedenktijdlink.
- "Meldingen helpen patronen zichtbaar maken"-overclaim afgezwakt.
- Hoofdzoekwoordvariant toegevoegd aan eerste alinea.
- NIET verwerkt: de specifieke ongefundeerde cijfers ">800 klachten, 53%" van één reviewer — bewust niet overgenomen, geen harde bron.
- CHANGELOG-comment blijft vooralsnog in het bestand (voor audit tijdens de pipeline), maar moet er expliciet uit vóór de definitieve commit (nu ook zo genoteerd in het bestand zelf).

### Foto's toegevoegd (16 sept 2026)
Remy genereerde 3 afbeeldingen met Gemini/Nano Banana (fictieve offerte met rode annotaties, ontbindings-stappenplan, bruto/netto-infographic). Claude Code converteerde ze naar WebP en plaatste de `<img>`-tags op de 3 geplande plekken in de pagina (verving de FOTO-comments). Bestanden: `thuisbatterij-offerte-voorbeeld-rode-vlaggen.webp`, `thuisbatterij-ontbinden-stappenplan.webp`, `thuisbatterij-bruto-netto-capaciteit.webp` (+ .png-originelen in de repo-root).

### Factcheck vóór publicatie (16 sept 2026, door Claude Code via WebFetch/WebSearch)
- **ACM bedenktijd**: bevestigd via consument.acm.nl/aankoop-dienst-annuleren/bedenktijd. 14 dagen, drie scenario's bij een dienst die al gestart is met toestemming (gedeeltelijke betaling / volledige terugbetaling zonder toestemming / bedenktijd vervalt bij volledige uitvoering met akkoord). Artikeltekst klopt hiermee, geen wijziging nodig.
- **VEH-meldpunt**: oorspronkelijke link (eigenhuis.nl) kon niet worden opgehaald/geverifieerd. Vervangen door bevestigde NOS-bron (nos.nl/artikel/2625590): meldpunt geopend augustus 2026, gaat over thuisbatterijen/zonnepanelen/warmtepompen. Geen concrete cijfers/percentages in de bron — bevestigt dat het bewust niet overnemen van een cijfer als "53%" de juiste keuze was.

### Stap 9 — publicatiecheck, checklist afgerond (16 sept 2026)
- CHANGELOG-comment verwijderd uit de publieke HTML (blijft alleen hierboven in de log staan).
- VEH-bronlink vervangen door geverifieerde NOS-bron (zie factcheck hierboven).
- `sitemap.xml`: nieuwe pagina toegevoegd (lastmod 2026-09-16, priority 0.85).
- `blog.html`: nieuw kaartje bovenaan de Thuisbatterij-sectie + toegevoegd aan de `_SP`-achtige zoekarray van blog.html zelf.
- Interne link toegevoegd vanuit `wanneer-thuisbatterij-niet-slim.html` (pill-link "⚠️ Misleidende verkoop herkennen", verving de plug-in-batterij-laden-pill die al elders op de pagina voorkwam).
- 3 foto's (WebP) staan in de pagina, .png-originelen ook in de repo-root.

**Nog niet gedaan**: geen commit/push. Wacht op expliciet akkoord van Remy (harde regel: nooit publiceren zonder zijn goedkeuring).
