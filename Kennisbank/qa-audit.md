# StekkerSlim.nl — QA-audit systeem
*Laatst bijgewerkt: 9 september 2026*

## Wat is dit?
Sinds 3 augustus 2026 heeft StekkerSlim.nl een herbruikbaar controlesysteem dat checkt of de site nog technisch klopt: affiliate-links, interne links, sitemap.xml en lokale afbeeldingen. Bestaat uit twee losse delen.

## 1. Het script — `Scripts/qa-audit.sh`
Een bash-script in de repo dat, wanneer je het draait (`bash Scripts/qa-audit.sh` vanuit de repo-root), automatisch checkt:
- Alle affiliate-links (Awin, Daisycon-trackers, Amazon, Bol.com, Marstek.nl direct) — echt bereikbaar?
- Interne links (relatief én absoluut) — verwijzen ze naar bestaande bestanden?
- `sitemap.xml` — kloppen de URL's, en staan alle `.html`-bestanden erin?
- Lokale afbeeldingen — bestaan de bestanden die `src`/`href` claimen?

Geeft een kort rapport: alleen problemen worden uitgeschreven, niet de volledige lijst van wat goed is (Remy leest door ADHD niet graag lange technische logs).

**Belangrijke technische les verwerkt in het script:** Coolblue en Amazon blokkeren kale `curl`-requests met 403/500/503, ook als de link zelf prima werkt (bot-detectie op user-agent). Het script gebruikt daarom een echte browser user-agent + retryt 3x met een pauze voordat het iets als "kapot" bestempelt. Zonder die twee dingen krijg je structureel vals alarm — dit gebeurde op 3 augustus 2026 bij de eerste handmatige check en kostte tijd om te doorgronden.

**Aanvulling 9 september 2026 — user-agent alleen is niet genoeg.** Bol.com blokkeert óók mét browser-user-agent: elke productpagina geeft 403, ongeacht retries. Daardoor rapporteerde de audit 12 van de 13 bol.com-links als kapot terwijl ze alle 12 prima werkten. Bij een affiliate-link is de eindpagina bovendien niet wat je wilt testen — de vraag is of de *tracking-hop* werkt. Het script valt nu bij 403/503/500/429 terug op alleen de eerste hop (`curl` zónder `-L`): geeft die een 301/302 met redirect-URL, dan is de link in orde en telt hij niet als fout, maar wordt hij wel apart geteld in een ℹ️-regel. Geverifieerd: `partner.bol.com` → 301 met `Referrer=ADVNLPP…&utm_source=1510756` intact, `amzn.to` → 301 met `tag=stekkerslim-21` intact.

**Les: een 403/503 op de winkelpagina zegt niets over je affiliate-link.** Controleer de redirect, niet de bestemming. Zolang de tracking-parameters in de redirect-URL staan, werkt de commissie.

**Sitemap-ruis weggefilterd (9 september 2026).** De "HTML-bestanden die niet in sitemap.xml staan"-check meldde elke ronde dezelfde 6 bestanden: `index.html` (staat terecht als `https://stekkerslim.nl/` in de sitemap) en de 5 redirect-stubs van de clustermerges van augustus (`thuisbatterij-plug-and-play-2026`, `thuisbatterij-kopen-juli-2026`, `saldering-2027-thuisbatterij-beslisvolgorde`, `terugleververgoeding-2027`, `zonnestroom-na-2027` — allemaal met een canonical naar een ánder bestand). Het script slaat `index` nu over en negeert elk bestand waarvan de canonical niet naar zichzelf wijst. Nieuwe, echt vergeten pagina's komen er dus nog steeds uit.

Het script verandert zelf nooit iets aan de site — het rapporteert alleen.

## 2. De maandelijkse routine (automatisch, in de cloud)
Er staat een geplande cloud-agent (routine) die **elke 1e van de maand om 08:00 UTC** (~10:00 zomertijd) automatisch:
1. De repo ophaalt
2. `Scripts/qa-audit.sh` draait
3. Het resultaat samenvat in gewone taal voor Remy — kort, geen ruwe scriptoutput tenzij een probleem dat rechtvaardigt
4. **Niets zelf aanpast** — puur rapporteren, geen commits of fixes

Terug te zien op: `https://claude.ai/code/routines/trig_01SQ7WwF1LtTiBa5gxaRod6p` (elke run staat in de geschiedenis).

