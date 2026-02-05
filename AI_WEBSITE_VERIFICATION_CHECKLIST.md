# 🎭 OSCAR CASTELLINO WEBSITE - AI VERIFICATION CHECKLIST
## ⚠️ READ THIS FIRST BEFORE MAKING ANY CHANGES ⚠️

**Last Updated:** 2026-02-04
**Site URL:** https://oscarcastellino.com
**Repository:** github.com/goodfornothin/oscarcastellinowebsite
**Hosting:** GitHub Pages

---

## 📋 PRE-CHANGE VERIFICATION CHECKLIST

Before making ANY changes to this website, verify the following:

### 1. File Structure Understanding
```
oscarcastellinowebsite/
├── index.html              # Main homepage (CRITICAL)
├── style.css               # Main stylesheet (CRITICAL)
├── data.json               # Event and content data (CRITICAL)
├── biography.html          # Full biography page
├── CNAME                   # Domain configuration (DO NOT MODIFY)
├── events/                 # Individual event pages
│   ├── lisbon-fundacao-oriente-2026.html
│   ├── goan-interactions-2026.html
│   └── concerto-de-natal-2026.html
├── pictures/               # All images (31 files)
├── biographies/            # Text files for long biography
└── *.backup                # Backup files of previous versions
```

### 2. Design System Constants
**DO NOT change these without explicit permission:**
- **Primary Gold:** `#d4a853` (accent color throughout)
- **Dark Background:** `#0d0d0d` (primary background)
- **Card Background:** `#1a1a1a` (secondary background)
- **Light Text:** `#f5f0e8` (headings)
- **Muted Text:** `#a0998f` (body text)
- **Heading Font:** Playfair Display
- **Body Font:** Cormorant Garamond / Montserrat

### 3. Contact Information (VERIFY CURRENT)
- **Email:** voice@oscarcastellino.com
- **YouTube:** @operawalaofindia1166
- All booking links should go to email or specific ticket pages

### 🌐 Multi-Site Management

This project environment may be used to manage two separate websites:
- **Oscar Castellino:** `oscarcastellino.com`
- **Rogue Bachata:** `roguebachata.com`

**CRITICAL GUIDELINES:**
- **Separate Projects:** Treat each site as a distinct project. Do not cross-link files or share sensitive information between them.
- **Check `.gitignore`:** The Rogue Bachata website may contain private files and folders not tracked by Git (e.g., `.private/`, `.secrets/`). **NEVER** commit these files. Always verify the `.gitignore` settings for that project.
- **Global Search:** When editing content (like an event or venue), search the entire codebase for that specific project to ensure all instances are updated consistently.
- **Asset Integrity:** Do not use assets (images, styles) from one project in the other unless explicitly instructed.

---

## 🏆 WORLD-CLASS WEBSITE STANDARDS

This section defines the core principles for a high-quality, professional website. All changes should strive to meet these standards.

### ♿ Accessibility (A11y)
A world-class website is usable by everyone, regardless of ability.
- [ ] **Alt Text:** All `<img>` tags must have descriptive `alt` attributes. For decorative images, use `alt=""`.
- [ ] **Semantic HTML:** Use proper HTML5 tags (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`) to define page structure.
- [ ] **Keyboard Navigation:** All interactive elements (links, buttons, carousels) must be fully usable with the Tab and Enter keys.
- [ ] **Color Contrast:** Text must have a contrast ratio of at least 4.5:1 against its background (WCAG AA). The current palette is good, but new additions must be checked.
- [ ] **Logical Headings:** Headings must follow a logical order (`<h1>` -> `<h2>` -> `<h3>`). Do not skip levels.
- [ ] **ARIA Roles:** Use ARIA (`Accessible Rich Internet Applications`) roles where semantic HTML is not enough (e.g., for custom widgets).

### 🚀 Performance Optimization
A fast website is critical for user experience and SEO.
- [ ] **Image Optimization:** Images should be compressed and served in modern formats like WebP where possible.
- [ ] **Minification:** CSS and JavaScript files should be minified to reduce their size.
- [ ] **Browser Caching:** Ensure appropriate cache headers are set (GitHub Pages handles much of this automatically).
- [ ] **Reduce Requests:** Combine CSS or JS files if they become numerous. Avoid excessive external scripts.
- [ ] **PageSpeed Score:** Aim for a Google PageSpeed Insights score of 90+ for both mobile and desktop.

### 🔍 Advanced SEO & Content
Go beyond the basics to ensure maximum visibility.
- [ ] **`sitemap.xml`:** Ensure a sitemap exists and is up-to-date to help search engines crawl the site.
- [ ] **`robots.txt`:** Use a `robots.txt` file to guide crawlers on what to index.
- [ ] **Structured Data:** Use Schema.org structured data (JSON-LD) for not just events, but also for "Person" (for Oscar) and "MusicGroup" or "Organization".
- [ ] **Link Attributes:** All external links (`target="_blank"`) must have `rel="noopener noreferrer"` for security.
- [ ] **Content Quality:** All text should be free of typos and grammatical errors. It should be clear, concise, and engaging.

### 🔒 Security & Best Practices
- [ ] **HTTPS:** The entire site must be served over HTTPS. No mixed content (loading HTTP assets on an HTTPS page).
- [ ] **HTML Validation:** Code should be valid according to the W3C validator to avoid unexpected browser behavior.
- [ ] **No Console Errors:** The browser developer console must be free of errors on all pages.

---

## 🔄 EVENT MANAGEMENT WORKFLOW
...(Content from original file remains here)...
---
## 📸 IMAGE GUIDELINES
...(Content from original file remains here)...
---
## 🔍 SEO REQUIREMENTS (Basic)
...(Content from original file remains here)...
---
## ✅ POST-CHANGE VERIFICATION CHECKLIST
...(Content from original file remains here)...
---
## 🚨 COMMON ISSUES & FIXES
...(Content from original file remains here)...
---
## 📱 MOBILE-FIRST TESTING
...(Content from original file remains here)...
---
## 🔒 FILES THAT SHOULD NOT BE MODIFIED
...(Content from original file remains here)...
---
## 📞 QUICK REFERENCE
...(Content from original file remains here)...
---
## 🎯 CONTENT PRIORITIES
...(Content from original file remains here)...
---

## 🤖 AI ASSISTANT NOTES

When an AI agent works on this site:
1.  **Always read this checklist first.**
2.  **Commit each individual change to the repository with a clear commit message.**
3.  **Review the '🏆 World-Class Website Standards' section for every task.**
4.  **Review the '🌐 Multi-Site Management' guidelines when applicable.**
5.  Backup files before major changes.
6.  Test locally if possible before pushing.
7.  Verify JSON syntax with a validator.
8.  Check all links after changes.
9.  Maintain the elegant, dark opera aesthetic.
10. Keep the gold (#d4a853) as the accent color.
11. Preserve responsive design.
12. Don't remove any working features.
13. Update this checklist if you add new features.

---

*This checklist was created to ensure consistency and quality across all updates to the Oscar Castellino website.*
