# A.A.Q Solution & Outsourcing — Website

## 📁 Folder Structure

```
AAQ-Solution/
│
├── index.html              ← Main HTML file (sab pages)
│
├── css/
│   ├── reset.css           ← Base reset + CSS Variables (colors, fonts)
│   ├── navbar.css          ← Sidebar navigation + hamburger menu
│   ├── hero.css            ← Hero section + About section
│   ├── services.css        ← Services grid cards
│   ├── popup.css           ← Popup modals + form styles
│   └── responsive.css      ← All @media queries (mobile/tablet/desktop)
│
├── js/
│   └── main.js             ← Popup open/close, hamburger, active nav, forms
│
└── assets/
    ├── logo.png            ← Company logo
    └── romve.png           ← About section image
```

---

## ✅ Features

- **Fully Responsive** — Mobile, Tablet, Desktop
- **Sidebar Navigation** — Fixed sidebar on desktop, hamburger on mobile
- **Smooth Scroll** — Anchor links scroll smoothly
- **Active Nav Highlight** — Auto-highlights current section
- **Popups** — Book Event, Feedback, Complaint — with animation
- **Floating Labels** — Professional input labels
- **Escape Key** — Closes any open popup
- **Hover Animations** — Cards, buttons, nav links
- **CSS Variables** — Easy to change colors/fonts from reset.css

---

## 🎨 Colors (change in css/reset.css)

| Variable        | Value     | Use               |
|-----------------|-----------|-------------------|
| `--primary`     | `#1a3a8f` | Main blue         |
| `--primary-dark`| `#0f2460` | Dark blue         |
| `--accent`      | `#f59e0b` | Gold/yellow       |
| `--white`       | `#ffffff` | Text              |

---

## 📱 Responsive Breakpoints

| Screen      | Width       | Layout                    |
|-------------|-------------|---------------------------|
| Desktop     | > 1024px    | Sidebar + full content    |
| Tablet      | 768–1024px  | Smaller sidebar           |
| Mobile      | < 768px     | Hamburger menu, 1-column  |
| Small       | < 420px     | Extra compact layout      |

---

## 🔧 Setup

1. `assets/` folder mein `logo.png` aur `romve.png` rakho
2. `index.html` mein `YOUR_ACCESS_KEY` ko web3forms key se replace karo
3. Browser mein `index.html` open karo ✅
