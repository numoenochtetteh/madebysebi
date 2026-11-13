"""Reproduce the currency-only Inter asset; this is optional build tooling.

python -m pip install fonttools==4.61.1 brotli==1.2.1
python scripts/subset-currency.py
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parent.parent
source = root / "docs/font-sources/inter-latin-ext-4.001.woff2"
font = TTFont(source)
font.recalcTimestamp = False
original_metrics = font["hmtx"].metrics[font.getBestCmap()[0x20B5]]
options = subset.Options()
options.flavor = "woff2"
options.recalc_timestamp = False
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes=[0x20B5])
subsetter.subset(font)
names = {1: "MadeBySebi Currency", 4: "MadeBySebi Currency",
         6: "MadeBySebiCurrency-Regular", 16: "MadeBySebi Currency", 17: "Regular"}
for record in font["name"].names:
    if record.nameID in names:
        record.string = names[record.nameID].encode(record.getEncoding())
assert set(font.getBestCmap()) == {0x20B5}
assert font["hmtx"].metrics[font.getBestCmap()[0x20B5]] == original_metrics
destination = root / "public/fonts/madebysebi-currency.woff2"
font.save(destination)
print(f"Currency glyph: {destination.stat().st_size} bytes; unchanged advance metrics")
