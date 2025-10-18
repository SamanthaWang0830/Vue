<script  lang="ts" setup>
import { ref } from 'vue';

const num= ref<number>(0)

const handleClickReduce=()=>{
    num.value--
}
const handleClickAdd=()=>{
    num.value++
}


</script>

<template>
<div>
    <button @click="handleClickReduce">-</button>
    <span>{{num}}</span>
    <button @click="handleClickAdd">+</button>
</div>

</template>


<style>

</style>