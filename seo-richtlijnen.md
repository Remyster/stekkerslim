# StekkerSlim.nl — SEO-richtlijnen
*Laatst bijgewerkt: 16 juli 2026*

## Vaste technische regels
- Canonical: altijd non-www HTTPS, `<link rel="canonical" href="https://stekkerslim.nl/bestandsnaam.html">`.
- Interne links: gebruik `href="/"` voor de homepage, niet `href="index.html"`.
- OG-image bestandsnaam is `og-image.png` (met streepje) — niet `ogimage.png`. Dit gaat vaak fout, altijd checken.
- `<title>` en `<h1>` bevatten het exacte doelzoekwoord.
- Minimaal 500 woorden content, minimaal 1 affiliate link of CTA per pagina.

## Nieuwe pagina — checklist (altijd volledig uitvoeren)
1. Canonical tag
2. OG tags (title, description, image)
3. Title + H1 met exact doelzoekwoord
4. Minimaal 500 woorden
5. Minimaal 1 affiliate CTA
6. Toevoegen aan sitemap.xml
7. Interne links vanuit minimaal 3 bestaande pagina's
8. Kaart toevoegen aan blog.html
9. Sitemap resubmitten in Search Console
10. Indexering aanvragen in Search Console

## Feitelijke correcties die overal moeten gelden
- **Saldering**: correcte naam is "Wet beëindiging salderingsregeling", aangenomen door Eerste Kamer op 17 december 2024, ingangsdatum **1 januari 2027**. Gebruik "per 1 januari 2027", nooit "na 2027".
- **Batterijprestaties**: terugleveren-reductie tot ~400 kWh vereist actieve EMS/curtailment; zonder EMS blijft ~800-1.000 kWh over. Eigen verbruik stijgt van 30% naar 60-70% — dat is correct ZONDER EMS. Niet overdrijven.
- **"Gecrawld - momenteel niet geïndexeerd"** in Search Console = crawl-budget/autoriteit-issue op een jonge site, geen technische fout. Fix: handmatige URL-inspectie aanvragen.
- **"Pagina met omleiding"** en **"Alternatieve pagina met correcte canonieke tag"** voor http/www-varianten = verwacht GitHub Pages-gedrag, geen actie nodig.

## Prioriteit voor interne linking & CTA-plaatsing
Energiecontract-pagina's (Energiekiezer, Frank Energie, Pricewise) leveren beduidend meer affiliate-waarde op dan productpagina's — prioriteer deze voor CTA-plaatsing en interne links vanuit nieuwe content.

## CTA-integriteit
Check bij elke CTA of de tool waar je naar verwijst daadwerkelijk doet wat de CTA-tekst belooft. Voorbeeld van een fout die eerder gemaakt is: een blog over wasmachines op dynamisch tarief verwees naar de energiekosten-calculator met de belofte "wat kosten jouw wasbeurten" — die calculator berekent de totale jaarrekening, geen losse wasbeurten. Fix: CTA-tekst aanpassen aan wat de tool echt doet, niet andersom.
