<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const props= defineProps<{
    isOpen: boolean
    title? : string
    closeOnClickOverlay? : boolean
}>()
const emit= defineEmits<{
    (e:'update:isOpen', value: boolean): void
}>()


const close=()=>{
    emit('update:isOpen', false)
}

const closeOnOverlay=()=>{
    if(props.closeOnClickOverlay){
        close()
    }
}
const handleKeyDown=(e: KeyboardEvent)=>{
    if(e.key==='Escape'){
        close()
    }
}


/* 
相当于
useEffect(() => {
  window.addEventListener('keydown', handleKeydown)
  return () => window.removeEventListener('keydown', handleKeydown)
}, [])
*/
// 生命周期开始
onMounted(()=> window.addEventListener('keydown', handleKeyDown))
// 生命周期结束
onUnmounted(()=> window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
<div class="modal-overlay" @click="closeOnOverlay" v-if="isOpen">
    <div class="modal-content">
        <header>
            <!-- 
            具名插槽
            需要 <template #header>内容</template>
            -->
            <!-- 
            如果父组件提供了 template #header 的内容，就用父组件的内容；
            否则就显示 <h3>{{ title }}</h3> 作为默认内容。
            -->
            <slot name="header">
                <h3>{{title}}</h3>
            </slot>
            <button class="close-btn" @click="close">X</button>
        </header>


        <section class="modal-body">
            <!-- 
            一个 默认插槽，也叫 “匿名插槽”。
            它代表组件中 主体部分可以被父组件直接填充
            -->
            <slot>默认内容</slot>
        </section>

        <footer class="modal-footer">
            <slot name="footer">
                <button @click="close">close</button>
            </slot>
      </footer>
    </div>
</div>
</template>



<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.25s;
  z-index: 999;
}

.modal-content {
  background: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.25s;
}

.modal-header,
.modal-footer {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-footer {
  border-top: 1px solid #eee;
}

.modal-body {
  padding: 16px;
}

.close-btn {
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes scaleIn {
  from { transform: scale(0.9) }
  to { transform: scale(1) }
}
</style>