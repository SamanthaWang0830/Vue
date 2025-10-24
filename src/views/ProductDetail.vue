<script setup lang="ts">
import { useRoute } from 'vue-router';

const route= useRoute()

const productId= route.params.id
</script>

<template>
  <div>
    <h2>商品详情页</h2>
    <p>商品 ID: {{ productId }}</p>
  </div>
</template>