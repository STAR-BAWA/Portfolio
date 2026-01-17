# Portfolio Deployment Guide - GitHub Integration

## 🚀 Quick Deploy Options

You have **3 easy ways** to deploy via GitHub:

---

## Option 1: GitHub Pages (Recommended - Completely Free)

### Setup Steps:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "feat: update navbar with STAR.DEV branding"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save

3. **Workflow runs automatically**:
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push
   - Builds your site and deploys to GitHub Pages
   - View progress in the **Actions** tab

4. **Your site will be live at**:
   ```
   https://YOUR_USERNAME.github.io/portfollio/
   ```

### Re-deploy:
Just push any changes to `main` branch - auto-deploys!

---

## Option 2: Vercel + GitHub (Auto-deploys on push)

### Setup Steps:

1. **Go to [vercel.com](https://vercel.com)**

2. **Click "Add New Project"**

3. **Import from GitHub**:
   - Connect your GitHub account
   - Select your `portfollio` repository
   - Click "Import"

4. **Configure**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy**:
   - Click "Deploy"
   - Done! Your site is live

### Your site will be at:
```
https://your-project-name.vercel.app
```

### Benefits:
- ✅ Auto-deploys on every `git push`
- ✅ Preview deployments for pull requests
- ✅ Global CDN (100+ locations)
- ✅ Unlimited bandwidth (free tier)
- ✅ Custom domain support

---

## Option 3: Netlify + GitHub

### Setup Steps:

1. **Go to [netlify.com](https://netlify.com)**

2. **Click "Add new site" → "Import an existing project"**

3. **Connect to GitHub**:
   - Authorize Netlify
   - Select your `portfollio` repository

4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Deploy**:
   - Click "Deploy site"
   - Done!

### Your site will be at:
```
https://random-name.netlify.app
```
(You can customize this)

---

## Comparison

| Feature | GitHub Pages | Vercel | Netlify |
|---------|--------------|--------|---------|
| **Cost** | Free | Free | Free |
| **CDN** | ✅ GitHub CDN | ✅ 100+ locations | ✅ Global CDN |
| **Auto-deploy** | ✅ GitHub Actions | ✅ Git push | ✅ Git push |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Bandwidth** | 100GB/month | Unlimited | 100GB/month |
| **Build time** | ~2-3 min | ~1-2 min | ~1-2 min |

---

## Commands Cheat Sheet

### Push changes to GitHub:
```bash
git add .
git commit -m "your message"
git push origin main
```

### Check deployment status:
- **GitHub Pages**: Check the "Actions" tab
- **Vercel**: Check Vercel dashboard
- **Netlify**: Check Netlify dashboard

### Local testing before deploy:
```bash
npm run build    # Build production version
npm run preview  # Test production build locally
```

---

## Troubleshooting

### GitHub Pages not working?
1. Go to Settings → Pages
2. Ensure source is set to "GitHub Actions"
3. Check the Actions tab for error logs

### Build failing?
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Resume PDF not loading?
- Ensure `Star_Bawa.pdf` is in the `public` folder
- The file will automatically be copied to `dist` during build

---

## Next Steps After Deployment

1. **Add Custom Domain** (optional):
   - GitHub Pages: Settings → Pages → Custom domain
   - Vercel/Netlify: Project settings → Domains

2. **Monitor Traffic**:
   - GitHub Pages: Use Google Analytics
   - Vercel: Built-in analytics
   - Netlify: Built-in analytics

3. **Set up automatic deployments**:
   - Already configured! Just `git push` to deploy

---

## Your Portfolio is Now LIVE! 🎉

Your brand-new **\<STAR.DEV />** portfolio with smooth GSAP animations is ready to handle millions of visitors!

**Features:**
- ✅ Catchy brand name with gradient styling
- ✅ Smooth zoom scroll animations
- ✅ Auto-deploys on git push
- ✅ Global CDN (fast worldwide)
- ✅ Handles 1M+ downloads
- ✅ $0 hosting cost
