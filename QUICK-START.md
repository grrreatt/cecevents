# ⚡ Quick Start Guide

Get your site running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

## Step 3: Open Browser

Navigate to: **http://localhost:3000**

---

## Next Steps

### 1️⃣ Add Your Images

**Portfolio Images:**
- Drop your images into `/public/portfolio/`
- Edit `components/Portfolio.tsx` (line 32) to list your image filenames

**Other Images:**
- Hero background → `/public/images/hero-bg.jpg`
- About section → `/public/images/about.jpg`

### 2️⃣ Edit Text Content

Each component has an "EDIT THIS CONTENT" section at the top:

- `components/Hero.tsx` - Headline and CTA
- `components/Services.tsx` - Your services
- `components/About.tsx` - Your story
- `components/Contact.tsx` - Contact info
- `components/Footer.tsx` - Company name

### 3️⃣ Setup Contact Form

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a form
4. Copy your endpoint
5. Paste into `components/Contact.tsx` (line 50)

### 4️⃣ Customize Colors (Optional)

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0B1E3D',    // Your brand color
  accent: '#00B4D8',     // Your accent color
  bgLight: '#F8FAFC',    // Background
}
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel (Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! 🚀

Full deployment guide: See `DEPLOYMENT-GUIDE.md`

---

## Need Help?

- **Full customization guide:** `CUSTOMIZATION-GUIDE.md`
- **Deployment help:** `DEPLOYMENT-GUIDE.md`
- **Main documentation:** `README.md`

---

**You're all set!** Happy building 🎉

