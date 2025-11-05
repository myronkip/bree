# Brenda Lusike Nalyanya - Professional Portfolio

A modern, responsive personal portfolio website showcasing professional experience, skills, education, and achievements in finance and accounting.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5-purple)

## 🌟 Features

- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Professional Theme** - Navy blue and gold color scheme with elegant typography
- **Smooth Navigation** - Sticky header with smooth scrolling to sections
- **Comprehensive Sections**:
  - Home/Introduction with professional photo
  - About Me with key statistics
  - Technical and soft skills with progress indicators
  - Detailed work experience
  - Education and certifications
  - Key achievements and projects
  - Contact section with social links
- **Modern Stack** - Built with React 19, Tailwind CSS 4, and Vite
- **Optimized Performance** - Fast loading, minimal CSS, efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git
   cd brenda-nalyanya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or use the setup script:
   ```bash
   ./setup.sh
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
brenda-nalyanya-portfolio/
├── client/
│   ├── public/
│   │   └── brenda-photo.jpg          # Professional photo
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   │   └── ui/                   # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx              # Main portfolio page
│   │   ├── App.tsx                   # Main app component
│   │   ├── main.tsx                  # React entry point
│   │   └── index.css                 # Global styles & theme
│   ├── index.html
│   └── package.json
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── QUICK_START.md                    # Quick deployment guide
├── DEPLOYMENT.md                     # Detailed deployment guide
└── setup.sh                          # Setup script

```

## 🎨 Design

- **Color Palette**: Navy Blue (#1e3a8a) primary, Gold (#d4af37) accent
- **Typography**: Playfair Display for headings, Inter for body text
- **Layout**: Mobile-first responsive design
- **Animations**: Subtle hover effects and smooth transitions

## 📦 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Build Tool**: Vite 5
- **Routing**: Wouter (lightweight router)
- **Icons**: Lucide React
- **CSS-in-JS**: CSS variables with Tailwind

## 🚢 Deployment

### Deploy to Netlify

**Option 1: Using Netlify UI (Recommended)**
1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and authorize
5. Select this repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click Deploy!

**Option 2: Using Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Deploy to Other Platforms

The `dist` folder is production-ready and can be deployed to:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## 📝 Customization

### Update Content
Edit `client/src/pages/Home.tsx` to update:
- Personal information
- Skills and experience
- Education details
- Contact information

### Change Colors
Edit `client/src/index.css` to modify:
- Primary color (currently navy blue)
- Accent color (currently gold)
- Font families
- Spacing and sizing

### Replace Photo
Replace `client/public/brenda-photo.jpg` with your own professional photo (same filename or update the path in `Home.tsx`)

## 🔗 Links

- **Portfolio**: [Live Site](https://brenda-nalyanya.netlify.app)
- **GitHub**: [Repository](https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio)
- **LinkedIn**: [Brenda Nalyanya](https://www.linkedin.com/in/brenda-nalyanya-7b65a9166/)

## 📧 Contact

- **Email**: nalyanyalusike@gmail.com
- **Phone**: +254 700 335 054
- **Location**: Nairobi, Kenya

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)
- Bundled with [Vite](https://vitejs.dev)

## 📖 Documentation

- [Quick Start Guide](./QUICK_START.md) - Fast deployment instructions
- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment guide
- [Setup Script](./setup.sh) - Automated setup

---

**Made with ❤️ by Brenda Lusike Nalyanya**

*Last updated: November 2024*
