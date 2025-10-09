# 📸 Image Setup Instructions

## Where to Place Your Images

### Portfolio Images
**Location:** `/public/portfolio/`

**Filenames to add:**
1. `portfolio-1.jpg`
2. `portfolio-2.jpg`
3. `portfolio-3.jpg`
4. `portfolio-4.jpg`
5. `portfolio-5.jpg`
6. `portfolio-6.jpg`

Or use your own names and update the array in `components/Portfolio.tsx`

**Recommended specs:**
- Aspect ratio: 16:9
- Size: 1200×675 pixels
- Format: JPG or WebP
- File size: < 300KB each (use [TinyPNG](https://tinypng.com) to compress)

---

### Hero Background
**Location:** `/public/images/hero-bg.jpg`

**Recommended specs:**
- Size: 1920×1080 pixels (Full HD)
- Format: JPG
- File size: < 500KB
- Style: Professional conference/event photo with some negative space for text

**Pro tip:** Use a dark, professional image. The dark gradient overlay will make text readable.

---

### About Section Image
**Location:** `/public/images/about.jpg`

**Recommended specs:**
- Size: 800×1000 pixels (portrait)
- Format: JPG
- File size: < 300KB
- Style: Team photo, office, or professional portrait

---

## Image Optimization Tips

### Before uploading, optimize your images:

1. **Resize to recommended dimensions**
   - Use [Squoosh.app](https://squoosh.app)
   - Or use Photoshop/GIMP

2. **Compress for web**
   - Use [TinyPNG.com](https://tinypng.com) (free, easy)
   - Or [ImageOptim](https://imageoptim.com) (Mac)
   - Or [Compressor.io](https://compressor.io)

3. **Target file sizes:**
   - Portfolio images: 100-300KB each
   - Hero background: 200-500KB
   - About image: 100-300KB

---

## Where to Find Images

### Free Stock Photo Sites

1. **[Unsplash.com](https://unsplash.com)**
   - Search: "conference", "business meeting", "event"
   - 100% free, no attribution required

2. **[Pexels.com](https://pexels.com)**
   - Search: "corporate event", "seminar", "workshop"
   - Free for commercial use

3. **[Pixabay.com](https://pixabay.com)**
   - Good for business photos
   - Free license

### Premium Stock (If budget allows)

- **Shutterstock.com** - High quality
- **iStock.com** - Good selection
- **Adobe Stock** - Professional grade

### Use Your Own Photos

Best option! Use photos from your actual events:
- Event venue setup
- Registration desks
- Attendees (with permission)
- Team members
- Behind-the-scenes

---

## Quick Setup Checklist

- [ ] Download/prepare 6 portfolio images
- [ ] Optimize all portfolio images
- [ ] Place in `/public/portfolio/` folder
- [ ] Update filenames in `components/Portfolio.tsx` if needed
- [ ] Download/prepare hero background image
- [ ] Optimize hero image
- [ ] Save as `/public/images/hero-bg.jpg`
- [ ] Download/prepare about image
- [ ] Optimize about image
- [ ] Save as `/public/images/about.jpg`
- [ ] Test site in browser
- [ ] All images loading correctly

---

## Updating Portfolio Images in Code

**File:** `components/Portfolio.tsx`

**Find this section (around line 32):**

```typescript
const portfolioImages = [
  'portfolio-1.jpg',
  'portfolio-2.jpg',
  'portfolio-3.jpg',
  'portfolio-4.jpg',
  'portfolio-5.jpg',
  'portfolio-6.jpg',
]
```

**Replace with your actual filenames:**

```typescript
const portfolioImages = [
  'medical-conference-2024.jpg',
  'healthcare-summit.jpg',
  'academic-symposium.jpg',
  'workshop-session.jpg',
  'registration-desk.jpg',
  'keynote-speaker.jpg',
  'networking-event.jpg',
  'awards-ceremony.jpg',
]
```

---

## Image Naming Best Practices

✅ **Good:**
- `medical-conference-2024.jpg`
- `registration-desk.jpg`
- `keynote-speaker.jpg`

❌ **Avoid:**
- `IMG_12345.jpg`
- `photo 1.jpg` (spaces)
- `MyImage.JPG` (mixed case)

**Tips:**
- Use lowercase
- Use hyphens, not spaces
- Be descriptive
- Include event/year if relevant

---

## Troubleshooting

### Image not showing?

1. **Check file path**
   - Files must be in `/public/` directory
   - Path in code should NOT include `/public/`
   - Example: `/portfolio/image.jpg` NOT `/public/portfolio/image.jpg`

2. **Check filename**
   - Must match exactly (case-sensitive!)
   - No typos in code

3. **Check file format**
   - Supported: `.jpg`, `.jpeg`, `.png`, `.webp`
   - File extension must match actual format

4. **Restart dev server**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Image loads but looks bad?

- Check original image quality
- Ensure it's not stretched/squashed
- Use correct aspect ratio
- Increase image resolution

### Image loads slowly?

- File size too large
- Compress with TinyPNG
- Target: < 300KB per image

---

## Advanced: Custom Image Sizes

If you want different aspect ratios or sizes:

**Edit `components/Portfolio.tsx`:**

Change `aspect-video` (16:9) to:
- `aspect-square` (1:1)
- `aspect-[4/3]` (4:3)
- `aspect-[3/2]` (3:2)

**Example:**
```typescript
className="relative aspect-square rounded-2xl overflow-hidden..."
```

---

## Need Help?

- Main README: `README.md`
- Full customization guide: `CUSTOMIZATION-GUIDE.md`
- Quick start: `QUICK-START.md`

---

**Remember:** Optimized images = fast loading = happy visitors! 🚀

