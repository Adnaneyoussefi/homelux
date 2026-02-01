# HomeLux E-Commerce Platform

A modern, full-featured e-commerce platform built with Nuxt 3, Vue 3, Pinia, and Tailwind CSS. Specializing in premium home & kitchen appliances and artisanal home decor products.

![HomeLux Banner](https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=400&fit=crop)

## 🚀 Features

### Frontend Features
- ✅ **Modern Stack**: Nuxt 3 + Vue 3 (Options API) + Pinia + Tailwind CSS
- ✅ **Server-Side Rendering (SSR)**: Enabled for optimal performance and SEO
- ✅ **Responsive Design**: Mobile-first approach with beautiful UI/UX
- ✅ **Product Catalog**: Browse products with advanced filtering and sorting
- ✅ **Product Search**: Real-time search functionality
- ✅ **Shopping Cart**: Full cart management with local storage persistence
- ✅ **Wishlist**: Save favorite products
- ✅ **Product Filters**: Filter by category, price, rating, availability
- ✅ **Payment Integration**: PayPal payment gateway (configurable)
- ✅ **Mock API**: JSON-based mock backend for development

### Product Categories
- Kitchen Appliances (Coffee Makers, Air Fryers, Mixers, Blenders, etc.)
- Home Decor (Wall Art, Vases, Textiles, Candles, Rugs, etc.)

### Technical Features
- State management with Pinia
- API integration ready (RESTful)
- Dockerized development environment
- TypeScript support
- Hot module replacement
- Component-based architecture
- SEO optimized

## 📋 Prerequisites

- Docker and Docker Compose installed on your system
- Git (optional, for cloning)

## 🛠️ Quick Start with Docker

### One-Command Installation

```bash
docker-compose up --build
```

This single command will:
1. Build the Docker container
2. Install all npm dependencies
3. Start the development server
4. Make the application available at http://localhost:3000

### Step-by-Step Installation

1. **Clone or extract the project**
```bash
cd ecommerce-home-decor
```

2. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your PayPal Client ID:
```env
NUXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

To get a PayPal Client ID:
- Visit https://developer.paypal.com/
- Create a sandbox/production app
- Copy the Client ID

3. **Build and run with Docker**
```bash
docker-compose up --build
```

4. **Access the application**
Open your browser and navigate to: http://localhost:3000

## 🎯 Usage

### Browsing Products
- Visit the home page to see featured products
- Click on "Kitchen Appliances" or "Home Decor" to browse categories
- Use the search bar to find specific products
- Apply filters for price, rating, and availability

### Shopping Cart
- Add products to cart from product cards or product detail pages
- Click the cart icon in the header to view your cart
- Adjust quantities or remove items
- Proceed to checkout when ready

### Wishlist
- Click the heart icon on any product to add to wishlist
- Access your wishlist from the header icon
- View all saved products in one place

### Checkout
- Fill in shipping information
- Choose payment method (PayPal or Card)
- For PayPal: Use the PayPal button to complete payment
- For Card: Placeholder for Stripe integration (future)

## 📁 Project Structure

```
ecommerce-home-decor/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind directives
├── components/
│   ├── Header.vue                # Main navigation header
│   ├── Footer.vue                # Footer with links and newsletter
│   ├── CartSidebar.vue           # Sliding cart panel
│   └── ProductCard.vue           # Reusable product card component
├── layouts/
│   └── default.vue               # Default layout wrapper
├── pages/
│   ├── index.vue                 # Home page
│   ├── shop/
│   │   ├── index.vue            # All products page
│   │   └── [category].vue       # Category-filtered products
│   ├── product/
│   │   └── [slug].vue           # Product detail page
│   ├── checkout.vue             # Checkout with payment
│   └── wishlist.vue             # Wishlist page
├── server/
│   └── api/
│       ├── mock/
│       │   └── data.js          # Mock product and category data
│       ├── products.get.js      # Products API endpoint
│       ├── products/
│       │   └── [slug].get.js    # Single product endpoint
│       └── categories.get.js    # Categories endpoint
├── stores/
│   ├── cart.js                  # Pinia cart store
│   └── wishlist.js              # Pinia wishlist store
├── app.vue                      # Main app entry point
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── docker-compose.yml           # Docker Compose configuration
├── Dockerfile                   # Docker container configuration
└── package.json                 # Project dependencies
```

## 🎨 Customization

### Colors and Branding
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

### Adding Products
Edit `server/api/mock/data.js` to add or modify products:
```javascript
export const mockProducts = [
  {
    id: 1,
    name: 'Your Product',
    price: 99.99,
    // ... other properties
  }
];
```

### Payment Configuration
To enable PayPal payments:
1. Get your Client ID from PayPal Developer Dashboard
2. Add it to your `.env` file
3. For production, use your live credentials

## 🔌 Future Backend Integration

This project is designed to work with a Symfony backend. When ready to integrate:

### Backend Specifications
- **Framework**: Symfony 6/7
- **API**: REST API with API Platform
- **Authentication**: JWT
- **Payment**: Stripe integration

### Integration Steps
1. Update `nuxt.config.ts` with your backend API URL
2. Replace mock API calls with real endpoints
3. Implement JWT authentication
4. Add Stripe payment processing

## 📱 PWA & Mobile (Future)

The project is structured to support:
- Nuxt PWA module for progressive web app features
- Capacitor for native mobile app compilation
- Offline support
- Push notifications

## 🐳 Docker Commands

### Start the application
```bash
docker-compose up
```

### Start in detached mode
```bash
docker-compose up -d
```

### Stop the application
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Rebuild containers
```bash
docker-compose up --build
```

### Access container shell
```bash
docker-compose exec nuxt-app sh
```

## 🛠️ Development

### Without Docker
If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Production Build

```bash
# Build the application
npm run build

# Start production server
npm run preview
```

## 🎯 Key Features Explained

### State Management (Pinia)
- Cart and wishlist persist to localStorage
- Reactive state updates across components
- Type-safe store definitions

### SSR (Server-Side Rendering)
- Faster initial page loads
- Better SEO
- Improved social media sharing

### API Structure
- RESTful endpoints
- Query parameter filtering
- Pagination support
- Sorting and search

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interfaces
- Optimized images

## 🤝 Contributing

This is a starter template. Feel free to:
- Add new features
- Improve existing functionality
- Fix bugs
- Enhance documentation

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Heroicons
- Fonts from Google Fonts
- PayPal SDK for payment processing

## 📞 Support

For issues or questions:
- Check the documentation
- Review the code comments
- Examine the mock data structure

## 🚀 Deployment

### Vercel/Netlify
```bash
npm run build
```

Upload the `.output` directory or connect your git repository.

### Docker Production
Create a production Dockerfile with optimized settings.

---

**Built with ❤️ for modern e-commerce**
