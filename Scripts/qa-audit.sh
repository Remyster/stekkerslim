#!/bin/bash
# StekkerSlim.nl — maandelijkse QA-audit
#
# Checkt: affiliate-links (echt bereikbaar?), interne links (verwijzen ze naar
# bestaande pagina's?), sitemap.xml (klopt die nog?), lokale afbeeldingen
# (bestaan ze?). Geeft een kort, scanbaar rapport — alleen problemen worden
# uitgeschreven, niet de volledige lijst van wat goed is.
#
# Gebruik:
#   cd naar de repo-root (waar dit script's ouder-map "Scripts/" in staat)
#   bash Scripts/qa-audit.sh
#
# Belangrijk over false positives:
# Coolblue en Amazon blokkeren curl-achtige user-agents (403/500/503), ook als
# de link zelf prima werkt. Dit script gebruikt daarom een echte browser
# user-agent EN retryt 3x met een paar seconden pauze voor het iets als
# "kapot" bestempelt — puur curl-based checken zonder die twee dingen levert
# structureel vals alarm op.
#
# Wat dit script NIET kan (blijft handmatig, 1x per maand kort checken):
#   - Prijzen kloppen nog? (scrapen is te fragiel, sites wijzigen structuur
#     constant — en veel sites blokkeren scrapers sowieso)
#   - CSS-bugs zoals onzichtbare tekst (groen-op-groen). Zie de aug 2026 bug
#     in indevolt-solidflex-3000-review.html: .btn-primary miste !important
#     en werd overschreven door .article-body a. Reden om bij ELKE nieuwe
#     CTA-knop met een aangepaste class handmatig even te controleren of de
#     tekst leesbaar is (of gewoon een bestaande, al werkende knop-class
#     hergebruiken i.p.v. een nieuwe class verzinnen).

set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
TIMESTAMP=$(date +%Y-%m-%d_%H%M)
REPORT="/tmp/stekkerslim-qa-${TIMESTAMP}.txt"
PROBLEMS=0

echo "StekkerSlim.nl QA-audit — $(date '+%d %B %Y %H:%M')" | tee "$REPORT"
echo "==========================================" | tee -a "$REPORT"

# ── 1. Affiliate-links checken ──────────────────────────────────────────────
echo "" | tee -a "$REPORT"
echo "## 1. Affiliate-links" | tee -a "$REPORT"

grep -ohE 'href="https://(www\.awin1\.com|partner\.[a-z.]+|amzn\.to|www\.amazon\.nl|www\.marstek\.nl|[a-z0-9]+\.net)[^"]*"' *.html \
  | sed 's/^href="//;s/"$//' | sort -u > /tmp/qa_affiliate_links.txt
TOTAL_LINKS=$(wc -l < /tmp/qa_affiliate_links.txt)
echo "$TOTAL_LINKS unieke affiliate-links gevonden, checken (met retries)..." | tee -a "$REPORT"

