# Tapngage.com website

A static site with no build step. Upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, S3/CloudFront, cPanel) and point tapngage.com at it.

```
index.html            One-page site: Hero, About, Vision, College2Company, References, Contact
css/styles.css        All styling. Brand colors are in :root at the top
js/main.js            Mobile menu, scroll reveal, contact form
images/               Logo, favicon, illustrations, icons, og-image.png (1200x630 social preview)
```

## Content to update before launch
Search `index.html` for `EDIT HERE` and `[`:

1. **Company overview** (`#about`): two paragraphs plus the four highlight stats.
2. **Vision and mission** (`#vision`): the two statements and four core values.
3. **Hero tagline**: the lead paragraph under the main headline.
4. **Contact** (`#contact`): address, phone, and email (hello@tapngage.com is assumed).
5. **Footer legal links**: privacy policy and terms pages.

When a placeholder is filled in, delete its `<span class="placeholder-tag">…</span>` and remove the
`placeholder-card` class so the dashed yellow outline goes away.

## Contact form
By default the form opens the visitor's email app addressed to hello@tapngage.com. To collect
submissions on a server, change the form's `action` to your endpoint (for example Formspree or
Netlify Forms) and remove the mailto block at the bottom of `js/main.js`.

## College2Company references used
- Website: https://college2company.site
- App Store: https://apps.apple.com/us/app/review-it/id1396962197
- Google Play: https://play.google.com/store/apps/details?id=com.reviewit.site
- LinkedIn: https://www.linkedin.com/company/7947982
- Facebook: https://www.facebook.com/LikeCollege2company
- Bluesky: https://bsky.app/profile/college2company.bsky.social
