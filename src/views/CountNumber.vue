<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
import ThemeProvider from "../components/ThemeProvider.vue";
const counter = useCounterStore();
</script>

<template>
  <ThemeProvider>
    <div>
      <div>Hint Like If you like</div>
      <button @click="counter.increment()">+</button>
      <span>{{ counter.count }}</span>
      <button @click="counter.decrement()">-</button>
    </div>
  </ThemeProvider>
</template>

<style></style>