FAILED_LINKS=""
while IFS= read -r url; do
  [ -z "$url" ] && continue
  ok=false
  for attempt in 1 2 3; do
    code=$(curl -sL --ssl-no-revoke --max-time 15 -A "$UA" -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    if [ "$code" = "200" ] || [ "$code" = "301" ] || [ "$code" = "302" ]; then
      ok=true
      break
    fi
    sleep 3
  done
  if [ "$ok" = false ]; then
    FAILED_LINKS="${FAILED_LINKS}  [$code na 3 pogingen] $url\n"
    PROBLEMS=$((PROBLEMS+1))
  fi
done < /tmp/qa_affiliate_links.txt

if [ -n "$FAILED_LINKS" ]; then
  echo "⚠️  Links die ALLE 3 pogingen faalden (echt nakijken, niet automatisch vals alarm):" | tee -a "$REPORT"
  echo -e "$FAILED_LINKS" | tee -a "$REPORT"
else
  echo "✅ Alle $TOTAL_LINKS affiliate-links bereikbaar." | tee -a "$REPORT"
fi

# ── 2. Interne links (relatief, bv. href="pagina.html") ────────────────────
echo "" | tee -a "$REPORT"
echo "## 2. Interne links (relatief)" | tee -a "$REPORT"
grep -ohE 'href="[a-zA-Z0-9_-]+\.html(#[a-zA-Z0-9_-]+)?"' *.html \
  | sed -E 's/href="//;s/"$//;s/#.*//' | sort -u > /tmp/qa_internal_relative.txt
MISSING_REL=""
while IFS= read -r f; do
  [ -f "$f" ] || MISSING_REL="${MISSING_REL}  ONTBREEKT: $f\n"
done < /tmp/qa_internal_relative.txt
if [ -n "$MISSING_REL" ]; then
  echo "⚠️  Interne links naar niet-bestaande bestanden:" | tee -a "$REPORT"
  echo -e "$MISSING_REL" | tee -a "$REPORT"
  PROBLEMS=$((PROBLEMS+1))
else
  echo "✅ Alle relatieve interne links kloppen ($(wc -l < /tmp/qa_internal_relative.txt) stuks)." | tee -a "$REPORT"
fi

# ── 3. Interne links (absoluut, bv. href="https://stekkerslim.nl/pagina.html") ──
echo "" | tee -a "$REPORT"
echo "## 3. Interne links (absoluut)" | tee -a "$REPORT"
grep -ohE 'href="https://stekkerslim\.nl/[a-zA-Z0-9_-]*\.html[^"]*"' *.html \
  | sed -E 's#href="https://stekkerslim\.nl/##;s/"$//;s/[?#].*//' | sort -u > /tmp/qa_internal_absolute.txt
MISSING_ABS=""
while IFS= read -r f; do
  [ -f "$f" ] || MISSING_ABS="${MISSING_ABS}  ONTBREEKT: $f\n"
done < /tmp/qa_internal_absolute.txt
if [ -n "$MISSING_ABS" ]; then
  echo "⚠️  Absolute interne links naar niet-bestaande bestanden:" | tee -a "$REPORT"
  echo -e "$MISSING_ABS" | tee -a "$REPORT"
  PROBLEMS=$((PROBLEMS+1))
else
  echo "✅ Alle absolute interne links kloppen ($(wc -l < /tmp/qa_internal_absolute.txt) stuks)." | tee -a "$REPORT"
fi

# ── 4. sitemap.xml ───────────────────────────────────────────────────────────
echo "" | tee -a "$REPORT"
echo "## 4. sitemap.xml" | tee -a "$REPORT"
if [ -f sitemap.xml ]; then
  grep -oE '<loc>https://stekkerslim\.nl/[^<]*</loc>' sitemap.xml \
    | sed -E 's#<loc>https://stekkerslim.nl/##;s#</loc>##' > /tmp/qa_sitemap.txt
  MISSING_SITEMAP=""
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    [ -f "$f" ] || MISSING_SITEMAP="${MISSING_SITEMAP}  SITEMAP WIJST NAAR ONTBREKEND BESTAND: $f\n"
  done < /tmp/qa_sitemap.txt
  if [ -n "$MISSING_SITEMAP" ]; then
    echo "⚠️  Sitemap-problemen:" | tee -a "$REPORT"
    echo -e "$MISSING_SITEMAP" | tee -a "$REPORT"
    PROBLEMS=$((PROBLEMS+1))
  else
    echo "✅ Sitemap klopt ($(wc -l < /tmp/qa_sitemap.txt) URLs)." | tee -a "$REPORT"
  fi

  # Check ook: bestaat er een .html bestand dat NIET in de sitemap staat? (mogelijk vergeten toe te voegen)
  ls *.html | sed 's/\.html$//' > /tmp/qa_all_html.txt
  sed 's/\.html$//' /tmp/qa_sitemap.txt > /tmp/qa_sitemap_noext.txt
  ORPHANS=$(comm -23 <(sort /tmp/qa_all_html.txt) <(sort /tmp/qa_sitemap_noext.txt))
  if [ -n "$ORPHANS" ]; then
    echo "ℹ️  HTML-bestanden die NIET in sitemap.xml staan (mogelijk bewust, even checken):" | tee -a "$REPORT"
    echo "$ORPHANS" | sed 's/^/  /' | tee -a "$REPORT"
  fi
else
  echo "⚠️  Geen sitemap.xml gevonden." | tee -a "$REPORT"
  PROBLEMS=$((PROBLEMS+1))
fi

# ── 5. Lokale afbeeldingen ───────────────────────────────────────────────────
echo "" | tee -a "$REPORT"
echo "## 5. Lokale afbeeldingen" | tee -a "$REPORT"
grep -ohE '(src|href)="/?[a-zA-Z0-9_/-]+\.(jpg|jpeg|png|webp|gif|svg)"' *.html \
  | sed -E 's/^(src|href)="//;s/"$//;s#^/##' | sort -u > /tmp/qa_images.txt
MISSING_IMG=""
while IFS= read -r f; do
  [ -f "$f" ] || MISSING_IMG="${MISSING_IMG}  ONTBREEKT: $f\n"
done < /tmp/qa_images.txt
if [ -n "$MISSING_IMG" ]; then
  echo "⚠️  Afbeeldingen die niet bestaan:" | tee -a "$REPORT"
  echo -e "$MISSING_IMG" | tee -a "$REPORT"
  PROBLEMS=$((PROBLEMS+1))
else
  echo "✅ Alle $(wc -l < /tmp/qa_images.txt) lokale afbeeldingen bestaan." | tee -a "$REPORT"
fi

# ── Samenvatting + handmatige checklist ──────────────────────────────────────
echo "" | tee -a "$REPORT"
echo "==========================================" | tee -a "$REPORT"
if [ "$PROBLEMS" -eq 0 ]; then
  echo "✅ Geen automatisch detecteerbare problemen." | tee -a "$REPORT"
else
  echo "⚠️  $PROBLEMS categorie(ën) met problemen — zie hierboven." | tee -a "$REPORT"
fi
echo "" | tee -a "$REPORT"
echo "Nog even met de hand doen (kan niet betrouwbaar geautomatiseerd):" | tee -a "$REPORT"
echo "  - Prijzen van de belangrijkste/recent-gewijzigde producten spotchecken" | tee -a "$REPORT"
echo "    tegen de echte winkelpagina (browser, geen curl — dynamische content" | tee -a "$REPORT"
echo "    en bot-blocking maken scrapen onbetrouwbaar)." | tee -a "$REPORT"
echo "  - Bij elke NIEUWE knop met een eigen CSS-class: even in de browser" | tee -a "$REPORT"
echo "    checken of de tekst leesbaar is (zie de .btn-primary/!important-les" | tee -a "$REPORT"
echo "    van augustus 2026 — hergebruik bij voorkeur een bestaande, al" | tee -a "$REPORT"
echo "    werkende knop-class in plaats van een nieuwe te verzinnen)." | tee -a "$REPORT"
echo "" | tee -a "$REPORT"
echo "Volledig rapport opgeslagen: $REPORT" | tee -a "$REPORT"

exit $([ "$PROBLEMS" -eq 0 ] && echo 0 || echo 1)
