@echo off
echo 🚀 Deploying Kalakadian English Hub to Vercel...

echo 📦 Building project...
call npm run build

echo 🌐 Deploying to Vercel...
call vercel --prod

echo ✅ Deployment complete!
echo 🔗 Your site is now live on Vercel!
pause