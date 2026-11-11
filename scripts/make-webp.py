"""Lighter WebP copies of images that the home page shows small or as background.
Run after changing photos:  python3 scripts/make-webp.py"""
from PIL import Image
from pathlib import Path
import re

pub = Path(__file__).resolve().parent.parent / 'public'

def save(src, dst, width, q=78):
    im = Image.open(pub / src)
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    if im.mode not in ('RGB', 'RGBA'):
        im = im.convert('RGB')
    (pub / dst).parent.mkdir(parents=True, exist_ok=True)
    im.save(pub / dst, 'WEBP', quality=q, method=6)
    print(dst, (pub / dst).stat().st_size // 1024, 'KB')

# Program photos: small copies for the home list (shown at ~260px)
progs = Path(__file__).resolve().parent.parent / 'src/data/programs.ts'
for img in sorted(set(re.findall(r"img: '([^']+)'", progs.read_text()))):
    save(img, 'img/thumbs/' + Path(img).stem + '.webp', 560)

# Hero background and the club photo on the home page
save('img/hero.jpg', 'img/hero.webp', 1920, 72)
save('img/hero.jpg', 'img/hero-960.webp', 960, 72)
save('img/club/turnir-05-yunory-z-medaliamy.jpg', 'img/club/turnir-05-yunory-z-medaliamy.webp', 1200)
# Logo printed on the heavy bag (canvas texture, keeps transparency)
save('img/logo-bag.png', 'img/logo-bag.webp', 575, 85)
