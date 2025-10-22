<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import ThemeButton from './ThemeButton.vue';

const theme = ref<'light' | 'dark'>('light')
provide('theme', theme)
const bgColor= computed(()=> theme.value==='light'? '#f9f9f9' : '#333')
const textColor = computed(() => (theme.value === 'light' ? '#222' : '#fff'))
const toggleTheme=()=>{
    theme.value= theme.value=='light'? 'dark': 'light'
}
</script>

<template>
    <div class="container" :style="{backgroundColor: bgColor, color: textColor}">
        <ThemeButton @toggle="toggleTheme"/>
        <hr/>
        <!-- 
            <slot name="header" />
            <template #header>
            特定区域内容
        -->
        <slot/>
    </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  transition: background-color 0.3s ease;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>