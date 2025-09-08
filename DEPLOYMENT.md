# Quick Deployment Guide

## Prerequisites
- Node.js installed
- Vercel account (free at vercel.com)

## Steps to Deploy

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project directory:**
   ```bash
   cd kalakadian-english-hub
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

### Method 2: Using GitHub + Vercel Dashboard

1. **Push code to GitHub repository**

2. **Go to vercel.com and login**

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure:**
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

6. **Click Deploy**

### Method 3: Using Deployment Scripts

**Windows:**
```bash
deploy.bat
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

## Environment Variables (if needed)
- No environment variables required for basic deployment
- Add any API keys in Vercel dashboard under Settings > Environment Variables

## Custom Domain (Optional)
1. Go to your project in Vercel dashboard
2. Click Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting
- Ensure all dependencies are in package.json
- Check build logs in Vercel dashboard
- Verify React Router routes work with vercel.json configuration

Your site will be live at: `https://your-project-name.vercel.app`