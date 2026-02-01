<template>
  <div class="min-h-screen bg-primary-50 py-8">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
          {{ pageTitle }}
        </h1>
        <p class="text-primary-600">
          {{ totalProducts }} products found
        </p>
      </div>

      <div class="flex gap-8">
        <!-- Filters Sidebar -->
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <!-- Category Filter -->
            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Categories</h3>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    v-model="filters.category"
                    value=""
                    class="mr-2"
                  />
                  <span>All Categories</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    v-model="filters.category"
                    value="kitchen-appliances"
                    class="mr-2"
                  />
                  <span>Kitchen Appliances</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    v-model="filters.category"
                    value="home-decor"
                    class="mr-2"
                  />
                  <span>Home Decor</span>
                </label>
              </div>
            </div>

            <!-- Price Filter -->
            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Price Range</h3>
              <div class="space-y-3">
                <div>
                  <label class="text-sm text-primary-600">Min Price</label>
                  <input
                    type="number"
                    v-model.number="filters.minPrice"
                    placeholder="$0"
                    class="input-field mt-1"
                  />
                </div>
                <div>
                  <label class="text-sm text-primary-600">Max Price</label>
                  <input
                    type="number"
                    v-model.number="filters.maxPrice"
                    placeholder="$1000"
                    class="input-field mt-1"
                  />
                </div>
              </div>
            </div>

            <!-- Rating Filter -->
            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Minimum Rating</h3>
              <div class="space-y-2">
                <label
                  v-for="rating in [4.5, 4.0, 3.5, 3.0]"
                  :key="rating"
                  class="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model.number="filters.minRating"
                    :value="rating"
                    class="mr-2"
                  />
                  <div class="flex items-center">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-4 h-4"
                      :class="star <= rating ? 'text-yellow-400' : 'text-gray-300'"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="ml-2">& Up</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Availability Filter -->
            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Availability</h3>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.inStock"
                  class="mr-2"
                />
                <span>In Stock Only</span>
              </label>
            </div>

            <!-- Clear Filters -->
            <button
              @click="clearFilters"
              class="w-full btn-secondary"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        <!-- Products Grid -->
        <main class="flex-1">
          <!-- Toolbar -->
          <div class="flex justify-between items-center mb-6 bg-white rounded-xl p-4 shadow-md">
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium text-primary-700">Sort by:</label>
              <select
                v-model="filters.sort"
                class="border-2 border-primary-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
              >
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <button
              class="lg:hidden btn-primary"
              @click="showMobileFilters = !showMobileFilters"
            >
              Filters
            </button>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900"></div>
          </div>

          <!-- Products -->
          <div v-else-if="products.length > 0" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>

          <!-- No Products -->
          <div v-else class="text-center py-20">
            <svg class="w-24 h-24 mx-auto text-primary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p class="text-xl text-primary-600 mb-4">No products found</p>
            <button @click="clearFilters" class="btn-primary">
              Clear Filters
            </button>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-12 flex justify-center gap-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              class="w-10 h-10 rounded-lg font-medium transition-colors"
              :class="
                page === currentPage
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              "
            >
              {{ page }}
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopPage',

  data() {
    return {
      products: [],
      totalProducts: 0,
      totalPages: 1,
      currentPage: 1,
      loading: true,
      showMobileFilters: false,
      filters: {
        category: '',
        subcategory: '',
        minPrice: null,
        maxPrice: null,
        minRating: null,
        inStock: false,
        sort: '',
        search: ''
      }
    };
  },

  computed: {
    pageTitle() {
      if (this.filters.category === 'kitchen-appliances') {
        return 'Kitchen Appliances';
      } else if (this.filters.category === 'home-decor') {
        return 'Home Decor';
      } else if (this.filters.search) {
        return `Search Results for "${this.filters.search}"`;
      }
      return 'All Products';
    }
  },

  watch: {
    filters: {
      handler() {
        this.currentPage = 1;
        this.fetchProducts();
      },
      deep: true
    },
    currentPage() {
      this.fetchProducts();
    },
    '$route.params.category': {
      immediate: true,
      handler(newCategory) {
        if (newCategory) {
          this.filters.category = newCategory;
        }
      }
    },
    '$route.query.search': {
      immediate: true,
      handler(newSearch) {
        if (newSearch) {
          this.filters.search = newSearch;
        }
      }
    }
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      try {
        this.loading = true;

        const params = {
          page: this.currentPage,
          limit: 12
        };

        if (this.filters.category) params.category = this.filters.category;
        if (this.filters.subcategory) params.subcategory = this.filters.subcategory;
        if (this.filters.minPrice) params.minPrice = this.filters.minPrice;
        if (this.filters.maxPrice) params.maxPrice = this.filters.maxPrice;
        if (this.filters.minRating) params.minRating = this.filters.minRating;
        if (this.filters.inStock) params.inStock = 'true';
        if (this.filters.sort) params.sort = this.filters.sort;
        if (this.filters.search) params.search = this.filters.search;

        const data = await $fetch('/api/products', { params });

        this.products = data.products;
        this.totalProducts = data.total;
        this.totalPages = data.totalPages;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    clearFilters() {
      this.filters = {
        category: '',
        subcategory: '',
        minPrice: null,
        maxPrice: null,
        minRating: null,
        inStock: false,
        sort: '',
        search: ''
      };
    }
  }
};
</script>
