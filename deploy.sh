#!/bin/bash

echo "🚀 Building and deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Create .nojekyll file
echo "📝 Creating .nojekyll file..."
touch out/.nojekyll

echo "✅ Build completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy to GitHub Pages'"
echo "   git push origin main"
echo ""
echo "2. Enable GitHub Pages:"
echo "   - Go to your repository Settings"
echo "   - Navigate to Pages section"
echo "   - Select 'Deploy from a branch'"
echo "   - Choose 'gh-pages' branch"
echo "   - Save"
echo ""
echo "3. Your site will be available at:"
echo "   https://yourusername.github.io/nextjs_frontend"
echo ""
echo "🎉 Happy coding!" 