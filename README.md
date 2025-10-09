# Premium Conference Registration Website 🎯

A modern, responsive website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** for conference registration and event management services.

## ✨ Features

- 🚀 **Lightning fast** performance with Next.js 14
- 🎨 **Premium design** inspired by Stripe, Framer, and Eventbrite
- 📱 **Fully responsive** - works beautifully on all devices
- ⚡ **Smooth animations** with Framer Motion
- 🖼️ **Portfolio gallery** with lightbox modal
- 📧 **Contact form** with Formspree integration
- 🎯 **SEO optimized** with proper meta tags
- 🔧 **Easy to customize** with clear code comments

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 How to Customize

### 1. Adding/Replacing Images

#### Hero Background Image
1. Place your image in `/public/images/`
2. Name it `hero-bg.jpg` (or update the filename in `components/Hero.tsx`)
3. Recommended size: 1920x1080px or larger

#### About Section Image
1. Place your image in `/public/images/`
2. Name it `about.jpg` (or update the filename in `components/About.tsx`)
3. Recommended size: 800x1000px

#### Portfolio Images
1. Place all portfolio images in `/public/portfolio/`
2. Open `components/Portfolio.tsx`
3. Find the `portfolioImages` array (around line 32)
4. Update with your image filenames:
   ```typescript
   const portfolioImages = [
     'your-event-1.jpg',
     'your-event-2.jpg',
     'your-event-3.jpg',
     // Add more images here
   ]
   ```

### 2. Editing Text Content

Each component has clearly marked sections for editing:

#### Hero Section (`components/Hero.tsx`)
```typescript
// Line ~20-23
const headline = "Your headline here"
const subtext = "Your subtext here"
const buttonText = "Your button text"
```

#### Services Section (`components/Services.tsx`)
```typescript
// Line ~26-27
const sectionTitle = "Your title"
const services = [
  {
    icon: <svg>...</svg>,
    title: "Service Name",
    description: "Service description"
  },
  // Add more services
]
```

#### About Section (`components/About.tsx`)
```typescript
// Line ~24-29
const sectionTitle = "About Us"
const paragraphs = [
  "First paragraph...",
  "Second paragraph...",
  // Add more paragraphs
]
```

#### Contact Section (`components/Contact.tsx`)
```typescript
// Line ~36-43
const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "your@email.com",
  address: "Your address"
}

const socialLinks = {
  linkedin: "https://linkedin.com/yourcompany",
  twitter: "https://twitter.com/yourcompany",
  // Update all social links
}
```

### 3. Setting Up Contact Form

#### Option 1: Formspree (Recommended - Free)

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xxxxxxxx`)
5. Open `components/Contact.tsx`
6. Replace the placeholder on line ~50:
   ```typescript
   const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"
   ```

#### Option 2: EmailJS

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Follow their React integration guide
3. Replace the form submission logic in `components/Contact.tsx`

### 4. Customizing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0B1E3D',    // Your primary color
  accent: '#00B4D8',     // Your accent color
  bgLight: '#F8FAFC',    // Background color
}
```

### 5. Changing Fonts

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  heading: ['Your Heading Font', 'sans-serif'],
  body: ['Your Body Font', 'sans-serif'],
}
```

Update the Google Fonts import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

## 📦 Building for Production

```bash
npm run build
```

## 🚀 Deployment to Vercel (Free)

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js)
   - Done! Your site is live 🎉

### Deployment Tips

- Your site will auto-deploy on every git push
- Free SSL certificate included
- Custom domain support available
- Automatic image optimization
- Global CDN for fast loading worldwide

## 📁 Project Structure

```
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── Portfolio.tsx      # Portfolio gallery
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/
│   ├── images/            # Main images (hero, about)
│   └── portfolio/         # Portfolio images
├── next.config.js         # Next.js configuration
└── tailwind.config.js     # Tailwind configuration
```

## 🎨 Design System

- **Primary Color:** #0B1E3D (Deep Navy)
- **Accent Color:** #00B4D8 (Aqua Blue)
- **Background:** #F8FAFC (Light Gray)
- **Typography:** Poppins (headings), Inter (body)
- **Animations:** Smooth 0.3-0.5s transitions
- **Shadows:** Subtle elevation on hover

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Image Optimization:** Next.js Image Component

## 📊 Performance

This site is optimized for speed:

- ✅ Next.js Image optimization
- ✅ Lazy loading for images
- ✅ Minimal JavaScript bundle
- ✅ Fast font loading
- ✅ Target: 90+ PageSpeed score

## 🤝 Support

For questions or issues:
1. Check this README first
2. Review code comments in each component
3. Consult Next.js and Tailwind CSS documentation

## 📄 License

This project is open source and available for commercial use.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

