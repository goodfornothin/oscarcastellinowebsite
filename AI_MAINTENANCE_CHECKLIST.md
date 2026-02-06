# 🎭 Oscar Castellino Website - AI Maintenance Checklist

> **Live URL:** https://oscarcastellino.com  
> **Repository:** https://github.com/[username]/oscarcastellinowebsite  
> **Last Updated:** February 2026

---

## 📁 Project Structure

```
oscarcastellinowebsite/
├── index.html              # Main homepage
├── biography.html          # Short biography page
├── full_biography.html     # Full detailed biography
├── configuration.html      # Site configuration page
├── event.html              # Event template page
├── style.css               # Main stylesheet
├── data.json               # Dynamic content data (NOT USED - static site)
├── CNAME                   # Custom domain config (oscarcastellino.com)
├── .gitignore              # Git ignore rules
├── oscarcastellino-website.code-workspace  # VS Code workspace file
├── biographies/            # Biography text files
│   ├── long.txt            # Long biography text
│   └── README.md           # Biography folder info
├── pictures/               # Image assets
│   └── readme.txt          # Pictures folder info
├── events/                 # Individual event pages
│   ├── concerto-de-natal-2026.html
│   ├── goan-interactions-2026.html
│   └── lisbon-fundacao-oriente-2026.html
├── rogue-site -> SYMLINK   # ⚠️ SYMLINK to Rogue Bachata (EXCLUDED from git)
└── rogue-private -> SYMLINK # ⚠️ SYMLINK to private files (EXCLUDED from git)
```

---

## ⚠️ CRITICAL: Symlinks & Excluded Folders

**DO NOT** attempt to edit files in these folders from this workspace:
- `rogue-site/` - This is a SYMLINK to `/Users/admin/github/test rogue plan/`
- `rogue-private/` - This is a SYMLINK to private content

These folders are **excluded in .gitignore** and will NOT be pushed to GitHub.

**To work on Rogue Bachata:** Open the separate `rogue-bachata.code-workspace` file.

---

## 🎨 Design System

### Colors (CSS Variables NOT used - inline styles)
- Primary Background: Dark/Black themes
- Accent: Professional, elegant tones
- Text: White/Light gray

### Typography
- Main Font: System fonts / Georgia (serif for elegance)
- Headings: Bold, uppercase treatments

---

## 📄 Key Files Explained

### `index.html`
- **Purpose:** Main landing page for Oscar Castellino
- **Contains:** Hero section, biography summary, upcoming events, contact info
- **Editing:** Direct HTML editing (no JavaScript templating)

### `biography.html` & `full_biography.html`
- **Purpose:** Detailed biography pages
- **Source:** Content comes from `biographies/long.txt`
- **Backup:** `biography.html.backup` available

### `style.css`
- **Purpose:** Global styles for all pages
- **Backup:** `style.css.backup` available
- **Note:** Some pages have inline `<style>` blocks

### `events/` folder
- **Purpose:** Individual event landing pages
- **Pattern:** `[event-name]-[year].html`
- **Creating new events:** Copy existing event file and modify content

---

## 🔧 Common Tasks

### Adding a New Event
1. Create new file in `events/` folder: `new-event-name-2026.html`
2. Copy structure from existing event file
3. Update all content (title, dates, description, images)
4. Link from `index.html` if needed

### Updating Biography
1. Edit `biographies/long.txt` for source content
2. Update `biography.html` and/or `full_biography.html`
3. Keep backup files updated if making major changes

### Adding Images
1. Add image files to `pictures/` folder
2. Reference in HTML: `<img src="pictures/filename.jpg">`
3. Use descriptive filenames

---

## 🚀 Deployment

This site deploys automatically via **GitHub Pages**.

### To Deploy Changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Changes appear live within 1-5 minutes.

---

## 📋 Pre-Deployment Checklist

- [ ] All links working (internal and external)
- [ ] Images loading properly
- [ ] Mobile responsive design checked
- [ ] No console errors in browser
- [ ] Biography dates and information accurate
- [ ] Event dates in the future are correct
- [ ] Contact information up to date

---

## 🔗 Related Projects

| Project | Workspace File | Repository |
|---------|---------------|------------|
| **Rogue Bachata** | `rogue-bachata.code-workspace` | test-rogue-plan |
| This site | `oscarcastellino-website.code-workspace` | oscarcastellinowebsite |

---

## 📞 Support Notes

- **Domain:** oscarcastellino.com (configured via CNAME file)
- **Hosting:** GitHub Pages (free)
- **SSL:** Automatic via GitHub Pages

---

*This checklist is for AI assistants and developers maintaining the Oscar Castellino website. Keep it updated with any structural changes.*
