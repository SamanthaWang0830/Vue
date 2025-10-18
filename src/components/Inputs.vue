<script setup lang="ts">
import { ref } from 'vue';
const inputValue1= ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')

const handleInput2=(event:Event)=>{
    const target= event.target as HTMLInputElement
    inputValue2.value= target.value 
    console.log('实时输入:', inputValue2.value)
}

const handleInput3=(event: Event)=>{
    const target= event.target as HTMLInputElement
    inputValue3.value = target.value
    console.log('失去焦点，最终值:', inputValue3.value)
}
</script>

<template>
    <div>
        <div>
            v-model 是双向绑定，自动同步 input 的值
            <input v-model="inputValue1">
        </div>
        <div>
            @input 在每次输入时触发
            <input :value="inputValue2" @input="handleInput2">
        </div>
        <div>
            @change 只在失去焦点或按 Enter 时触发
            <input :value="inputValue3" @change="handleInput3">
        </div>
    </div>
</template>