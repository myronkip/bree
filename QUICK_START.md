# Quick Start Guide - Deploy to GitHub & Netlify

## 🚀 Quick Commands

### 1. Push to GitHub (First Time)

```bash
cd brenda-nalyanya-portfolio
git remote add origin https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

**Option A - Easiest (Netlify UI)**
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Select your `brenda-nalyanya-portfolio` repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click Deploy!

**Option B - CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📋 What's Included

✅ Professional portfolio website with your photo
✅ All CV content (Experience, Skills, Education, etc.)
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Professional color scheme (Navy blue & Gold)
✅ Contact section with social links

## 🔧 Local Testing

```bash
npm install
npm run dev          # View at http://localhost:5173
npm run build        # Create production build
npm run preview      # Preview production build
```

## 📁 Key Files

- `client/public/brenda-photo.jpg` - Your professional photo
- `client/src/pages/Home.tsx` - Main portfolio page
- `client/src/index.css` - Styling and theme
- `package.json` - Dependencies

## ⚡ After Deployment

1. Your site will be live at: `https://your-site-name.netlify.app`
2. Update Netlify domain name in dashboard
3. (Optional) Connect custom domain
4. Share your portfolio URL!

## 🆘 Need Help?

- **Netlify Issues**: https://support.netlify.com
- **GitHub Issues**: https://docs.github.com
- **Code Issues**: Check DEPLOYMENT.md for troubleshooting

---

**That's it! Your portfolio is ready to go! 🎉**
