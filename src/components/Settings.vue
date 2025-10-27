<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const isOpen = ref(false)

</script>

<template>
  <div>
    <h3>用户设置</h3>
    <p>通知：开启</p>
    <!-- 
    :modelValue='isOpen'
    @update:modelValue='isOpen=$event'
    -->
    <button @click="isOpen=true">Open the Modal</button>
    <Modal
      v-model:isOpen="isOpen"
      title="some info"
      :closeOnClickOverlay="true"
    >
      <template #header>
        <h3>hiii nihao</h3>
      </template>

      <p>这是模态框的主体内容，可以放任意 HTML。</p>

      <template #footer>
      </template>
    </Modal>
  </div>
</template>