# Cedi glyph delivery

Phase 5's actual Pricing Lighthouse network logs showed Inter Latin (48,432 bytes), Geist Mono Latin (23,108 bytes), and Inter Latin Extended (85,272 bytes). The extra Inter font was requested for U+20B5, the Ghana cedi symbol in the approved prices.

`inter-latin-ext-4.001.woff2` preserves that exact source font from the Phase 4 preview's `/_next/static/media/8e9860b6e62d6359-s.woff2` asset. Its embedded version is `4.001;git-66647c0bb`, copyright 2016 The Inter Project Authors (https://github.com/rsms/inter).

`scripts/subset-currency.py` retains only U+20B5, the original glyph metrics and weight axis 100–900. The derivative family is renamed MadeBySebi Currency. The unchanged SIL Open Font License is distributed in `public/fonts/OFL.txt`; upstream source: https://github.com/rsms/inter/blob/master/LICENSE.txt.

The application continues to use Inter and Geist Mono. A `next/font/local` face limited to `unicode-range: U+20B5` precedes Inter in the body font stack. It has no preload and is requested only when the symbol is used. The original font source is documentation, never an application import. No Python package is needed for normal installation, development or deployment.

Optional reproduction from the repository root:

```bash
python -m pip install fonttools==4.61.1 brotli==1.2.1
python scripts/subset-currency.py
```
