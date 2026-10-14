#!/bin/sh
# Spiegelt Kennisbank/*.md naar de lokale Google Drive-mount, vóór een push.
#
# Waarom dit bestaat: de GitHub Action (sync-drive.yml) draait met een
# service-account, en dat heeft geen eigen opslagquotum. Een bestaand bestand
# bijwerken lukt, een NIEUW bestand aanmaken geeft 403 storageQuotaExceeded.
# Elk nieuw .md-bestand liet de sync dus falen tot het een keer met de hand in
# Drive stond. Door hier vóór de push te spiegelen bestaat het bestand al
# wanneer de Action loopt, en is er geen quotumprobleem meer.
#
# CRLF wordt naar LF genormaliseerd, precies zoals git het opslaat en zoals de
# Action het later uploadt. Anders zou elke run een nieuwe Drive-revisie maken
# met alleen andere regeleindes.
#
# Bestaat de Drive-map niet (andere machine, Drive niet gemount), dan stopt dit
# script zonder fout: een push mag hier nooit op blijven hangen.

DRIVE_DIR="/d/Mijn Drive/StekkerSlim Kennisbank"
REPO_DIR="$(git rev-parse --show-toplevel)/Kennisbank"

if [ ! -d "$DRIVE_DIR" ]; then
  echo "kennisbank-naar-drive: '$DRIVE_DIR' niet gevonden — overgeslagen."
  exit 0
fi

if [ ! -d "$REPO_DIR" ]; then
  exit 0
fi

nieuw=0
bijgewerkt=0

for src in "$REPO_DIR"/*.md; do
  [ -e "$src" ] || continue
  naam=$(basename "$src")
  dst="$DRIVE_DIR/$naam"

  # Genormaliseerde versie van het repo-bestand (CRLF -> LF).
  tmp=$(mktemp)
  sed 's/\r$//' "$src" > "$tmp"

  if [ ! -f "$dst" ]; then
    cp "$tmp" "$dst"
    echo "  nieuw in Drive: $naam"
    nieuw=$((nieuw + 1))
  elif ! cmp -s "$tmp" "$dst"; then
    cp "$tmp" "$dst"
    echo "  bijgewerkt: $naam"
    bijgewerkt=$((bijgewerkt + 1))
  fi

  rm -f "$tmp"
done

if [ "$nieuw" -eq 0 ] && [ "$bijgewerkt" -eq 0 ]; then
  echo "kennisbank-naar-drive: Drive was al bij."
else
  echo "kennisbank-naar-drive: $nieuw nieuw, $bijgewerkt bijgewerkt."
fi

exit 0
