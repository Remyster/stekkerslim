---
description: Tweewekelijkse QA-audit — links, prijzen en Search Console-indexering
---

Voer de volledige QA-ronde uit voor StekkerSlim.nl. Dit is een terugkerende taak (elke ~2 weken), doorloop alle stappen hieronder zonder dat de gebruiker ze hoeft uit te typen.

## Stap 1 — Geautomatiseerde check
Draai `bash Scripts/qa-audit.sh` vanuit de repo-root. Vat het rapport samen in gewone taal, kort en scanbaar — noem alleen problemen, niet wat goed is. Verander in deze stap zelf niets aan de repo.

Let op: het script checkt GEEN prijzen (vereist browser) en mist tidd.ly / ds1.nl links (niet in de curl-regex van het script).

## Stap 2 — Browser: links en prijzen
Gebruik de Chrome-browsertools (ingelogd in Remy's eigen sessie) om:
- Alle affiliate-links die het script niet kon bevestigen (403/500/503) handmatig te bezoeken en te checken of ze echt kapot zijn.
- De tidd.ly- en ds1.nl-links te bezoeken (niet gedekt door het script).
- De belangrijkste/recent gewijzigde productprijzen live te checken tegen de site-content. Zoek prijzen op in de HTML-bestanden (grep op €-bedragen bij productcards) en vergelijk met wat je op de daadwerkelijke winkelpagina (Bol.com, Coolblue, Marstek.nl, Zendure, Indevolt, HomeWizard, Amazon) ziet.

Rapporteer gevonden afwijkingen (link kapot, prijs anders, product tijdelijk uitverkocht) kort en concreet, met bestandsnaam + regel waar relevant.

## Stap 3 — Prijzen aanpassen (na akkoord of standing instructie)
Als er prijzen afwijken: maak ze **ruimer** (een range in plaats van een vast bedrag) in plaats van het nieuwe exacte bedrag in te vullen — zo lopen ze minder snel weer achter de feiten aan. Zoek alle plekken waar diezelfde prijs op de site voorkomt (vaak meerdere pagina's/tabellen) en werk ze allemaal bij.

Daarna: commit de wijzigingen (nieuwe, niet-amend commit) en **push naar GitHub** — zonder push staat de live site nog op de oude prijzen en heeft een Search Console-crawl geen zin.

## Stap 4 — Google Search Console: indexering aanvragen
Ga naar `https://search.google.com/search-console?resource_id=sc-domain:stekkerslim.nl` en gebruik de URL-inspectietool om voor de zojuist gewijzigde pagina's "Indexering aanvragen" te klikken.

- Gebruik voor elke pagina: klik in de zoekbalk bovenaan → typ de volledige URL (`https://stekkerslim.nl/paginanaam.html`) → Enter → wacht ~3-4 sec.
- Check eerst of de pagina al "URL is geïndexeerd door Google" toont (groen vinkje) — dan is geen actie nodig, skip.
- Zo niet: klik op de knop "Indexering aanvragen" (gebruik de `find`-tool om de knop-ref te pakken, coördinaten-klikken is onbetrouwbaar door wisselende viewport-schaal). Wacht op het groene "Indexering aangevraagd"-bevestigingsbericht, sluit dan met Escape en ga door naar de volgende URL.
- Er zit een **dagelimiet van ongeveer 10-12 aanvragen per dag** op. Als een klik geen bevestiging meer oplevert (ook niet na een page-reload en opnieuw klikken), is de limiet waarschijnlijk bereikt — stop dan en meld hoeveel er wel gelukt zijn. De rest kan een volgende keer.
- Prioriteer: eerst alle pagina's die deze ronde qua prijs/tekst gewijzigd zijn, dan eventueel index.html/blog.html als er nog ruimte over is (check eerst of die al geïndexeerd staan).

## Afsluiten
Sluit af met een korte samenvatting: wat is er gefixt, wat is er gepusht, hoeveel pagina's zijn aangeboden voor indexering, en of er nog openstaande punten zijn voor de volgende ronde (bv. links die wel kapot bleken, of pagina's die de dagelimiet niet haalden).