## 3. Indexerings-wachtrij (sinds 9 september 2026)
Sectie 6 van het script levert elke ronde **12 URL's** om in Search Console aan te bieden, geroteerd op "langst geleden aangeboden eerst" en bijgehouden in `Scripts/indexering-log.txt`. Dit staat los van of er die ronde content is gewijzigd — daarvóór hing stap 4 aan "de gewijzigde pagina's", en een ronde zonder wijzigingen leverde dus nul aanvragen op terwijl de site grotendeels buiten de index staat.

Na het indienen loggen met `bash Scripts/qa-audit.sh --ingediend pagina1 pagina2 ...`, anders komt dezelfde 12 volgende ronde terug. Het script print dat commando kant-en-klaar onderaan sectie 6.

**Het dagquotum ligt rond de 10, niet 12.** Op 9 september kwam na de tiende aanvraag "Quotum overschreden — dien dit morgen opnieuw in". Wat niet gelukt is gewoon niet loggen; het schuift dan vanzelf door naar boven in de volgende ronde.

**Google's eigen bevestiging zegt: "Als je een pagina meerdere keren indient, verandert de wachtrijpositie of prioriteit niet."** Blijven indienen is dus een bodem (zorgt dat elke pagina in de crawlwachtrij staat), geen hefboom. De structurele oorzaak van de lage indexering is autoriteit — 5 externe links in totaal.

**Browsertruc voor deze stap:** na het typen van een URL in de inspectiebalk eerst `navigate` naar de nieuwe inspect-URL (dus een echte reload) voordat je de knop zoekt. Search Console laat oude inspectiepanelen in de DOM staan; zonder reload vindt `find` meerdere "Indexering aanvragen"-knoppen en klik je op een onzichtbare. Coördinaten-klikken is onbruikbaar: de viewport-schaal wisselt tussen screenshots.

## Wat dit systeem NIET checkt (blijft handmatig)
- **Prijzen.** Scrapen is onbetrouwbaar: sites blokkeren bots, prijzen worden dynamisch geladen, en kortingscodes hebben voorwaarden die je niet uit de HTML kunt afleiden. Voorbeeld: op 3 augustus 2026 stond er op stekkerslim.nl €799 voor de Indevolt SolidFlex 3000 AC, terwijl de site inmiddels €849 vroeg — dat kwam pas aan het licht via een echte browsercheck, niet via een script. Er stond ook een "€50 korting"-badge op de Indevolt-pagina die verwarrend leek, maar die code geldt pas vanaf €1.000 bestelwaarde en telt dus niet mee bij een losse aankoop.
- **CSS-leesbaarheid van nieuwe knoppen.** Op 3 augustus 2026 werd een CTA-knop toegevoegd aan `indevolt-solidflex-3000-review.html` met een nieuwe class `.btn-primary` zonder `!important`. Resultaat: onzichtbare tekst (groen op groen), want de pagina heeft een generieke regel `.article-body a{color:var(--groen)}` die specifieker is dan een losse class zonder `!important`. **Les: hergebruik bij een nieuwe knop altijd een bestaande, al werkende knop-class op diezelfde pagina (bv. `hub-btn`, `btn-koop`, `product-card a`) in plaats van een nieuwe class te verzinnen. Moet het toch een nieuwe class zijn, zet de tekstkleur dan met `!important` en check 'm zelf in de browser voor je pusht.**

Advies: 1x per maand (of vaker als er veel prijzen wijzigen) kort een browser-based sessie draaien die een paar belangrijke/recent gewijzigde producten spotcheckt tegen de echte winkelpagina.

---

## Auditronde 7 september 2026 — externe pipeline (Gemini/Perplexity/Grok/Nimble)

Remy draait sinds september een pipeline van 5 stappen langs verschillende AI's: Gemini (techniek/SEO), Perplexity (feiten/regelgeving), Grok (UX/conversie), Nimble (prijzen scrapen), Claude Code (definitieve actielijst + uitvoeren). Deze ronde kwam alleen de Nimble-prijstabel binnen; stap 1–3 waren nog leeg.

**Wat er uitkwam en is gefixt:**

