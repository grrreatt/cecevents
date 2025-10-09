# ✅ Getting Started Checklist

Use this checklist to set up and customize your website step by step.

---

## 🚀 Phase 1: Initial Setup (5 minutes)

- [ ] **Install dependencies**
  ```bash
  npm install
  ```

- [ ] **Start development server**
  ```bash
  npm run dev
  ```

- [ ] **Open in browser**
  - Go to: http://localhost:3000
  - Verify the site loads

---

## 🖼️ Phase 2: Images (20 minutes)

### Prepare Your Images

- [ ] **Collect 6 portfolio images**
  - From your events/conferences
  - Or from stock photo sites (see IMAGE-INSTRUCTIONS.md)

- [ ] **Optimize all images**
  - Use [TinyPNG.com](https://tinypng.com)
  - Target: < 300KB per image

### Hero Background

- [ ] Prepare hero background image (1920×1080px)
- [ ] Optimize the image
- [ ] Save as `/public/images/hero-bg.jpg`
- [ ] Refresh browser to see it

### About Section Image

- [ ] Prepare about image (800×1000px)
- [ ] Optimize the image  
- [ ] Save as `/public/images/about.jpg`
- [ ] Refresh browser to see it

### Portfolio Images

- [ ] Place all 6 images in `/public/portfolio/`
- [ ] Name them: `portfolio-1.jpg`, `portfolio-2.jpg`, etc.
- [ ] OR use custom names and update code (see below)
- [ ] Refresh browser to see them

**If using custom names:**
- [ ] Open `components/Portfolio.tsx`
- [ ] Find `portfolioImages` array (line ~32)
- [ ] Replace with your filenames
- [ ] Save and refresh

---

## ✏️ Phase 3: Text Content (30 minutes)

### Hero Section

- [ ] Open `components/Hero.tsx`
- [ ] Find the "EDIT THIS CONTENT" section (~line 20)
- [ ] Update `headline`
- [ ] Update `subtext`
- [ ] Update `buttonText` if desired
- [ ] Save and check browser

### Services Section

- [ ] Open `components/Services.tsx`
- [ ] Find the "EDIT THIS CONTENT" section (~line 26)
- [ ] Update `sectionTitle`
- [ ] Update each service:
  - [ ] Service 1: title and description
  - [ ] Service 2: title and description
  - [ ] Service 3: title and description
- [ ] Want more services? Copy a service object and add it
- [ ] Save and check browser

### Portfolio Section

- [ ] Open `components/Portfolio.tsx`
- [ ] Update `sectionTitle` if desired (~line 31)
- [ ] Already updated image array? Check!

### About Section

- [ ] Open `components/About.tsx`
- [ ] Find the "EDIT THIS CONTENT" section (~line 24)
- [ ] Update `sectionTitle`
- [ ] Update all paragraphs (4-5 paragraphs about your company)
- [ ] Update stats (500+ Events, 50K+ Delegates, etc.)
- [ ] Save and check browser

### Contact Section

- [ ] Open `components/Contact.tsx`
- [ ] Find the "EDIT THIS CONTENT" section (~line 36)
- [ ] Update `sectionTitle`
- [ ] Update `contactInfo`:
  - [ ] Phone number
  - [ ] Email address
  - [ ] Physical address
- [ ] Update `socialLinks` (we'll add real URLs next)
- [ ] Save and check browser

### Footer

- [ ] Open `components/Footer.tsx`
- [ ] Find the "EDIT THIS CONTENT" section (~line 19)
- [ ] Update `companyName`
- [ ] Update `tagline`
- [ ] Update `socialLinks` (same as contact)
- [ ] Save and check browser

---

## 🎨 Phase 4: Branding (10 minutes)

### Colors

- [ ] Open `tailwind.config.js`
- [ ] Find the `colors` section (~line 9)
- [ ] Update `primary` color (your main brand color)
- [ ] Update `accent` color (your CTA/highlight color)
- [ ] Update `bgLight` if desired
- [ ] Save and check browser
- [ ] Does it look good? Adjust if needed

### Fonts (Optional)

- [ ] Want different fonts? 
  - [ ] Choose from [Google Fonts](https://fonts.google.com)
  - [ ] Update `tailwind.config.js` fontFamily
  - [ ] Update Google Fonts import in `app/globals.css`
  - [ ] Save and check browser

---

## 📧 Phase 5: Contact Form Setup (10 minutes)

### Option A: Formspree (Recommended)

- [ ] Go to [formspree.io](https://formspree.io)
- [ ] Sign up for free account
- [ ] Click "New Form"
- [ ] Name it "Website Contact Form"
- [ ] Copy the endpoint URL
- [ ] Open `components/Contact.tsx`
- [ ] Find `formspreeEndpoint` (~line 50)
- [ ] Paste your endpoint
- [ ] Save file
- [ ] Test the form!
  - [ ] Fill out form
  - [ ] Submit
  - [ ] Check your email

### Option B: EmailJS

- [ ] Go to [emailjs.com](https://emailjs.com)
- [ ] Follow their setup guide
- [ ] Update code per their instructions

---

## 🔗 Phase 6: Social Media Links (5 minutes)

- [ ] Gather your social media URLs:
  - [ ] LinkedIn
  - [ ] Twitter/X
  - [ ] Facebook  
  - [ ] Instagram

- [ ] Update in `components/Contact.tsx` (~line 43)
- [ ] Update in `components/Footer.tsx` (~line 22)
- [ ] Save and test links

**Don't have all platforms?**
- Option 1: Use homepage URLs (e.g., https://facebook.com)
- Option 2: Remove unused icons from the code

---

## 🔍 Phase 7: SEO & Metadata (5 minutes)

- [ ] Open `app/layout.tsx`
- [ ] Find the `metadata` object (~line 4)
- [ ] Update `title` (shows in browser tab)
- [ ] Update `description` (shows in Google)
- [ ] Update `keywords`
- [ ] Update `authors` name
- [ ] Update Open Graph data
- [ ] Save file

---

## ✅ Phase 8: Testing (15 minutes)

### Functionality Testing

- [ ] Click all navigation/scroll links
- [ ] Click "Get in Touch" button - does it scroll?
- [ ] Test contact form:
  - [ ] Fill and submit
  - [ ] Check success message
  - [ ] Check email received
- [ ] Click portfolio images - lightbox opens?
- [ ] Click lightbox close button
- [ ] Test all social media links
- [ ] Test footer links

### Visual Testing

- [ ] All images load correctly
- [ ] No broken images (check browser console)
- [ ] Text is readable on all backgrounds
- [ ] Colors look good
- [ ] Animations are smooth
- [ ] Hover effects work

### Responsive Testing

Desktop:
- [ ] Open in Chrome
- [ ] Open in Safari/Firefox
- [ ] Check all sections look good

Mobile:
- [ ] Open Chrome DevTools (F12)
- [ ] Click device toolbar icon
- [ ] Test iPhone SE size
- [ ] Test iPhone 12 Pro size
- [ ] Test iPad size
- [ ] Everything readable? Buttons work?

Real devices (if available):
- [ ] Test on your phone
- [ ] Test on tablet
- [ ] Ask friend to test on their device

---

## 🚀 Phase 9: Deployment (30 minutes)

### Prepare for Deployment

- [ ] All images added and optimized
- [ ] All text updated
- [ ] Contact form working
- [ ] Social links correct
- [ ] Colors finalized
- [ ] Everything tested

### Push to GitHub

- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Push code to GitHub

### Deploy to Vercel

- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign up with GitHub
- [ ] Import your repository
- [ ] Click "Deploy"
- [ ] Wait for build (1-2 minutes)
- [ ] Site is live! 🎉

### Post-Deployment

- [ ] Visit your live site
- [ ] Test everything again
- [ ] Share the URL!

**Full deployment guide:** See `DEPLOYMENT-GUIDE.md`

---

## 🎯 Phase 10: Optional Enhancements

### Analytics (Optional)

- [ ] Set up Google Analytics
- [ ] Or use Vercel Analytics
- [ ] Track visitor data

### Custom Domain (Optional)

- [ ] Purchase domain
- [ ] Connect to Vercel
- [ ] Wait for DNS propagation
- [ ] Site live at your domain!

### Performance Optimization

- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Score above 90? Great!
- [ ] Score below 90? Check:
  - [ ] Images optimized?
  - [ ] Using WebP format?
  - [ ] File sizes reasonable?

---

## 📊 Progress Tracker

Check off as you complete:

- [ ] Phase 1: Initial Setup ✅
- [ ] Phase 2: Images ✅
- [ ] Phase 3: Text Content ✅
- [ ] Phase 4: Branding ✅
- [ ] Phase 5: Contact Form ✅
- [ ] Phase 6: Social Links ✅
- [ ] Phase 7: SEO ✅
- [ ] Phase 8: Testing ✅
- [ ] Phase 9: Deployment ✅
- [ ] Phase 10: Enhancements ✅

**All done? Congratulations!** 🎉

Your website is live and ready to bring in clients!

---

## 🆘 Stuck Somewhere?

### Common Issues

**Issue:** Images not showing
- **Fix:** Check file paths, ensure images are in `/public/` folder

**Issue:** Form not working  
- **Fix:** Verify Formspree endpoint is correct

**Issue:** Site won't start
- **Fix:** Run `npm install` again, check for errors

**Issue:** Can't find where to edit something
- **Fix:** Search for the text in your code editor (Ctrl+Shift+F)

### Get Help

- Read the detailed guides:
  - `README.md` - Main documentation
  - `CUSTOMIZATION-GUIDE.md` - Detailed instructions
  - `DEPLOYMENT-GUIDE.md` - Deployment help
  - `IMAGE-INSTRUCTIONS.md` - Image help

- Check code comments:
  - Every component has "EDIT THIS CONTENT" sections
  - Clear instructions in the code

---

## 🎉 You Did It!

By completing this checklist, you now have:
- ✅ A professional, premium website
- ✅ Fully customized with your content
- ✅ Deployed and live on the internet
- ✅ Ready to attract clients

**Next steps:**
1. Share your site URL
2. Add to business cards
3. Share on social media
4. Include in email signatures
5. Watch the inquiries come in!

---

**Total Time Investment:** 2-3 hours  
**Result:** A $5,000+ quality website  
**Status:** Ready to bring in business! 💼

**Questions?** Review the documentation files. Everything is explained! 📚

