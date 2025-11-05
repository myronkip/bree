#!/bin/bash

# Setup script for Brenda Nalyanya Portfolio
# This script installs dependencies and prepares the project for development

echo "🚀 Setting up Brenda Nalyanya Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ from https://nodejs.org"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "📝 Next steps:"
    echo "  1. Run 'npm run dev' to start the development server"
    echo "  2. Open http://localhost:5173 in your browser"
    echo "  3. Make changes and see them live!"
    echo ""
    echo "🚀 To deploy:"
    echo "  1. Read QUICK_START.md for GitHub & Netlify deployment"
    echo "  2. Or read DEPLOYMENT.md for detailed instructions"
    echo ""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
