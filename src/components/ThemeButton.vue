<script setup lang="ts">
import { inject } from 'vue';
// 注入祖先提供的 theme
const theme= inject<'light' | 'dark'>('theme', 'light') // 如果没有 provide，就用 'light'
// 定义子传父事件
const emit= defineEmits<{
    // 事件名 没参数
    // 有参数  (e: 'toggle', payload: T): void
    (e:'toggle' ): void
}>()
</script>

<template>
    <button @click="emit('toggle')">Switch to {{theme==='light'? 'dark' : 'light'}} mode</button>
</template>


<style scoped>
button {
  margin-top: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  background-color: #4caf50;
  color: white;
  transition: 0.3s;
}
button:hover {
  background-color: #388e3c;
}
</style>