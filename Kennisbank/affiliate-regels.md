# StekkerSlim.nl — Affiliate-regels
*Laatst bijgewerkt: 16 juli 2026*

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
Energiekiezer (Awin 68288), Essent (lt45.net, Daisycon 9787), Bol.com, Amazon, Awin/Coolblue (85161), Coolblue Energie (85163), Pricewise (Daisycon 18646, goedgekeurd juli 2026), Frank Energie (jf79.net, Daisycon 16978, goedgekeurd juli 2026), Gaslicht.com (Awin 8520), CVtotaal (Daisycon 14618 — links opvragen indien nog niet gedaan), Zendure NL (Daisycon 20779), EcoFlow (Awin 123332), Vandebron (Daisycon 12134), Feenstra (Awin 25642 + tidd.ly shortlinks), Innova Energie (Daisycon 15501), AliExpress (Daisycon 7630).

## Pending
- Tado (Awin 86413)
- Vaillant (Daisycon 20260)
- Essent Laadpassen (Daisycon 19834)

## Afgewezen — niet gebruiken
Independer, Eneco, Milieucentraal.

## Reviewpartnerships (geen standaard affiliate-link)
- **Indevolt** — SolidFlex 3000 AC, contact Jasmine (partnership@indevolt.com), contract getekend als particulier, affiliate-regeling nog te formaliseren.
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
- Check bij elke prijsvermelding de datum van de laatste update — prijzen wijzigen regelmatig.
