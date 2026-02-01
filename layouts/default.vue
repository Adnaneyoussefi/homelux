<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
    <CartSidebar />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
};
</script>
