# Gravicos - Modern Educational Website

A beautiful, fully responsive multi-page website for the Gravicos educational YouTube channel built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## 🎯 Features

- ✨ **Modern SaaS-style Design** - Clean, professional, and engaging UI
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎬 **Featured Videos Section** - Showcase your YouTube content with cards
- 📚 **Learning Paths** - Structured courses organized by skill level
- ✅ **Contact Form** - Beautiful contact form UI
- 🌙 **Dark Mode Support** - Seamless dark mode toggle
- ⚡ **Smooth Animations** - Framer Motion animations and transitions
- 🚀 **Performance Optimized** - Built with Next.js 14 App Router
- 📖 **SEO Friendly** - Proper meta tags and structured data
- 🎨 **Component-Based** - Reusable, well-organized components
- 🔗 **YouTube Integration** - Direct links to YouTube channel and videos

## 📄 Pages

1. **Home** - Hero section, featured videos, and learning overview
2. **Videos** - Complete video library with filtering by category
3. **Courses** - Structured learning paths (Beginner, Intermediate, Advanced)
4. **About** - Channel information, creator bio, and values
5. **Contact** - Contact form, social links, and FAQ

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Development**: Vite-ready configuration

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd Gravicos
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Running in Production

### Build the project
```bash
npm run build
```

### Start production server
```bash
npm start
```

## 📁 Project Structure

```
gravicos/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── videos/
│   │   └── page.tsx             # Videos page with filtering
│   ├── courses/
│   │   └── page.tsx             # Courses/Learning page
│   ├── about/
│   │   └── page.tsx             # About page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   ├── Button.tsx               # Reusable button
│   ├── Card.tsx                 # Card component
│   ├── SectionWrapper.tsx        # Section container
│   ├── Heading.tsx              # Heading component
│   ├── Paragraph.tsx            # Paragraph component
│   ├── HeroSection.tsx          # Hero banner
│   ├── FeaturedVideos.tsx       # Featured videos section
│   ├── VideoCard.tsx            # Individual video card
│   ├── CourseCard.tsx           # Individual course card
│   ├── CoursesSection.tsx       # Courses showcase
│   └── ...other components
├── data/                         # Mock data
│   ├── videos.ts               # Video data and categories
│   ├── courses.ts              # Course data
│   └── stats.ts                # Statistics and creator info
├── styles/                       # Global styles
│   └── globals.css             # Tailwind directives
├── public/                       # Static files
├── package.json                 # Dependencies
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # This file
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Update Mock Data
- **Videos**: Edit `data/videos.ts`
- **Courses**: Edit `data/courses.ts`
- **Stats/Creator**: Edit `data/stats.ts`

### Add New Pages
1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Navbar automatically adds links (update if needed)

### Social Links
Update `data/stats.ts` socialLinks array to add/remove social media buttons.

## 🔄 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the build folder

### Deploy to Other Platforms
The project works on any Node.js hosting (Heroku, Railway, etc.)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Next Steps / Enhancements

- [ ] Add backend for contact form submission
- [ ] Implement actual YouTube API integration
- [ ] Add newsletter signup
- [ ] Add blog functionality
- [ ] Implement analytics
- [ ] Add PWA support
- [ ] Multi-language support
- [ ] Community forum integration

## 📝 Configuration Notes

### YouTube Links
- Main channel: Update in `Navbar.tsx` and `components/`
- Video links automatically generate: `youtube.com/watch?v={youtubeId}`

### Meta Tags
- Edit in `app/layout.tsx` for global
- Edit individual `page.tsx` for page-specific

### Dark Mode
- Automatically enabled via `darkMode: 'class'` in Tailwind config
- Add toggle in Navbar if needed

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Tailwind Styles Not Loading
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
npm run build
```

## 📄 License

This project is provided as-is for educational purposes.

## 🤝 Support

For questions or issues:
- Contact via the contact page
- Subscribe to Gravicos YouTube channel
- Follow on social media

---

Built with ❤️ for the Gravicos community
