# StekkerSlim.nl — QA-audit systeem
*Laatst bijgewerkt: 3 augustus 2026*

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

Het script verandert zelf nooit iets aan de site — het rapporteert alleen.

## 2. De maandelijkse routine (automatisch, in de cloud)
Er staat een geplande cloud-agent (routine) die **elke 1e van de maand om 08:00 UTC** (~10:00 zomertijd) automatisch:
1. De repo ophaalt
2. `Scripts/qa-audit.sh` draait
3. Het resultaat samenvat in gewone taal voor Remy — kort, geen ruwe scriptoutput tenzij een probleem dat rechtvaardigt
4. **Niets zelf aanpast** — puur rapporteren, geen commits of fixes

Terug te zien op: `https://claude.ai/code/routines/trig_01SQ7WwF1LtTiBa5gxaRod6p` (elke run staat in de geschiedenis).

## Wat dit systeem NIET checkt (blijft handmatig)
- **Prijzen.** Scrapen is onbetrouwbaar: sites blokkeren bots, prijzen worden dynamisch geladen, en kortingscodes hebben voorwaarden die je niet uit de HTML kunt afleiden. Voorbeeld: op 3 augustus 2026 stond er op stekkerslim.nl €799 voor de Indevolt SolidFlex 3000 AC, terwijl de site inmiddels €849 vroeg — dat kwam pas aan het licht via een echte browsercheck, niet via een script. Er stond ook een "€50 korting"-badge op de Indevolt-pagina die verwarrend leek, maar die code geldt pas vanaf €1.000 bestelwaarde en telt dus niet mee bij een losse aankoop.
- **CSS-leesbaarheid van nieuwe knoppen.** Op 3 augustus 2026 werd een CTA-knop toegevoegd aan `indevolt-solidflex-3000-review.html` met een nieuwe class `.btn-primary` zonder `!important`. Resultaat: onzichtbare tekst (groen op groen), want de pagina heeft een generieke regel `.article-body a{color:var(--groen)}` die specifieker is dan een losse class zonder `!important`. **Les: hergebruik bij een nieuwe knop altijd een bestaande, al werkende knop-class op diezelfde pagina (bv. `hub-btn`, `btn-koop`, `product-card a`) in plaats van een nieuwe class te verzinnen. Moet het toch een nieuwe class zijn, zet de tekstkleur dan met `!important` en check 'm zelf in de browser voor je pusht.**

Advies: 1x per maand (of vaker als er veel prijzen wijzigen) kort een browser-based sessie draaien die een paar belangrijke/recent gewijzigde producten spotcheckt tegen de echte winkelpagina.
