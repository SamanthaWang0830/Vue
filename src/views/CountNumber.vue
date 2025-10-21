<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const counter= useCounterStore()
</script>


<template>
<div>
    <h2>Hint Like If you like</h2>
    <button @click="counter.increment">+</button>
    <span>{{ counter.count }}</span>
    <button @click="counter.decrement">-</button>
</div>
</template>



<style>
</style>