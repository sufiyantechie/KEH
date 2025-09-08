#!/bin/bash

echo "🚀 Deploying Kalakadian English Hub to Vercel..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🔗 Your site is now live on Vercel!"