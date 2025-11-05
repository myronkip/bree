# Complete Guide: Deploy to GitHub & Netlify

This guide will walk you through pushing your portfolio to GitHub and deploying it live on Netlify.

## Prerequisites

Before starting, make sure you have:

1. **Git installed** - Download from https://git-scm.com
2. **GitHub account** - Create one at https://github.com (free)
3. **Netlify account** - Create one at https://app.netlify.com (free)
4. **Your project files** - Already prepared and ready to go

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `brenda-nalyanya-portfolio`
   - **Description**: "Professional portfolio website showcasing my finance and accounting expertise"
   - **Public** or **Private**: Choose based on your preference (public is better for sharing)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **"Create repository"**

### Step 2: Get Your Repository URL

After creating the repository, you'll see a page with your repository URL. It should look like:
```
https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git
```

Copy this URL - you'll need it in the next step.

### Step 3: Push Your Code to GitHub

Open your terminal/command prompt and run these commands:

```bash
# Navigate to your project directory
cd path/to/brenda-nalyanya-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Professional portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 4: Verify on GitHub

1. Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio`
2. You should see all your project files uploaded
3. Verify that your `client/public/brenda-photo.jpg` is there

## Part 2: Deploy to Netlify

### Option A: Deploy Using Netlify UI (Recommended for Beginners)

This is the easiest method!

1. **Go to Netlify**
   - Visit https://app.netlify.com
   - Log in with your account

2. **Add New Site**
   - Click **"Add new site"** button
   - Select **"Import an existing project"**

3. **Connect GitHub**
   - Choose **GitHub** as your Git provider
   - Click **"Authorize Netlify"**
   - GitHub will ask for permission - click **"Authorize netlify"**

4. **Select Repository**
   - Find and click on `brenda-nalyanya-portfolio`
   - Click **"Open"**

5. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Leave other settings as default
   - Click **"Deploy site"**

6. **Wait for Deployment**
   - Netlify will build and deploy your site
   - This takes about 2-5 minutes
   - You'll see a live preview when it's done

7. **Get Your Live URL**
   - Your site will be live at: `https://your-site-name.netlify.app`
   - You can customize the domain name in Netlify settings

### Option B: Deploy Using Netlify CLI (For Advanced Users)

If you prefer command line:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

## Part 3: After Deployment

### Customize Your Domain

1. In Netlify dashboard, go to **"Site settings"** → **"Domain management"**
2. Click **"Options"** next to your current domain
3. Choose **"Edit site name"** to change the subdomain
4. Or **"Add custom domain"** to use your own domain

### Set Up Auto-Deployment

Your site is now set up for continuous deployment! This means:

- Every time you push changes to GitHub, Netlify automatically rebuilds and deploys
- No manual deployment needed
- Changes go live in 1-2 minutes

To update your portfolio:

```bash
# Make changes to your files
# Then commit and push to GitHub
git add .
git commit -m "Update portfolio content"
git push origin main
```

Netlify will automatically deploy the changes!

### Share Your Portfolio

Your portfolio is now live! Share it with:

- **Email**: Send the Netlify URL to recruiters/employers
- **LinkedIn**: Add the link to your LinkedIn profile
- **Resume**: Include the URL in your resume/CV
- **Social Media**: Share on Twitter, LinkedIn, etc.

## Troubleshooting

### Build Fails on Netlify

**Error**: "npm: command not found" or build fails

**Solution**:
1. Go to Netlify Site Settings
2. Check Node.js version (should be v18+)
3. Try rebuilding: Site settings → Deploys → Trigger deploy

### Photo Not Showing

**Error**: Professional photo doesn't appear on live site

**Solution**:
1. Verify `brenda-photo.jpg` is in `client/public/`
2. Check that the file path in `Home.tsx` is `/brenda-photo.jpg`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Trigger a rebuild on Netlify

### Styles Look Wrong

**Error**: Colors or fonts don't look right

**Solution**:
1. Clear browser cache completely
2. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check that Tailwind CSS is building correctly
4. Trigger a rebuild on Netlify

### Site Shows "Page Not Found"

**Error**: 404 error when visiting the site

**Solution**:
1. Verify build was successful in Netlify logs
2. Check that `dist` folder was created locally: `npm run build`
3. Verify publish directory is set to `dist` in Netlify settings
4. Try redeploying: Site settings → Deploys → Trigger deploy

## Next Steps

### Optimize Your Portfolio

1. **Add More Content**
   - Update skills and experience
   - Add more projects/achievements
   - Customize colors and fonts

2. **Improve SEO**
   - Add meta descriptions
   - Use proper heading hierarchy
   - Add keywords to your content

3. **Monitor Analytics**
   - Netlify provides basic analytics
   - Check how many visitors you get
   - See which sections are most viewed

### Keep It Updated

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes: `git commit -m "Update portfolio"`
4. Push to GitHub: `git push origin main`
5. Netlify automatically deploys!

## Support & Resources

- **Netlify Support**: https://support.netlify.com
- **GitHub Help**: https://docs.github.com
- **Git Basics**: https://git-scm.com/book/en/v2
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com

## Quick Command Reference

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/brenda-nalyanya-portfolio.git

# Make changes and push
git add .
git commit -m "Your message here"
git push origin main

# Run locally
npm install
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Congratulations! Your portfolio is now live on the internet! 🎉**

Share your portfolio URL with the world and start showcasing your professional expertise!