1. **`thuisbatterij-zonder-zonnepanelen-2026.html`** — de instapprijs stond op "minimaal €650 (Indevolt)". Dat product bestaat niet voor die prijs; de goedkoopste Indevolt is de SolidFlex 2000 ECO rond €769. In dezelfde zin stond de Marstek (5,12 kWh) genoemd als voorbeeld van een "2–3 kWh" batterij. Zin herschreven.
2. **Marstek Venus E 3.0 prijsranges** — stonden inconsistent over de site (`smarthome-producten.html` had €1.150–€1.400 waar de rest €1.150–€1.300 had). Bovengrens €1.400 bleek nergens meer te bestaan: bol.com vraagt €1.250 (adviesprijs €1.300), Marstek.nl €1.199. Alle ranges naar €1.150–€1.300, Bol-knoppen naar €1.200–€1.300 (5 bestanden).
3. **HomeWizard "slim laden" stond nog als beta** op 6 plekken in 2 bestanden, met de tekst "april 2026, besloten beta voor een selecte groep". HomeWizard lanceerde de functie op **2 juni 2026** gratis voor alle Plug-In Battery-eigenaren, met drie strategieën waaronder "slim met dynamisch tarief". Dit stond dus 3 maanden verkeerd bij een affiliate-product waar we commissie op krijgen.
4. **Zendure €849–€1.089 blijft staan.** €849 op zendure.nl is een *actieprijs* met doorgestreepte €1.089. De range die bij de audit van 2 september is gezet, klopt dus precies — niet aanpassen naar €849.

Commits: `927795b`, `cfacc6d`.

### Nieuwe les: productstatus verloopt net zo hard als prijs
De audit keek tot nu toe alleen naar prijzen en links. Maar claims als "nog in beta", "brede uitrol later dit jaar", "nog niet beschikbaar" verouderen even snel en zijn schadelijker: een verkeerde prijs kost geloofwaardigheid, een verkeerde "dit werkt nog niet"-claim stuurt een koper actief weg van een product waar we commissie op krijgen. **Neem in elke auditronde mee: grep de site op `beta`, `binnenkort`, `nog niet`, `testfase`, `later in 2026` en op datumlabels (`mei 2026`, `april 2026`), en check per hit of het nog klopt.** Let op: grep op `beta` matcht ook `betaal`/`betalen` — filter die eruit.

### Nieuwe les: verifieer AI-prijsclaims zelf, ook als ze ✅ zeggen
Nimble zette overal een ✅ omdat de gemeten prijs binnen de opgegeven range viel. Maar een range van €1.200–€1.400 waarvan de bovenkant nergens bestaat is technisch "een match" en toch misleidend voor de bezoeker. Ranges moeten de werkelijke spreiding tussen kanalen dekken, niet een marge waar we ons achter verschuilen. Fetch bij twijfel de winkelpagina zelf — `bol.com` en `zendure.nl` werken prima met WebFetch, `marstek.nl` en `iotdomotica.nl` geven 403.

### Honeywell-thermostaat: geen prijsfout maar een productverwisseling (7 september 2026)
Nimble zag een groot prijsverschil onder dezelfde productnaam: Amazon €115–125 vs Bol.com €170–180. Nagetrokken en het bleken **twee verschillende modellen**:
- Bol.com `9200000065991759` = "Honeywell Lyric T6 Slimme Thermostaat Zwart — **Bedraad**" (± €170–180)
- Amazon `B01M9ATDY7` (shortlink `amzn.to/4uAP26t`) = "Honeywell Home **T6R Draadloze** Smart Thermostaat" (± €115–125)

Het prijsverschil is dus terecht: draadloos met aparte ketelontvanger is goedkoper dan bedraad. Het probleem zat in `smarthome-producten.html`: de productcard heet "Honeywell Home Lyric T6 **bedraad**" met USP "Bedraad — stabielste verbinding", maar had daaronder een Amazon-knop die naar het **draadloze** model wees. Een bezoeker las dat als "hetzelfde product, €55 goedkoper op Amazon". Knoplabel gewijzigd naar "Draadloze T6R op Amazon" plus een korte toelichting onder de card dat het twee modellen zijn.

Op `slimme-thermostaat-installeren.html` stond de T6R al correct gelabeld als draadloos — daar was niets mis.

**Les: een groot prijsverschil onder één productnaam is vaker een verwisselde variant dan een verkeerde prijs.** Check bij zo'n signaal eerst of beide links wel hetzelfde artikel zijn (resolve de Amazon-shortlink en vergelijk de ASIN/producttitel) voordat je aan een prijs gaat sleutelen. `curl -I` op `amzn.to` faalt op SSL; WebFetch geeft de redirect-URL wel netjes terug.
