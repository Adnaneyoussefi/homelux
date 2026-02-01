export const mockProducts = [
  // Kitchen Appliances
  {
    id: 1,
    name: 'Professional Espresso Machine',
    slug: 'professional-espresso-machine',
    category: 'kitchen-appliances',
    subcategory: 'Coffee Makers',
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80'
    ],
    description: 'Premium espresso machine with dual boiler system, PID temperature control, and professional-grade steam wand. Perfect for home baristas.',
    features: [
      'Dual boiler system for simultaneous brewing and steaming',
      'PID temperature control for precision',
      'Professional 58mm portafilter',
      'Built-in pressure gauge',
      '15 bar Italian pump'
    ],
    specifications: {
      power: '1450W',
      capacity: '2.5L water tank',
      weight: '18kg',
      dimensions: '35 x 30 x 40 cm'
    },
    tags: ['espresso', 'coffee', 'barista', 'italian']
  },
  {
    id: 2,
    name: 'Smart Air Fryer XL',
    slug: 'smart-air-fryer-xl',
    category: 'kitchen-appliances',
    subcategory: 'Air Fryers',
    price: 179.99,
    originalPrice: 249.99,
    discount: 28,
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1585237672135-929d4a752772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585237672135-929d4a752772?w=800&q=80'
    ],
    description: 'Digital air fryer with 8 preset cooking modes, app control, and 5.5L capacity. Healthy cooking made easy.',
    features: [
      '8 preset cooking programs',
      'WiFi and app control',
      '5.5L extra large capacity',
      'Non-stick basket',
      'Dishwasher safe parts'
    ],
    specifications: {
      power: '1700W',
      capacity: '5.5L',
      weight: '5.2kg',
      dimensions: '30 x 30 x 35 cm'
    },
    tags: ['air fryer', 'healthy cooking', 'smart appliance']
  },
  {
    id: 3,
    name: 'Premium Stand Mixer',
    slug: 'premium-stand-mixer',
    category: 'kitchen-appliances',
    subcategory: 'Mixers',
    price: 449.99,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 823,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&q=80'
    ],
    description: 'Professional-grade stand mixer with 10 speeds, 5.5 qt bowl, and multiple attachments for all your baking needs.',
    features: [
      '10-speed motor',
      '5.5 quart stainless steel bowl',
      'Includes dough hook, wire whip, and flat beater',
      'Tilt-head design',
      'Available in 6 colors'
    ],
    specifications: {
      power: '325W',
      capacity: '5.5 qt',
      weight: '8.6kg',
      dimensions: '35.3 x 22.1 x 35.6 cm'
    },
    tags: ['mixer', 'baking', 'kitchen essential']
  },
  {
    id: 4,
    name: 'Vintage Blender Pro',
    slug: 'vintage-blender-pro',
    category: 'kitchen-appliances',
    subcategory: 'Blenders',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80'
    ],
    description: 'Retro-styled blender with modern power. Features 1000W motor and 5 speed settings.',
    features: [
      '1000W powerful motor',
      '5 speed settings + pulse',
      '1.5L glass jar',
      'Stainless steel blades',
      'Vintage design in multiple colors'
    ],
    specifications: {
      power: '1000W',
      capacity: '1.5L',
      weight: '3.8kg',
      dimensions: '20 x 20 x 40 cm'
    },
    tags: ['blender', 'vintage', 'smoothies']
  },

  // Home Decor
  {
    id: 5,
    name: 'Handwoven Macrame Wall Hanging',
    slug: 'handwoven-macrame-wall-hanging',
    category: 'home-decor',
    subcategory: 'Wall Art',
    price: 89.99,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80'
    ],
    description: 'Beautiful handcrafted macrame wall hanging made with natural cotton rope. Perfect boho chic accent piece.',
    features: [
      '100% natural cotton rope',
      'Handmade by artisans',
      'Includes wooden dowel',
      'Multiple size options',
      'Bohemian style'
    ],
    specifications: {
      material: '100% Cotton',
      dimensions: '80 x 100 cm',
      weight: '0.8kg'
    },
    tags: ['macrame', 'wall art', 'boho', 'handmade']
  },
  {
    id: 6,
    name: 'Ceramic Vase Collection Set',
    slug: 'ceramic-vase-collection-set',
    category: 'home-decor',
    subcategory: 'Vases',
    price: 124.99,
    originalPrice: 169.99,
    discount: 26,
    rating: 4.8,
    reviewCount: 289,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80'
    ],
    description: 'Set of 3 artisanal ceramic vases with unique textures. Hand-glazed in earth tones.',
    features: [
      'Set of 3 vases in different sizes',
      'Hand-glazed ceramic',
      'Unique texture finish',
      'Earth tone colors',
      'Waterproof interior'
    ],
    specifications: {
      material: 'Ceramic',
      sizes: 'Small (15cm), Medium (20cm), Large (25cm)',
      weight: '2.5kg total'
    },
    tags: ['vases', 'ceramic', 'handmade', 'home decor']
  },
  {
    id: 7,
    name: 'Artisanal Throw Pillow Set',
    slug: 'artisanal-throw-pillow-set',
    category: 'home-decor',
    subcategory: 'Textiles',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.6,
    reviewCount: 412,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80'
    ],
    description: 'Set of 2 hand-embroidered throw pillows with geometric patterns. Premium linen fabric.',
    features: [
      'Hand-embroidered details',
      '100% linen fabric',
      'Hidden zipper closure',
      'Includes premium inserts',
      'Machine washable covers'
    ],
    specifications: {
      material: '100% Linen',
      size: '45 x 45 cm',
      weight: '1.2kg'
    },
    tags: ['pillows', 'textiles', 'linen', 'handmade']
  },
  {
    id: 8,
    name: 'Rustic Wood Wall Shelf',
    slug: 'rustic-wood-wall-shelf',
    category: 'home-decor',
    subcategory: 'Storage',
    price: 149.99,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
    ],
    description: 'Handcrafted floating shelf made from reclaimed wood. Industrial farmhouse style.',
    features: [
      'Reclaimed solid wood',
      'Metal bracket support',
      'Easy wall mounting',
      'Rustic finish',
      'Handcrafted quality'
    ],
    specifications: {
      material: 'Reclaimed Wood & Metal',
      dimensions: '90 x 20 x 15 cm',
      weight: '4.5kg',
      loadCapacity: '15kg'
    },
    tags: ['shelf', 'wood', 'rustic', 'farmhouse']
  },

  // More Kitchen Appliances
  {
    id: 9,
    name: 'Stainless Steel Cookware Set',
    slug: 'stainless-steel-cookware-set',
    category: 'kitchen-appliances',
    subcategory: 'Cookware',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.7,
    reviewCount: 523,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1584990347498-7ab0b9c66eb8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584990347498-7ab0b9c66eb8?w=800&q=80'
    ],
    description: '10-piece professional cookware set with tri-ply construction for even heating.',
    features: [
      'Tri-ply stainless steel construction',
      'Includes 10 essential pieces',
      'Oven safe up to 500°F',
      'Dishwasher safe',
      'Lifetime warranty'
    ],
    specifications: {
      material: 'Stainless Steel',
      pieces: '10',
      weight: '12kg',
      ovenSafe: 'Up to 500°F'
    },
    tags: ['cookware', 'stainless steel', 'professional']
  },
  {
    id: 10,
    name: 'Electric Kettle with Temperature Control',
    slug: 'electric-kettle-temperature-control',
    category: 'kitchen-appliances',
    subcategory: 'Kettles',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 367,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80'
    ],
    description: 'Premium electric kettle with variable temperature settings for perfect tea and coffee.',
    features: [
      '6 preset temperature settings',
      '1.7L capacity',
      'Keep warm function',
      'Stainless steel interior',
      'Auto shut-off'
    ],
    specifications: {
      power: '1500W',
      capacity: '1.7L',
      weight: '1.8kg',
      dimensions: '22 x 15 x 25 cm'
    },
    tags: ['kettle', 'tea', 'coffee', 'temperature control']
  },

  // More Home Decor
  {
    id: 11,
    name: 'Hand-Poured Soy Candle Set',
    slug: 'hand-poured-soy-candle-set',
    category: 'home-decor',
    subcategory: 'Candles',
    price: 54.99,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 645,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1602874801006-47c1c84e9bc0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1602874801006-47c1c84e9bc0?w=800&q=80'
    ],
    description: 'Set of 3 luxury soy candles with essential oil blends. Hand-poured in artisan ceramic vessels.',
    features: [
      '100% natural soy wax',
      'Essential oil fragrances',
      'Ceramic vessels (reusable)',
      '40+ hours burn time each',
      'Set of 3 complementary scents'
    ],
    specifications: {
      material: 'Soy Wax',
      burnTime: '40+ hours',
      weight: '1.5kg',
      scents: 'Lavender, Sandalwood, Citrus'
    },
    tags: ['candles', 'soy', 'aromatherapy', 'handmade']
  },
  {
    id: 12,
    name: 'Woven Jute Area Rug',
    slug: 'woven-jute-area-rug',
    category: 'home-decor',
    subcategory: 'Rugs',
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600166898504-9c5b5e50e3ee?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600166898504-9c5b5e50e3ee?w=800&q=80'
    ],
    description: 'Natural jute rug with geometric pattern. Eco-friendly and durable for high-traffic areas.',
    features: [
      '100% natural jute fiber',
      'Handwoven by artisans',
      'Non-slip backing',
      'Multiple sizes available',
      'Eco-friendly'
    ],
    specifications: {
      material: '100% Jute',
      size: '200 x 300 cm',
      thickness: '8mm',
      weight: '8.5kg'
    },
    tags: ['rug', 'jute', 'natural', 'handwoven']
  }
];

export const categories = [
  {
    id: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    slug: 'kitchen-appliances',
    description: 'Premium kitchen appliances for the modern home',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    subcategories: ['Coffee Makers', 'Air Fryers', 'Mixers', 'Blenders', 'Cookware', 'Kettles']
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    description: 'Artisanal decor to elevate your living space',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    subcategories: ['Wall Art', 'Vases', 'Textiles', 'Storage', 'Candles', 'Rugs']
  }
];
