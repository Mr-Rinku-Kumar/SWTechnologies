# SW Technologies - Company Website

A professional, fully responsive company website for SW Technologies, a web development company. Built with pure HTML, CSS, and JavaScript — no frameworks, no templates, no WordPress.

## 📋 Project Overview

This website showcases SW Technologies' services, team, and expertise. It includes four complete pages with a modern design, smooth animations, and mobile-first responsiveness.

### Pages Included

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, services overview, why choose us, client testimonials |
| About | `about.html` | Company story, mission & vision, team members, stats |
| Services | `services.html` | Detailed service cards with CTA buttons |
| Contact | `contact.html` | Contact form with validation, company details, Google Maps |

## 🎨 Features

- ✅ **Sticky Navbar** with hamburger menu for mobile
- ✅ **Fully Responsive** — works on 320px (mobile), 768px (tablet), 1280px+ (desktop)
- ✅ **Modern UI** — gradients, shadows, hover effects, card animations
- ✅ **Back to Top Button** — appears after scrolling
- ✅ **Form Validation** — JavaScript validation for all contact form fields
- ✅ **Google Maps Embed** — location iframe on contact page
- ✅ **Consistent Design** — shared CSS across all pages
- ✅ **Semantic HTML** & clean code structure

## 🛠️ Technologies Used

- **HTML5** — semantic markup
- **CSS3** — Flexbox, Grid, custom properties, animations
- **JavaScript** — mobile menu toggle, form validation, back-to-top
- **Google Fonts** — Inter font family
- **Font Awesome 6** — icons (CDN)

## 📁 File Structure
project/
├── index.html # Homepage
├── about.html # About Us page
├── services.html # Services page
├── contact.html # Contact page
├── styles.css # Shared stylesheet
└── README.md # Documentation

text

## 🚀 How to Deploy on GitHub Pages

### Option 1: Direct Upload (Easiest)

1. Create a new GitHub repository (e.g., `sw-tech-website`)
2. Upload all 5 files (`index.html`, `about.html`, `services.html`, `contact.html`, `styles.css`)
3. Go to **Settings → Pages**
4. Under "Branch", select `main` and `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://your-username.github.io/sw-tech-website/`

### Option 2: Using Git Commands

```bash
# Clone or initialize repo
git init
git add .
git commit -m "Initial commit - SW Technologies website"

# Add remote and push
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
Then enable GitHub Pages as described above.

📱 Responsive Breakpoints
Device	Width	Status
Mobile	320px - 480px	✅ Optimized
Tablet	768px - 1024px	✅ Optimized
Desktop	1280px+	✅ Optimized
🎯 Design Highlights
Color Scheme: Deep navy (#0a1927) + Indigo accent (#4f46e5)

Typography: Inter (sans-serif) from Google Fonts

Shadows: Subtle elevation with hover depth effects

Animations: Fade-in on hero, hover lift on cards

Spacing: Consistent padding/margins (8rem sections on desktop, 4rem on mobile)

🔧 Customization Guide
Changing Colors
Edit CSS variables in styles.css:

css
:root {
    --primary: #0a1927;      /* Dark background */
    --accent: #4f46e5;       /* Primary button/icon color */
    --accent-light: #6366f1; /* Hover state */
}
Updating Team Members
Edit the team section in about.html:

html
<div class="team-card">
    <div class="team-img"><i class="fas fa-user"></i></div>
    <h3>Name</h3>
    <p>Role</p>
    <p>Description</p>
</div>
Changing Contact Info
Update in all pages (footer and contact page):

Address

Phone number

Email

Google Maps iframe URL

Modifying Services
Edit service cards in index.html and services.html:

html
<div class="service-card">
    <div class="service-icon"><i class="fas fa-icon-name"></i></div>
    <h3>Service Title</h3>
    <p>Service description text...</p>
    <a href="contact.html" class="btn btn-outline btn-small">Learn More →</a>
</div>
✅ Validation & Testing
HTML: All pages pass W3C validation

CSS: No errors, uses standard properties

JavaScript: Console error-free

Cross-browser: Chrome, Firefox, Safari, Edge

Mobile: Tested on iOS Safari, Android Chrome

Built with ❤️ for the web. No frameworks, no shortcuts — just clean code.