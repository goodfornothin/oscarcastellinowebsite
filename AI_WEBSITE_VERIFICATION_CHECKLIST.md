# 🎭 OSCAR CASTELLINO WEBSITE - AI VERIFICATION CHECKLIST
## ⚠️ READ THIS FIRST BEFORE MAKING ANY CHANGES ⚠️

**Last Updated:** 2026-01-XX  
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

---

## 🔄 EVENT MANAGEMENT WORKFLOW

### Adding a New Event (Quick Mobile Method)
1. Open `data.json` on mobile/computer
2. Find `upcomingEvents` array
3. Copy the `_DUMMY_EVENT_TEMPLATE` object
4. Fill in required fields: `event`, `date`, `venue`
5. Optional: Add `eventId`, `information`, `tickets`, etc.
6. Save and push to GitHub

### Adding a New Event (Full Page)
1. Create new HTML file in `events/` folder
2. Copy structure from existing event page (e.g., `lisbon-fundacao-oriente-2026.html`)
3. Update all content, meta tags, structured data
4. Add `eventPage` field in data.json pointing to new file
5. Test all links work

### Required Event Fields
```json
{
  "event": "Event Title",           // REQUIRED
  "date": "Day, Month DD, YYYY",    // REQUIRED - parseable format
  "venue": "Venue Name"             // REQUIRED
}
```

### Optional Event Fields
```json
{
  "eventId": "unique-slug",         // For URL generation
  "eventPage": "events/page.html",  // Link to dedicated page
  "time": "7:00 PM",
  "address": "Full address",
  "information": "Brief description",
  "description": "Detailed description",
  "photo": "image-filename.jpg",
  "artists": ["Artist 1", "Artist 2"],
  "program": ["Piece | Composer"],
  "tickets": { "price": "£20", "link": "https://..." },
  "bookingLink": "https://...",     // Alternative to tickets
  "videos": ["https://youtube-embed-url"],
  "contactInfo": "Contact details"
}
```

---

## 📸 IMAGE GUIDELINES

### Available Images (pictures/ folder)
All images should be referenced from the `pictures/` folder:
- Performance photos with descriptive names
- Portraits and promotional shots
- Event posters
- Use URL encoding for spaces: `Oscar%20Grand%20arm.jpg`

### Adding New Images
1. Add to `pictures/` folder
2. Use descriptive naming: `Oscar-event-venue-year.jpg`
3. Optimize for web (max 2MB recommended)
4. Update gallery array in `index.html` if featured

---

## 🔍 SEO REQUIREMENTS

### Every Page Must Have:
- [ ] Unique `<title>` tag with "Oscar Castellino" + page-specific content
- [ ] `<meta name="description">` (150-160 characters)
- [ ] `<meta name="keywords">` relevant to page content
- [ ] Open Graph tags for social sharing
- [ ] Canonical URL

### Event Pages Should Include:
- [ ] Event structured data (Schema.org JSON-LD)
- [ ] Event-specific Open Graph image
- [ ] Clear ticket/booking links

---

## ✅ POST-CHANGE VERIFICATION CHECKLIST

After ANY changes, verify:

### Visual Checks
- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] Gallery displays and lightbox works
- [ ] Events section shows current events
- [ ] Video carousel works
- [ ] Contact section links work
- [ ] Footer links work
- [ ] Mobile responsive (test at 375px, 768px widths)

### Event-Specific Checks
- [ ] Event dates parse correctly (check console for errors)
- [ ] Past events move to "Past Events" section
- [ ] Ticket links work and open in new tab
- [ ] Event pages load correctly
- [ ] Back links work

### Technical Checks
- [ ] No JavaScript console errors
- [ ] data.json parses correctly (test with `JSON.parse()`)
- [ ] All images load (check Network tab)
- [ ] CSS loads correctly
- [ ] No broken links (use browser dev tools)

---

## 🚨 COMMON ISSUES & FIXES

### Events Not Showing
1. Check date format in data.json (must be parseable)
2. Verify JSON syntax (missing commas, quotes)
3. Check browser console for errors

### Images Not Loading
1. Check filename matches exactly (case-sensitive)
2. URL encode spaces: `%20`
3. Verify file exists in pictures/ folder

### Styling Broken
1. Check style.css for syntax errors
2. Verify CSS variable definitions exist
3. Check for unclosed brackets/quotes

### Page Not Found
1. Verify file exists
2. Check filename case sensitivity
3. Ensure GitHub Pages has deployed (check Actions tab)

---

## 📱 MOBILE-FIRST TESTING

Always test on:
1. iPhone Safari (most common mobile)
2. Android Chrome
3. Desktop Chrome
4. Desktop Safari

Key mobile breakpoints in CSS:
- 900px (tablet)
- 768px (small tablet)
- 500px (mobile)

---

## 🔒 FILES THAT SHOULD NOT BE MODIFIED

| File | Reason |
|------|--------|
| `CNAME` | Domain configuration |
| `*.backup` | Historical backups |
| `.git/` | Git configuration |

---

## 📞 QUICK REFERENCE

**Oscar's Email:** voice@oscarcastellino.com  
**Site Domain:** oscarcastellino.com  
**GitHub Repo:** goodfornothin/oscarcastellinowebsite  
**Primary Color:** #d4a853 (Gold)  

---

## 🎯 CONTENT PRIORITIES

When updating the site, prioritize:
1. **Upcoming events** - Most time-sensitive
2. **Contact/booking info** - Business critical
3. **Featured videos** - Showcase work
4. **Gallery images** - Visual appeal
5. **Biography** - Rarely changes

---

## 🤖 AI ASSISTANT NOTES

When an AI agent works on this site:
1. **Always read this checklist first**
2. **Backup files before major changes**
3. **Test locally if possible before pushing**
4. **Verify JSON syntax with a validator**
5. **Check all links after changes**
6. **Maintain the elegant, dark opera aesthetic**
7. **Keep the gold (#d4a853) as the accent color**
8. **Preserve responsive design**
9. **Don't remove any working features**
10. **Update this checklist if you add new features**

---

*This checklist was created to ensure consistency and quality across all updates to the Oscar Castellino website.*
