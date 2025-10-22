<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import type { Product } from "../types";
import { useCartStore } from "../stores/cart";
import { fetchProducts } from "../services/productService";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

const products = ref<Product[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

const cart = useCartStore();
const { totalItems, totalPrice } = storeToRefs(cart);

onMounted(async () => {
  loading.value = true;
  try {
    products.value = await fetchProducts();
  } catch (e) {
    error.value = "加载商品失败，请稍后重试";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="shop">
    <h2>🛍️ My Fruit Shop</h2>
    <div v-if="loading">Loading products…</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
      />
    </div>
    <hr />
    <div class="cart-summary">
      <p>Total items: {{ totalItems }}</p>
      <p>Total price: ${{ totalPrice.toFixed(2) }}</p>
      <button @click="cart.clearCart()">Clear Cart</button>
    </div>
  </div>
</template>

<style scoped>
.shop {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
}
.cart-summary {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
button {
  background: #d32f2f;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #b71c1c;
}
</style>
