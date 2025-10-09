# 📝 Complete Customization Guide

This guide provides step-by-step instructions for customizing every aspect of your website.

## Table of Contents

1. [Images](#1-images)
2. [Text Content](#2-text-content)
3. [Colors & Branding](#3-colors--branding)
4. [Contact Form](#4-contact-form)
5. [Social Media Links](#5-social-media-links)
6. [SEO & Metadata](#6-seo--metadata)

---

## 1. Images

### Hero Background Image

**Location:** `/public/images/hero-bg.jpg`

**Steps:**
1. Prepare your image (recommended: 1920x1080px or larger)
2. Optimize it using [TinyPNG](https://tinypng.com/) or similar
3. Save it as `/public/images/hero-bg.jpg`
4. If using a different filename, update `components/Hero.tsx` line 21

**Code to edit (if changing filename):**
```typescript
// components/Hero.tsx - Line ~21
const backgroundImage = "/images/your-image-name.jpg"
```

---

### About Section Image

**Location:** `/public/images/about.jpg`

**Steps:**
1. Prepare your image (recommended: 800x1000px, portrait orientation)
2. Optimize the image
3. Save it as `/public/images/about.jpg`
4. If using a different filename, update `components/About.tsx` line 28

**Code to edit (if changing filename):**
```typescript
// components/About.tsx - Line ~28
const aboutImage = "/images/your-about-image.jpg"
```

---

### Portfolio Images

**Location:** `/public/portfolio/`

**Steps:**
1. Place ALL your portfolio images in `/public/portfolio/`
2. Name them descriptively (e.g., `medical-conference-2024.jpg`)
3. Open `components/Portfolio.tsx`
4. Find the `portfolioImages` array (line ~32)
5. List all your image filenames

**Code to edit:**
```typescript
// components/Portfolio.tsx - Line ~32
const portfolioImages = [
  'medical-conference-2024.jpg',
  'academic-summit-2023.jpg',
  'healthcare-expo-2024.jpg',
  'research-symposium.jpg',
  // Add as many as you want!
]
```

**Tips:**
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended aspect ratio: 16:9
- Recommended size: 1200x675px
- Always optimize images before uploading
- The grid automatically adjusts to any number of images

---

## 2. Text Content

### Hero Section

**File:** `components/Hero.tsx`

**Lines to edit (20-23):**
```typescript
const headline = "Your Main Headline Here"
const subtext = "Your supporting text that describes what you do"
const buttonText = "Call to Action Text"
```

---

### Services Section

**File:** `components/Services.tsx`

**Section title (Line ~26):**
```typescript
const sectionTitle = "Our Services" // or "What We Do", etc.
```

**Services list (Lines ~27-58):**
```typescript
const services = [
  {
    icon: (
      // Keep existing SVG or replace with your own
    ),
    title: "Your Service Name",
    description: "A brief description of this service. Keep it concise but informative."
  },
  {
    icon: (...),
    title: "Second Service",
    description: "Another service description."
  },
  {
    icon: (...),
    title: "Third Service",
    description: "Third service description."
  }
]
```

**To add more services:**
Simply copy one of the objects and add it to the array. The grid will automatically adjust.

---

### About Section

**File:** `components/About.tsx`

**Lines to edit (~24-33):**
```typescript
const sectionTitle = "About Our Company"

const paragraphs = [
  "First paragraph - introduce your company and mission.",
  "Second paragraph - highlight your experience and expertise.",
  "Third paragraph - mention your unique value proposition.",
  "Fourth paragraph - talk about your commitment to clients.",
  // Add or remove paragraphs as needed
]
```

**Statistics (Lines ~72-86):**
```typescript
// You can change these numbers and labels
<div className="text-4xl font-bold text-accent">500+</div>
<div className="text-gray-600 mt-1">Events</div>
```

---

### Contact Section

**File:** `components/Contact.tsx`

**Section title (Line ~36):**
```typescript
const sectionTitle = "Get in Touch" // or "Contact Us", "Let's Talk", etc.
```

**Contact information (Lines ~37-41):**
```typescript
const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "info@yourcompany.com",
  address: "123 Your Street, City, State 12345"
}
```

---

### Footer

**File:** `components/Footer.tsx`

**Lines to edit (~19-21):**
```typescript
const companyName = "Your Company Name"
const tagline = "Your company tagline or slogan"
```

---

## 3. Colors & Branding

**File:** `tailwind.config.js`

**Lines to edit (~9-13):**
```javascript
colors: {
  primary: '#0B1E3D',    // Main brand color (navy)
  accent: '#00B4D8',     // Accent/CTA color (aqua)
  bgLight: '#F8FAFC',    // Background color
}
```

**How to choose colors:**
1. Use [Coolors.co](https://coolors.co/) to generate palettes
2. Ensure good contrast for accessibility
3. Test colors on different sections before finalizing

**Changing fonts:**

Edit `tailwind.config.js` (Lines ~14-17):
```javascript
fontFamily: {
  heading: ['Poppins', 'sans-serif'],  // Change to your heading font
  body: ['Inter', 'sans-serif'],       // Change to your body font
}
```

Then update the import in `app/globals.css` (Line ~4):
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

---

## 4. Contact Form

### Option 1: Formspree (Easiest - Free)

1. **Sign up:**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Create a free account (50 submissions/month free)

2. **Create form:**
   - Click "New Form"
   - Give it a name (e.g., "Website Contact Form")
   - Copy the form endpoint

3. **Update code:**
   - Open `components/Contact.tsx`
   - Find line ~50
   - Replace with your endpoint:
   ```typescript
   const formspreeEndpoint = "https://formspree.io/f/xyzabc123"
   ```

4. **Test:**
   - Submit a test message
   - Check your email for the notification

---

### Option 2: EmailJS

1. **Sign up:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create account (200 emails/month free)

2. **Setup:**
   - Follow EmailJS React integration guide
   - Install their package: `npm install @emailjs/browser`

3. **Update code:**
   - Replace the `handleSubmit` function in `components/Contact.tsx`
   - Follow EmailJS documentation for React

---

### Option 3: Custom Backend

If you have your own backend:
1. Update the `formspreeEndpoint` to your API endpoint
2. Modify the `handleSubmit` function as needed
3. Adjust the request format to match your API

---

## 5. Social Media Links

**Files to edit:**
- `components/Contact.tsx` (Lines ~43-48)
- `components/Footer.tsx` (Lines ~22-27)

**Code:**
```typescript
const socialLinks = {
  linkedin: "https://linkedin.com/company/yourcompany",
  twitter: "https://twitter.com/yourcompany",
  facebook: "https://facebook.com/yourcompany",
  instagram: "https://instagram.com/yourcompany"
}
```

**To remove a social link:**
1. Delete the line from `socialLinks`
2. Remove the corresponding icon `<a>` tag from the JSX below

**To add a new social link:**
1. Add to `socialLinks` object
2. Add a new `<a>` tag with appropriate SVG icon

---

## 6. SEO & Metadata

**File:** `app/layout.tsx`

**Lines to edit (~4-14):**
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title - Shows in Browser Tab',
  description: 'Your meta description for search engines (150-160 chars)',
  keywords: 'keyword1, keyword2, keyword3',
  authors: [{ name: 'Your Company Name' }],
  // ... other metadata
}
```

**Important SEO tips:**
- Title should be 50-60 characters
- Description should be 150-160 characters
- Include relevant keywords naturally
- Update Open Graph metadata for social sharing

---

## 📋 Customization Checklist

Use this checklist to ensure you've customized everything:

### Images
- [ ] Hero background image
- [ ] About section image
- [ ] Portfolio images (all added)
- [ ] Updated portfolio array in code

### Text Content
- [ ] Hero headline and subtext
- [ ] Services section title and services
- [ ] About section content
- [ ] Contact information
- [ ] Footer company name and tagline

### Branding
- [ ] Primary and accent colors
- [ ] Font families (if changing)
- [ ] Logo (if you have one)

### Functionality
- [ ] Contact form endpoint configured
- [ ] Form tested and working
- [ ] Social media links updated

### SEO
- [ ] Page title updated
- [ ] Meta description updated
- [ ] Keywords added

### Final Steps
- [ ] All images optimized
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested all links
- [ ] Tested contact form
- [ ] Ready to deploy!

---

## 🆘 Troubleshooting

### Images not showing?
- Check file path is correct
- Ensure image is in `/public/` directory
- Verify filename matches code exactly (case-sensitive)

### Contact form not working?
- Check Formspree endpoint is correct
- Verify you've replaced `YOUR_FORM_ID`
- Check browser console for errors

### Colors not changing?
- Clear browser cache
- Restart dev server (`npm run dev`)
- Check Tailwind config syntax

### Animation issues?
- Ensure Framer Motion is installed
- Check for JavaScript errors in console

---

## 📞 Need More Help?

1. Check code comments in each component file
2. Review the main README.md
3. Consult Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Consult Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Happy customizing!** 🎨✨

