#!/bin/bash

# Gravicos Website - Quick Start Script
# This script sets up and runs the project

echo "🚀 Gravicos Website - Setup"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Run development server
echo ""
echo "🎉 Setup complete!"
echo ""
echo "Starting development server..."
echo "Open http://localhost:3000 in your browser"
echo ""

npm run dev
