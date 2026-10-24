# Aadhya Farm Stays website

Static site built with **Astro 5 + Tailwind 4**. No database, no PHP, no admin login,
which is the point: the old WordPress site was compromised and used to publish casino spam.
There is nothing here for an attacker to log into.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## What is live

| Page | Path |
| --- | --- |
| Home | `/` |
| All farmhouses | `/farmhouses/` |
| Pine Creek Farm Stay | `/farmhouses/pine-creek-thangadpally/` |
| Sahaja Lake Front Gardens | `/farmhouses/sahaja-lake-front-gardens-kothlapur/` |
| Contact & enquiry | `/contact/` |
| Terms | `/terms/` |
| 404 | `/404.html` |

Build output: ~9 MB total, 12-32 KB of HTML per page, **zero external JavaScript**
(the lightbox and the enquiry form are inlined), one 37 KB stylesheet.

## Adding a farmhouse

Everything is driven by one file: [`src/data/properties.ts`](src/data/properties.ts).

1. Put photos in `public/img/<slug>/` named `01-800.webp`, `01-1600.webp`, `02-800.webp`, …
   The helper below does the resizing. **The folder name must equal the `slug`.**
2. Add an entry to the `properties` array.
3. `npm run build`.

The new property automatically appears on the homepage, on `/farmhouses/`, in the footer,
in the sitemap, in the contact form dropdown, and gets its own page with LodgingBusiness
schema.

Resizing photos (requires Pillow, via `pip install pillow`):

```python
from PIL import Image
import glob, os
SLUG = 'my-new-farmhouse'
os.makedirs(f'public/img/{SLUG}', exist_ok=True)
for n, f in enumerate(sorted(glob.glob('source-photos/*.jpg')), 1):
    im = Image.open(f).convert('RGB')
    for w in (1600, 800):
        c = im.copy(); c.thumbnail((w, w * 2), Image.LANCZOS)
        c.save(f'public/img/{SLUG}/{n:02d}-{w}.webp', 'WEBP', quality=80, method=5)
```

Photo `01` is used as the card image, the page hero, and the social preview, so put the
best exterior shot first.

## Site-wide settings

[`src/data/site.ts`](src/data/site.ts) holds the phone number, email, service areas and
social links. The `wa()` helper builds WhatsApp deep links with the message pre-filled.
That is how every CTA on the site works. There is no payment gateway and no booking engine
by design; enquiries go to WhatsApp.

## Deploying

Host it anywhere static. Netlify or Cloudflare Pages, build command `npm run build`,
publish directory `dist`.

[`public/_redirects`](public/_redirects) is a Netlify redirect map that handles the
migration off WordPress:

- **301**: the four genuine old URLs, so their Google ranking carries across
- **410**: all 41 injected casino spam URLs, the junk categories and tags, the leftover
  theme demo pages (`home-one`, `sample-page`, `apartment_list/*`, the fake testimonials),
  and the old WordPress surface (`/wp-admin/`, `/wp-json/`, `/xmlrpc.php`)

410 ("Gone") flushes a URL out of Google's index considerably faster than a 404. On
Cloudflare Pages the same rules go in `public/_redirects` too, but 410 is not supported
there, so use Cloudflare Rules or keep Netlify for this reason.

After DNS cutover: resubmit the sitemap in Google Search Console and request reindexing.

## Open items before launch

1. **Confirm Property One.** The map pin Kiran sent resolves to *Sahaja Lake Front Gardens,
   Kothlapur*. He sent it without a caption, so confirm it belongs to the ₹17k/₹20k
   property and not a third one. `locationConfirmed: false` flags this in the data file.
2. **Confirm the photo split.** The 30 WhatsApp photos arrived unlabelled. They were sorted
   into the two properties by architecture: the blue-trimmed white villa vs. the
   landscaped estate. Moving a photo between properties is a file move plus a `photoCount`
   change.
3. **Sign off the terms page.** Only check-in/out and whole-property booking come from
   Kiran directly. Everything below those two in `src/pages/terms.astro` is a placeholder
   marked `needsConfirmation`. Get each one approved or delete it. Do not publish as-is.
4. **No reviews section yet.** Deliberate. The old site had three fabricated testimonials
   ("Ana Doe", "Olivar Lucy"). Collect real Google reviews first, then add the section.
5. **Remaining properties.** Aadhya advertises far more than two. Each needs photos,
   capacity, price and a location before it can go on the site.
