import { mockProducts } from './mock/data.js';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  
  let filteredProducts = [...mockProducts];

  // Filter by category
  if (query.category) {
    filteredProducts = filteredProducts.filter(
      p => p.category === query.category
    );
  }

  // Filter by subcategory
  if (query.subcategory) {
    filteredProducts = filteredProducts.filter(
      p => p.subcategory === query.subcategory
    );
  }

  // Filter by price range
  if (query.minPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price >= parseFloat(query.minPrice)
    );
  }
  if (query.maxPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price <= parseFloat(query.maxPrice)
    );
  }

  // Filter by rating
  if (query.minRating) {
    filteredProducts = filteredProducts.filter(
      p => p.rating >= parseFloat(query.minRating)
    );
  }

  // Filter by in stock
  if (query.inStock === 'true') {
    filteredProducts = filteredProducts.filter(p => p.inStock);
  }

  // Filter by featured
  if (query.featured === 'true') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }

  // Search by name or tags
  if (query.search) {
    const searchLower = query.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Sort
  if (query.sort) {
    switch(query.sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
  }

  // Pagination
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 12;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  const paginatedProducts = filteredProducts.slice(start, end);

  return {
    products: paginatedProducts,
    total: filteredProducts.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProducts.length / limit)
  };
});
