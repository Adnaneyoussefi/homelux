<template>
  <Teleport to="body">
    <div
      v-if="cartStore.isOpen"
      class="fixed inset-0 z-50 overflow-hidden"
      @click.self="cartStore.closeCart()"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/50 transition-opacity"
        @click="cartStore.closeCart()"
      ></div>

      <!-- Sidebar -->
      <div
        class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300"
        :class="cartStore.isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Header -->
        <div class="px-6 py-4 border-b border-primary-200 flex justify-between items-center">
          <h2 class="text-2xl font-display font-bold text-primary-900">
            Shopping Cart
            <span v-if="cartStore.totalItems > 0" class="text-lg text-primary-600">
              ({{ cartStore.totalItems }})
            </span>
          </h2>
          <button
            @click="cartStore.closeCart()"
            class="p-2 hover:bg-primary-100 rounded-full transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto px-6 py-4">
          <div v-if="cartStore.items.length === 0" class="text-center py-12">
            <svg class="w-24 h-24 mx-auto text-primary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p class="text-primary-600 text-lg">Your cart is empty</p>
            <button
              @click="cartStore.closeCart()"
              class="mt-4 btn-primary"
            >
              Continue Shopping
            </button>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in cartStore.items"
              :key="item.id"
              class="flex gap-4 bg-primary-50 p-4 rounded-lg"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div class="flex-1">
                <h3 class="font-semibold text-primary-900">{{ item.name }}</h3>
                <p class="text-primary-700 font-bold mt-1">${{ item.price.toFixed(2) }}</p>
                <div class="flex items-center gap-2 mt-2">
                  <button
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 bg-white border border-primary-300 rounded-md hover:bg-primary-100 transition-colors"
                  >
                    −
                  </button>
                  <span class="w-12 text-center font-semibold">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 bg-white border border-primary-300 rounded-md hover:bg-primary-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                @click="cartStore.removeItem(item.id)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartStore.items.length > 0" class="border-t border-primary-200 px-6 py-4 bg-primary-50">
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-primary-700">
              <span>Subtotal</span>
              <span>${{ cartStore.subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-primary-700">
              <span>Tax (10%)</span>
              <span>${{ cartStore.tax.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold text-primary-900 pt-2 border-t border-primary-200">
              <span>Total</span>
              <span>${{ cartStore.total.toFixed(2) }}</span>
            </div>
          </div>
          <NuxtLink
            to="/checkout"
            @click="cartStore.closeCart()"
            class="block w-full text-center btn-primary"
          >
            Proceed to Checkout
          </NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { useCartStore } from '~/stores/cart';

export default {
  name: 'CartSidebar',

  computed: {
    cartStore() {
      return useCartStore();
    }
  },

  methods: {
    updateQuantity(id, quantity) {
      this.cartStore.updateQuantity(id, quantity);
    }
  }
};
</script>
