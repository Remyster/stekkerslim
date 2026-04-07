# StekkerSlim.nl — Project Overzicht

## Wat is dit?
Statische HTML/CSS website over energie besparen voor Nederlandse gezinnen. Geen framework, geen build-stap — gewoon losse `.html` bestanden die via GitHub Pages gehost worden op **stekkerslim.nl**.

## Hoe verdient dit geld?
Affiliate links. Drie programma's:
- **AWIN** — Energiekiezer.nl (`awinaffid=2816288`) en Coolblue (`awinmid=85161`)
- **TradeTracker / lt45.net** — Vattenfall Energie en Vattenfall Zonnepanelen
- **Amazon** — via `amzn.to` shortlinks
- **Bol.com** — via `partner.bol.com`
- **HomeWizard** — via `partner.homewizard.com` (`wi=419188`)

Grootste commissies zitten op energiecontract-overstap (Energiekiezer) en zonnepanelen offerte (Vattenfall).

## Google Analytics
**GA4 Measurement ID: `G-RKF36BF7DB`**
Staat in alle 25 HTML-bestanden in de `<head>`.

## Pagina-structuur
| Type | Pagina's |
|------|----------|
| Calculators | `calculator-zonnepanelen.html`, `calculator-energiekosten.html`, `calculator-laadpaal.html`, `calculator-thuisbatterij.html`, `calculator-warmtepomp.html` |
| Artikelen energie | `saldering-2027.html`, `terugleverkosten.html`, `terugleververgoeding-2027.html`, `zonnestroom-na-2027.html`, `dynamisch-contract.html`, `energiecontract-vergelijken-2026.html` |
| Artikelen smarthome | `beste-slimme-stekker-2026.html`, `smarthome-p1-meter.html`, `slimme-thermostaat-installeren.html`, `homeassistant-energie-besparen.html`, `smarthome-uitleg.html` |
| Productpagina's | `smarthome-producten.html`, `slimme-stekkers.html`, `smart-lampen.html`, `thuisbatterij-top5-2026.html` |
| Overig | `index.html`, `blog.html`, `over-ons.html`, `privacy.html`, `vragen.html` |

## Design systeem
CSS variabelen in elke pagina (geen gedeeld stylesheet):
```css
--groen: #00D17A
--navy:  #0B1628
--licht: #F4F7F2
--accent: #FFD23F
```
Fonts: `Outfit` (headings) + `DM Sans` (body) via Google Fonts.

## SEO
- Schema.org JSON-LD (Article, BreadcrumbList, HowTo, Review) op alle content-pagina's
- Canonical tags aanwezig op de meeste pagina's
- Sitemap: `sitemap.xml`
- `robots.txt` aanwezig

## Deployment
Statische bestanden → GitHub repository `Remyster/stekkerslim` → GitHub Pages → stekkerslim.nl

```bash
git add -A
git commit -m "omschrijving"
git push
```

## Affiliate links toevoegen — patroon
```html
<a href="https://www.awin1.com/cread.php?awinmid=68288&awinaffid=2816288&ued=https%3A%2F%2Fwww.energiekiezer.nl%2F"
   target="_blank" rel="noopener sponsored">Tekst →</a>
```
Altijd `rel="noopener sponsored"` toevoegen (Google-eis voor affiliate links).

## Wat nog ontbreekt (todo)
- E-mail capture / nieuwsbrief (bijv. Brevo of Mailchimp)
- Google Search Console koppelen aan GA4
- Meer artikelen (meer pagina's = meer organisch verkeer = meer affiliate clicks)
