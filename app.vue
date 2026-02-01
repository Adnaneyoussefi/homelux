<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

export default {
  setup() {
    const cartStore = useCartStore();
    const wishlistStore = useWishlistStore();

    // Load from localStorage on app mount
    onMounted(() => {
      cartStore.loadFromLocalStorage();
      wishlistStore.loadFromLocalStorage();
    });
  }
};
</script>
