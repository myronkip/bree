# Deployment Guide - Brenda Nalyanya Portfolio

## Prerequisites

Before deploying, ensure you have:
- Node.js (v18+) and npm installed
- Git installed
- A GitHub account
- A Netlify account (free tier available)

## Step 1: Initialize Git Repository (if not already done)

```bash
cd brenda-nalyanya-portfolio
git init
git add .
git commit -m "Initial commit: Professional portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `brenda-nalyanya-portfolio`
3. Do NOT initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to Netlify

### Option A: Using Netlify UI (Recommended for beginners)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the `brenda-nalyanya-portfolio` repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

### Option B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Step 5: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add domain"
3. Follow the instructions to connect your custom domain
4. Update DNS records if needed

## Build and Test Locally

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
brenda-nalyanya-portfolio/
├── client/
│   ├── public/
│   │   └── brenda-photo.jpg      # Your professional photo
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main portfolio page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Main app component
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   └── package.json
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Environment Variables

This is a static site with no backend, so no environment variables are required for deployment.

## Troubleshooting

### Build fails on Netlify
- Ensure Node.js version is compatible (v18+)
- Check that all dependencies are listed in `package.json`
- Verify the build command is correct: `npm run build`

### Photo not displaying
- Ensure `brenda-photo.jpg` is in the `client/public/` directory
- Check that the image path in `Home.tsx` is correct: `/brenda-photo.jpg`

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Ensure Tailwind CSS is properly configured
- Check that `index.css` is imported in `main.tsx`

## Performance Optimization

The portfolio is already optimized with:
- Tailwind CSS for minimal CSS
- React 19 for efficient rendering
- Image optimization with object-cover
- Responsive design for all devices

## Support

For issues with:
- **Netlify**: Visit [Netlify Support](https://support.netlify.com)
- **GitHub**: Visit [GitHub Docs](https://docs.github.com)
- **React/Vite**: Check [Vite Docs](https://vitejs.dev) and [React Docs](https://react.dev)

---

**Your portfolio is now ready to share with the world! 🚀**
