<script setup lang="ts">
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const props= defineProps<{
    id: string
    name: string
    price: number
}>()

const handleAdd=()=>{
    cart.addToCart({
        id: props.id,
        name: props.name,
        price: props.price
    })
}
</script>

<template>
<div class="product-card">
    <h3>{{ name }}</h3>
    <p>Price: ${{ price }}</p>
    <button @click="handleAdd">Add</button>
</div>
</template>

<!-- scoped 让当前组件的样式只作用在当前组件内部 -->
<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 180px;
  text-align: center;
}
button {
  margin-top: 8px;
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #2e3a8c;
}
</style>