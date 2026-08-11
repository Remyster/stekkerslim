# StekkerSlim.nl — Project Verslag (bijgewerkt)
*Gegenereerd: 11 augustus 2026 — bijgewerkte versie na verificatie in de repo*

Dit is de bijgewerkte versie van het verslag van StekkerSlim Bouwer. Een aantal punten dat als "open" stond, bleek bij controle in de repo al afgerond. Andere punten zijn door Remy mondeling bevestigd of gecorrigeerd.

---

## Wat er is geverifieerd sinds het vorige verslag (11 augustus 2026)

- **Sitemap lastmod-bug**: gefixt op 2026-08-08 — echte spreiding i.p.v. één datum voor alle pagina's.
- **Thuisbatterij-cluster consolidatie**: 5 overlappende plug-in-batterijpagina's samengevoegd tot 1 pillar-pagina + sitewide linkopschoning, 2026-08-08.
- **Saldering-cluster consolidatie**: 3 overlappende saldering-pagina's samengevoegd tot `saldering-2027.html`, zelfde dag.
- **Productnaam PowerFlex 2000 → SolidFlex 2000 ECO**: geverifieerd in de repo — geen enkele "PowerFlex 2000" meer op de site. Enige treffer is een historische notitie in `Kennisbank/affiliate-regels.md` die de omzetting documenteert, geen bug.
- **EcoFlow DELTA Pro** komt niet (meer) voor in `thuisbatterij-top5-2026.html` — geverifieerd, geen actie nodig.
- **Indevolt SolidFlex 2000 ECO + 3000 AC**: beide staan met eigen productkaart, vergelijkingstabel-rij en Awin-koopknop (awinmid=110350) in `thuisbatterij-top5-2026.html` — geverifieerd, al live.
- **smart-lampen.html / slimme-stekkers.html**: staan in `blog.html` al onder een eigen sectie "🏠 Smarthome-overzichten" (`data-cat="smarthome"`), gescheiden van de blog-stream — geverifieerd, al correct ingedeeld.
- Kleinere content-fixes: netcongestie-nuance (800W stopcontact vs 2.500W comfortaansluiting), blog-kaarttitel gelijkgetrokken met H1 saldering-2027, tarief/datumfout in saldering-2027.html gecorrigeerd.

**Conclusie**: alle 5 punten die in het vorige verslag als "urgent, klaar maar nog niet gepusht" stonden, staan inmiddels wél live in de repo.

---

## Correcties van Remy (11 augustus 2026)

| Punt uit vorig verslag | Update |
|---|---|
| Tado affiliate (Awin 86413) | **Nog steeds niet actief** — blijft open, wachten op goedkeuring |
| Blog 2 Indevolt | **Moet Remy nog afmaken** — resterende tests (geluid/warmte, offline-test, stroomuitval, HomeWizard P1 dual-meter) nog niet klaar |
| DMARC/SPF fix Hostnet | **Afgerond, werkt** — van open-lijst gehaald |
| Supabase `stekkerslim-ai-control` pauzering | **Al geregeld door Remy** — van open-lijst gehaald |
| 5% Indevolt-lezerskorting | **Al actief**: kortingscode `STEKKERSLIM5` — van open-lijst gehaald |

---

## Openstaande punten (bijgewerkt overzicht)

### 🔴 Blokkeert content/publicatie
- **Blog 2 Indevolt** afmaken — Remy moet resterende tests afronden:
  - Gecontroleerde stroomuitval (backup power) — er was wél een onverwachte uitval eerder gedocumenteerd
  - Geluidsmeting en warmteontwikkeling
  - Offline/lokale controle (wifi uit)
  - AI-modus: meerdere dagen data (nu: 0% verbetering gedocumenteerd)
  - HomeWizard P1 dual-meter test (hardware is aangeschaft)
  - Jasmine's verzoek: nadruk op communicatiestabiliteit (wifi, Bluetooth, RJ45, LoRa incl. P1 LoRa)

### 🟡 SEO / stabiliteit
- **Stabiliteitsperiode loopt door tot eind augustus 2026** — geen sitewide/bulk-wijzigingen tot dan, ook geen routinematige mechanische fixes over veel bestanden tegelijk.
- **Interne links** vanuit geïndexeerde pagina's naar niet-geïndexeerde prioriteitspagina's — nog te doen.
- **Sitemap resubmitten** in Search Console na recente pushes — Remy doet dit zelf.
- **Google Search Console indexering niet actief aanvragen** tot sitemap + stabiliteit volledig op orde zijn — lopende afspraak.

### 🟢 Kan wachten
- **Blog 3 Indevolt** — requirements nog TBD.
- **Marstek Venus E Mini review** (contact Vivi) — vroege gesprekken, geen commitment.
- **Tado affiliate** (Awin 86413) — nog steeds pending.
- **HomeWizard affiliate status** — onbevestigd, niet gebruiken tot geverifieerd.
- **Externe backlinks** — structureel gat, nog geen strategie.
- **Energiebespaar-calculator**: inmiddels al live sinds 2026-08-04 (zie changelog CLAUDE.md) — dit punt is dus achterhaald/afgerond, ondanks dat het vorige verslag het nog als open had staan.
- **battery_sim blog "eigen resultaten"-sectie**: nog steeds placeholder, wacht op Remy's eigen testdata uit Home Assistant.

---

## Harde regels die gelden (ongewijzigd, blijven van kracht)

1. Nooit AI-tools direct schrijftoegang geven tot de repo — Grok-incident 21 juni is de les.
2. Nooit Product/Offer/price-schema gebruiken — StekkerSlim is geen merchant.
3. Saldering eindigt per 1 januari 2027 — nooit "na 2027".
4. EMS/curtailment onderscheid: 400 kWh reductie vereist actieve EMS; zonder EMS ~800–1.000 kWh.
5. Indevolt art. 4.7: resultaten labelen als Remy's persoonlijke testomgeving, geen generieke claims.
6. Approximate prijzen (±-notatie) — geen exacte prijzen om frequente correcties te vermijden.
7. `og-image.png` (met streepje) — niet `ogimage.png`.
8. Repo is privé — web_fetch op raw.githubusercontent.com werkt niet, alleen Claude Code heeft toegang.

---

*Bijgewerkt door Claude Code op basis van directe verificatie in de repo + correcties van Remy, 11 augustus 2026.*
