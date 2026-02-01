# 🚀 Quick Installation Guide

## Prerequisites
- Docker and Docker Compose installed

## Installation Steps

### Option 1: One-Command Installation (Recommended)

```bash
docker-compose up --build
```

That's it! The application will be available at http://localhost:3000

### Option 2: Step-by-Step Installation

1. **Navigate to project directory**
```bash
cd ecommerce-home-decor
```

2. **Copy environment variables**
```bash
cp .env.example .env
```

3. **Edit .env file (Optional - for PayPal)**
Open `.env` and add your PayPal Client ID:
```env
NUXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

4. **Build and run**
```bash
docker-compose up --build
```

5. **Access the application**
Open your browser: http://localhost:3000

## What's Included

✅ Full e-commerce frontend
✅ Product catalog with 12 sample products
✅ Shopping cart functionality
✅ Wishlist feature
✅ Product filtering and search
✅ PayPal payment integration
✅ Responsive design
✅ Mock API (no database needed)

## Testing PayPal Integration

To test PayPal payments:
1. Get a sandbox Client ID from https://developer.paypal.com/
2. Add it to your `.env` file
3. Use PayPal sandbox accounts for testing

## Stopping the Application

```bash
docker-compose down
```

## Rebuilding

If you make changes to the code:
```bash
docker-compose up --build
```

## Troubleshooting

**Port 3000 already in use?**
```bash
# Stop the container
docker-compose down

# Or change the port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 instead
```

**Dependencies not installing?**
```bash
# Remove containers and rebuild
docker-compose down -v
docker-compose up --build
```

## Next Steps

1. Browse the products
2. Add items to cart
3. Test the checkout flow
4. Explore the code structure
5. Customize for your needs

Enjoy building your e-commerce platform! 🎉
