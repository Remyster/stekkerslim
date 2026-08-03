# StekkerSlim.nl — Affiliate-regels
*Laatst bijgewerkt: 3 augustus 2026*

## HARDE REGEL — businessmodel
StekkerSlim.nl is een **affiliate-only doorverwijssite**, nooit een merchant. StekkerSlim verkoopt zelf geen producten of energiecontracten.

**Nooit gebruiken in structured data (JSON-LD):** `Product`, `Offer`, `price`, `availability`, `shippingDetails`, `hasMerchantReturnPolicy`. Google zou dit interpreteren als merchant-status, wat niet klopt en tot penalisatie kan leiden. Toegestaan: `Article`, `BreadcrumbList`, `FAQPage`, `Organization`, `Person`, `WebSite`.

## Affiliate netwerken & IDs
| Netwerk | ID |
|---|---|
| Daisycon | 419188 |
| Awin | 2816288 |
| Amazon Associates | stekkerslim-21 |
| Bol.com | 1510756 |

## Live & actief
Energiekiezer (Awin 68288), Essent (lt45.net, Daisycon 9787), Bol.com, Amazon, Awin/Coolblue (85161), Coolblue Energie (85163), Pricewise (Daisycon 18646, goedgekeurd juli 2026), Frank Energie (jf79.net, Daisycon 16978, goedgekeurd juli 2026), Gaslicht.com (Awin 8520), CVtotaal (Daisycon 14618 — links opvragen indien nog niet gedaan), Zendure NL (Daisycon 20779), Vandebron (Daisycon 12134), Feenstra (Awin 25642 + tidd.ly shortlinks), Innova Energie (Daisycon 15501), AliExpress (Daisycon 7630), **Indevolt (Awin 110350, sinds 3 augustus 2026 — zie hieronder)**.

⚠️ **EcoFlow (Awin 123332)** — netwerk-ID staat nog geregistreerd, maar per 3 augustus 2026 is elke EcoFlow-link van de site verwijderd (DELTA Pro was niet meer op Bol.com te vinden, dode CTA in thuisbatterij-top5-2026.html). Niet opnieuw toevoegen zonder eerst te verifiëren dat het product weer live/bereikbaar is.

## Pending
- Tado (Awin 86413)
- Vaillant (Daisycon 20260)
- Essent Laadpassen (Daisycon 19834)

## Afgewezen — niet gebruiken
Independer, Eneco, Milieucentraal.

## Indevolt — nu via Awin (voorheen reviewpartnership)
- **Awin-ID: 110350** (nieuwe advertiser binnen bestaand Awin-account 2816288) — sinds 3 augustus 2026 actief, eerste echte affiliate-links voor Indevolt.
- Linkpatroon: `https://www.awin1.com/cread.php?awinmid=110350&awinaffid=2816288&ued=[URL-encoded productpagina]`
- **SolidFlex 2000 ECO** — let op: heette eerder op de site abusievelijk "PowerFlex 2000", dat is gecorrigeerd. Voorheen niet-affiliate via thuisbatterij.nl/tidd.ly — die links zijn overal vervangen.
- **SolidFlex 3000 AC** — reviewproduct (zie blogs-in-progress.md), contact Jasmine (partnership@indevolt.com), contract getekend als particulier. CTA-link staat inmiddels in de review-blog en in thuisbatterij-top5-2026.html.
- Contact/reviewafspraak blijft ongewijzigd: Jasmine, partnership@indevolt.com.

## Reviewpartnerships (geen standaard affiliate-link)
- **Marstek** — Venus E Mini, contact Vivi, vroege gesprekken.

## Linkpatroon
Affiliate link:
```html
<a href="[affiliate-URL]" target="_blank" rel="noopener sponsored">Tekst →</a>
```
Niet-affiliate directe link (bijv. Marstek.nl, thuisbatterij.nl):
```html
<a href="[directe-URL]" target="_blank" rel="noopener">Tekst →</a>
```
Amazon: altijd volledige link `amazon.nl/dp/[ASIN]?tag=stekkerslim-21`, geen amzn.to shortlinks gebruiken in nieuwe content (bestaande shortlinks zijn per product-specifiek, niet uitwisselbaar).

## Belangrijke productkennis
- **Marstek Venus E 3.0**: niet meer leverbaar via Amazon. Gebruik Bol.com affiliate + Marstek.nl direct.
- **Indevolt SolidFlex 2000 ECO** (voorheen "PowerFlex 2000 ECO"): ± €730–770, via Awin 110350.
- **Indevolt SolidFlex 3000 AC**: ± €799, 1,792 kWh basismodule, AC-gekoppeld (geen MPPT nodig), uitbreidbaar tot bijna 20 kWh via BatteryFlex, via Awin 110350.
- Check bij elke prijsvermelding de datum van de laatste update — prijzen wijzigen regelmatig. Gebruik waar mogelijk een `±`-range i.p.v. een exacte prijs, tenzij het een vaste fabrikantsprijs is (bijv. HomeWizard P1 Meter €24,95 direct via HomeWizard).
