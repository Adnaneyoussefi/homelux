#!/bin/bash

echo "================================================"
echo "   HomeLux E-Commerce - Quick Start Script"
echo "================================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "   Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker is installed"
echo "✅ Docker Compose is installed"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: To enable PayPal payments:"
    echo "   1. Get your Client ID from https://developer.paypal.com/"
    echo "   2. Edit .env and add: NUXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

echo "🚀 Starting the application with Docker..."
echo "   This may take a few minutes on first run..."
echo ""

# Build and start the containers
docker-compose up --build

# Note: The script will keep running until you press Ctrl+C
