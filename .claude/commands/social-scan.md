---
description: Zoekt relevante vragen/threads op Reddit en Tweakers, stelt concept-antwoorden op, en legt ze ter goedkeuring voor (geen automatisch posten)
---

Zoek op Reddit, Tweakers en Facebook-groepen naar recente vragen/threads die aansluiten bij StekkerSlim-onderwerpen (thuisbatterijen, zonnepanelen/saldering, energiebesparing, dynamische energiecontracten, thuisopslag), stel per vraag een kort, menselijk concept-antwoord op dat waar logisch linkt naar een eigen blog- of calculatorpagina (nooit een affiliate-link), en laat het geheel zien aan Remy voor goedkeuring. **Nooit zelf posten of verzenden — dat doet Remy, per item, na akkoord.** Draai dit commando op de vaste ma/do-cadans (staat in Remy's agenda, 20:00) of wanneer Remy er expliciet om vraagt.

**Let op — Tweakers huisregel 6**: het forum "Duurzame energie en installaties" verbiedt expliciet reclame/referrals/commerciële content (zie topic "Duurzame Energie en Installaties - Beleid"). **Bevestigd op 15 sept 2026**: een moderator ("teacher") verwijderde de stekkerslim.nl-link uit de eerste geplaatste reactie en verving 'm door een spottende placeholder-URL. **Plaats daarom op Tweakers nooit meer een stekkerslim.nl-link — puur inhoudelijk helpen, zonder link.**

Lees eerst `Kennisbank/social-scan-bronnen.md` — daar staan de contentmapping (onderwerp → eigen pagina) en de log van eerder behandelde threads (niet twee keer dezelfde thread oppakken).

**Verbruik-efficiëntie (geleerd van de eerste run, 15 sept 2026) — houd dit laag:**
- Gebruik `mcp__claude-in-chrome__browser_batch` om meerdere acties (navigeren, klikken, typen) in één keer te versturen in plaats van los per stap — scheelt round-trips.
- Gok geen URL's (permalinks, forum-lijst-paden) — die kloppen vaak niet en kosten een mislukte navigatie + herstelpoging. Klik altijd een echte link aan of pak de href via `find`/`read_page`.
- Gebruik `get_page_text` als eerste check van een pagina/thread — pas een screenshot nemen als je iets visueel moet controleren (bijv. of een tekstveld echt gevuld is vóór je verzendt, want typen in een rich-text/iframe-veld faalt soms stil).
- Reddit's site-brede zoekfunctie (`reddit.com/search`) geeft veel Engelstalige ruis op Nederlandse termen (bijv. "saldering" matcht "soldering"). Ga liever direct naar de relevante subreddit(s) `/new` i.p.v. breed zoeken.
- Tweakers GoT-topiclijsten zijn virtualized (laden pas bij scrollen) — `read_page`/`find` zien alleen wat al gerenderd is. Scroll eerst met `computer` naar het gewenste deel van de lijst voordat je zoekt naar een linkje.
- Niet elk klein bevestigingsmoment hoeft een losse screenshot — bundel checks.

## Stap 0 — Browser klaarzetten + openstaande accounts checken
Gebruik de Chrome-browsertools (Remy's eigen ingelogde sessie, dus ook toegang tot besloten Tweakers-account indien ingelogd). Geen scraping/API — gewoon browsen zoals een mens zou doen.

Check `Kennisbank/social-scan-bronnen.md` op bronnen met status "nog geen account" (bijv. Driving-Fun Forum). Herinner Remy daar aan het begin van deze sessie kort aan — zodra hij een account heeft aangemaakt, die bron meenemen in stap 1-2b.

## Stap 3b — Factcheck en verfijning (Gemini + Perplexity)
Voor een concept-antwoord met een feitelijke claim die je niet zeker weet (bijv. productspecificaties, "bestaat X wel/niet"): check dit eerst via Perplexity (`perplexity.ai`) voordat je het antwoord afrondt — niet gokken op technische/product-claims. Gebruik daarna optioneel Gemini (`gemini.google.com/app`) om de toon losser/natuurlijker te maken (plak het concept, vraag om het te herschrijven alsof een gewone forumgebruiker het typt, geen opsommingen). Gebruik het resultaat alleen als het beter is dan het origineel.

## Stap 1 — Reddit doorzoeken
Ga naar `reddit.com/search` en zoek op de kernonderwerpen (thuisbatterij, zonnepanelen saldering, dynamisch energiecontract, energie besparen, thuisopslag — Nederlandstalige en Engelstalige varianten). Filter op "nieuw" of laatste week. Voor elke kandidaat-thread:
- Is de vraag/discussie inhoudelijk relevant (niet alleen een woord dat toevallig matcht)?
- Staat er al een duidelijk, compleet antwoord van iemand anders? Zo ja, meestal overslaan tenzij je iets waardevols toevoegt.
- Check `Kennisbank/social-scan-bronnen.md` log — deze thread al eerder gezien? Overslaan.

## Stap 2 — Tweakers doorzoeken
Ga naar Tweakers GoT-forum "Duurzame energie en installaties" (`gathering.tweakers.net/forum/list_topics/71`). Zoek kleine, verse topics met weinig reacties (niet de megathreads met duizenden reacties en eigen groepscultuur). Zelfde relevantiecheck als stap 1. Zie de waarschuwing over huisregel 6 hierboven.

## Stap 2b — Facebook-groepen doorzoeken
Ga langs de groepen in `Kennisbank/social-scan-bronnen.md`. Per groep: check eerst of er een "Openstaande vragen"-tab is (`/questions/` in de URL) — dat is sneller dan de hele feed scrollen. Zo niet, scroll kort door de feed op zoek naar een echte vráág (geen prijs-/flex-/statuspost). **Besteed niet te veel tijd per groep** — vind je binnen een korte blik geen duidelijke, passende vraag, ga dan door naar de volgende groep. Niet elke groep hoeft elke run iets op te leveren.

## Stap 3 — Concept-antwoorden opstellen
Schrijf per relevante thread een kort antwoord (2-5 zinnen), in gewone spreektaal, geen "expert"-toon, geen opsommingen, geen streepjes/dashes, geen verkooppraatje. Beantwoord de vraag eerst inhoudelijk en oprecht; een link naar een eigen pagina hoort er alleen bij als die er natuurlijk bij past (bijv. "ik heb daar laatst over geschreven, misschien handig: [link]") — nooit geforceerd, en nooit een affiliate-link, alleen gewone `stekkerslim.nl/...`-paginalinks. Gebruik de contentmapping in `Kennisbank/social-scan-bronnen.md` om de juiste pagina te kiezen. Niet elk antwoord hoeft een link te bevatten — puur helpen mag ook zonder link.

Optioneel: laat een lastig antwoord verfijnen via Gemini in de browser (`gemini.google.com/app`) voordat je het in de lijst zet — plak het concept, vraag om het natuurlijker/korter te maken, gebruik het resultaat als het beter is.

## Stap 4 — Overzicht tonen (stop hier)
Toon Remy een lijst met per item:
1. Platform + groep/forum-sectie
2. Link naar de originele thread
3. Korte samenvatting van de vraag
4. Voorgesteld antwoord (volledige tekst)

Vraag expliciet per item (of voor de hele lijst) akkoord voordat er iets verstuurd wordt. **Verstuur niets zonder expliciet akkoord van Remy voor dat specifieke item.** Als Remy een antwoord wil aanpassen, pas aan en toon opnieuw.

## Stap 5 — Verzenden (alleen na akkoord)
Voor threads waar Remy akkoord geeft: plaats de reactie via de browser (ingelogd als Remy) op de exacte plek die hij goedkeurde. Geen board/timing-beslissingen zelf nemen buiten wat gevraagd is.

## Stap 6 — Loggen
Werk `Kennisbank/social-scan-bronnen.md` bij: voeg iedere behandelde thread toe aan de log (ook de overgeslagen/niet-geplaatste, zodat ze niet opnieuw opduiken), met datum, platform, threadlink, status (geplaatst/overgeslagen), en bij geplaatst: welke pagina gelinkt is.

## Afsluiten
Korte samenvatting: hoeveel threads gevonden, hoeveel geplaatst, hoeveel overgeslagen en waarom. Geen automatische vervolgactie — engagement-check (upvotes/reacties) hoort bij een latere `/social-scan-report`, niet in dit commando.
