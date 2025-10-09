# ✨ cecevents - Ultra-Premium Event Management Website

> **World-class event registration and conference management platform**  
> Built with Next.js 14, Tailwind CSS, and Framer Motion

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055)](https://www.framer.com/motion/)

![cecevents Preview](https://via.placeholder.com/1200x630/D4AF37/1a1a1a?text=cecevents+Premium+Website)

---

## 🎬 **Overview**

cecevents is a **premium event management company website** featuring:

- **Cinematic animations** inspired by Apple, Zentry, and Vercel
- **Ultra-smooth interactions** with spring physics
- **3D effects** and glassmorphism design
- **Motion counters** and parallax scrolling
- **Real event portfolio** with lightbox modal
- **AI chatbot simulation** for modern UX
- **Fully responsive** and performance-optimized

**Perfect for**: Conference registration, corporate events, medical conferences, academic summits, and large-scale exhibitions across India.

---

## ✨ **Key Features**

### 🎯 **Premium Sections**

1. **Hero Section** - Cinematic parallax with animated particles and motion counters
2. **Signature Services** - 3D card effects with lighting and glow on hover
3. **Portfolio Gallery** - Real event images with smooth modal previews
4. **Feature Highlights** - Smart Registration, Analytics, Security, 24/7 Support
5. **About Section** - Motion counters and smooth side-slide reveals
6. **Contact Form** - Glassmorphism with smooth animations
7. **AI Chatbot** - Non-functional demo with typing animations
8. **Scroll Progress** - Top-edge gold gradient indicator

### 🎨 **Design Excellence**

- **Premium Typography**: Plus Jakarta Sans + Inter Tight
- **Color Palette**: Gold (#D4AF37) + Dark (#1a1a1a) + Professional accents
- **Animations**: Spring physics, 3D transforms, smooth easing
- **Glassmorphism**: Modern backdrop blur effects throughout
- **Responsive**: Perfect on mobile, tablet, and desktop

### ⚡ **Performance**

- **Next.js 14** App Router
- **Image optimization** with Next/Image
- **Lazy loading** with useInView
- **Fast page loads** (<2.5s)
- **SEO optimized** metadata

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone https://github.com/grrreatt/cecevents.git

# Navigate to project
cd cecevents

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 **Project Structure**

```
cecevents/
├── app/
│   ├── page.tsx              # Homepage with all premium sections
│   ├── services/page.tsx     # Detailed services page
│   ├── portfolio/page.tsx    # Full portfolio grid
│   ├── about/page.tsx        # Company information
│   ├── contact/page.tsx      # Contact form
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles + utilities
├── components/
│   ├── Navbar.tsx            # Premium navigation with scroll effects
│   ├── Footer.tsx            # Animated footer with scroll-to-top
│   ├── ChatBot.tsx           # Simulated AI assistant
│   ├── PortfolioModal.tsx    # Lightbox for portfolio images
│   └── ScrollProgress.tsx    # Page scroll indicator
├── lib/
│   ├── portfolio-data.json   # Portfolio items (easy to edit!)
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Event images
├── tailwind.config.js        # Custom animations + design tokens
└── package.json              # Dependencies
```

---

## 🎨 **Customization**

### **Update Portfolio**
Edit `lib/portfolio-data.json`:

```json
{
  "id": 1,
  "title": "Your Event Name",
  "location": "City, State",
  "attendees": "X,XXX+",
  "desc": "Event description",
  "image": "/images/your-image.jpg",
  "category": "Medical/Corporate/Academic"
}
```

### **Change Colors**
Edit `tailwind.config.js`:

```js
colors: {
  primary: '#1a1a1a',
  gold: '#D4AF37',      // Your brand color
  accent: '#2C2C2C',
}
```

### **Update Content**
- **Homepage**: Edit `app/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Contact Info**: Edit `app/contact/page.tsx`

---

## 🛠️ **Tech Stack**

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations |
| **Lucide Icons** | Premium icon library |
| **Next/Image** | Optimized image loading |

---

## 🌐 **Deployment**

### **Deploy to Vercel** (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/grrreatt/cecevents)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms**
- **Netlify**: `npm run build` → drag `.next` folder
- **Railway**: Connect GitHub repo
- **AWS Amplify**: Connect GitHub repo

---

## 📊 **Key Highlights**

✅ **500+ Events** managed successfully  
✅ **50,000+ Registrations** processed  
✅ **25+ Cities** across India  
✅ **98% Client Satisfaction**  
✅ **Apple-level design quality**  
✅ **Cinematic motion design**  
✅ **Production-ready code**

---

## 📸 **Screenshots**

### Hero Section
![Hero](https://via.placeholder.com/1200x630/1a1a1a/D4AF37?text=Cinematic+Hero+Section)

### Portfolio Grid
![Portfolio](https://via.placeholder.com/1200x630/2c2c2c/F4E5C2?text=Portfolio+Gallery)

### Services Cards
![Services](https://via.placeholder.com/1200x630/D4AF37/1a1a1a?text=3D+Service+Cards)

---

## 🎯 **Use Cases**

Perfect for:
- 🏥 **Medical Conferences** (AIIMS, CSI, etc.)
- 🏢 **Corporate Events** (TCS, Infosys, etc.)
- 🎓 **Academic Summits** (IIT, NIT, etc.)
- 🏭 **Industry Exhibitions** (Pharma, Tech, etc.)
- 🎪 **Large-scale Events** (3K-5K+ attendees)

---

## 🤝 **Contributing**

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the **MIT License**.

---

## 📞 **Contact**

**cecevents**  
📧 Email: info@cecevents.com  
📱 Phone: +91 98765 43210  
📍 Location: Mumbai, Maharashtra, India

🌐 **Live Demo**: [cecevents.vercel.app](https://cecevents.vercel.app)  
💻 **GitHub**: [github.com/grrreatt/cecevents](https://github.com/grrreatt/cecevents)

---

## 🙏 **Acknowledgments**

**Design Inspiration**:
- [Apple Product Pages](https://apple.com) - Cinematic motion
- [Zentry](https://zentry.com) - 3D effects
- [Vercel](https://vercel.com) - Smooth interactions

**Built with ❤️ for premium event management**

---

<div align="center">

### ⭐ If you like this project, please give it a star!

Made with **Next.js** • **Tailwind** • **Framer Motion**  
© 2025 cecevents. All rights reserved.

</div>
