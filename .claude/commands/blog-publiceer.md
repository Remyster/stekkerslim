---
description: Stap 9 van de blog-pipeline — publicatiecheck, sitemap, blog.html, interne links en Kennisbank, en pas na akkoord van Remy een commit naar main
---

Dit is **stap 9 van 9**: de pagina staat klaar als bestand en moet de site in. Dit is de enige stap die `main` aanraakt.

## Nooit pushen zonder akkoord

Doe eerst alles wat lokaal kan, laat het resultaat zien, en **vraag Remy expliciet om akkoord voordat je commit of pusht**. Per keer opnieuw: akkoord op deze blog is geen akkoord op de volgende. Toon voor de vraag een `git status` en `git diff --stat`, zodat hij ziet wat er precies verandert.

## 1. Laatste controle

```
node Scripts/check-pagina.js <slug>.html
```

Faalt er iets, stop. Niet publiceren en het "later rechtzetten".

## 2. De pagina inhaken

Een pagina die nergens vandaan gelinkt wordt bestaat voor Google niet. Vier dingen, allemaal verifiëren en niet aannemen:

1. **`sitemap.xml`** — voeg de URL toe op de juiste plek, met `<lastmod>` op vandaag. Houd de opmaak van de omliggende regels aan.
2. **`blog.html`** — voeg het artikel toe aan het overzicht, in dezelfde kaartvorm als de bestaande artikelen.
3. **Minstens drie interne links** vanuit bestaande pagina's naar het nieuwe artikel. Kies pagina's waar de link inhoudelijk hoort, niet de eerste drie die je tegenkomt, en schrijf een ankertekst die zegt waar je terechtkomt. Geen "lees meer".
4. **`_SP`-array** — die regel is in stap 6 toegevoegd. Controleer dat hij er nog staat (`check-pagina.js` doet dit ook) en dat de nieuwe interne links in de andere pagina's niet per ongeluk een `_SP`-blok hebben beschadigd.

Draai daarna `bash Scripts/qa-audit.sh` en kijk of er door jouw wijzigingen iets kapot is gegaan. Bestaande meldingen die er al stonden hoef je niet op te lossen; nieuwe wel.

## 3. Kennisbank bijwerken

- `Kennisbank/blogs-gepubliceerd.md`: regel erbij met datum, bestandsnaam, onderwerp, doelzoekwoord.
- `Kennisbank/blogs-in-progress.md`: dit artikel eruit.
- `Kennisbank/blog-pipeline-log.md`: afsluitende regel voor deze run.

Na een push naar `Kennisbank/**` draait de GitHub Action `sync-drive.yml` automatisch en synct naar Google Drive, zodat de Gems de bijgewerkte stand zien. Je hoeft daar verder niets voor te doen, maar weet dat het gebeurt.

## 4. Pas dan committen

Zit je op `main`, maak dan eerst een branch. Commit met een boodschap die zegt wat er gepubliceerd is en waar het vandaan komt. Push pas na het expliciete akkoord uit de eerste alinea.

## 5. Wat Remy daarna zelf moet doen

Noem dit als lijstje, want jij kunt het niet:
- De foto's maken die als `<!-- FOTO: ... -->` in de pagina staan. Zet ze erbij als lijst met per foto wat erop moet.
- Sitemap opnieuw indienen in Search Console en indexering aanvragen voor de nieuwe URL.
- Feiten nalopen die uit zijn eigen ervaring komen; die kan geen enkele AI verifiëren.

## Wat je oplevert

```
GEPUBLICEERD: <slug>.html

CONTROLE: 25/25 goed
QA-AUDIT: [geen nieuwe meldingen / lijst]

INGEHAAKT
- sitemap.xml: regel toegevoegd
- blog.html: kaart toegevoegd
- interne links: [bestandsnaam → ankertekst] ×3
- _SP: aanwezig

KENNISBANK
[welke bestanden bijgewerkt]

COMMIT: [hash + boodschap, of "nog niet gecommit, wacht op akkoord"]

NOG TE DOEN DOOR REMY
[foto's, Search Console, eigen feiten]
```
