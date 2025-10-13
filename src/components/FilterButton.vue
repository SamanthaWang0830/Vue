<script lang="ts" setup>
import type { TaskFilter } from '../types';

const props= defineProps<{
    filter: TaskFilter;
    currentFilter: TaskFilter
}>()
const emits= defineEmits<{
    setFilter:[filter: TaskFilter]
}>()
</script>

<template>
<button
    class="secondary"
    :class="{contrast: props.currentFilter== props.filter}"
    @click="emits('setFilter', props.filter)"
>
    {{ props.filter }}
</button>

</template>

<style>
button {
  text-transform: capitalize;
}
</style>