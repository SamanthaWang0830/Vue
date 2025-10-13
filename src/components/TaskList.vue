<script lang="ts" setup>
import type { Task } from '../types';
const props= defineProps<{
    tasks: Task[]
}>()

const emit= defineEmits<{
    toggleDone:[id: string]
}>()
</script>

<template>
    <div class="task-list">
        <article v-for="task in props.tasks" :key="task.id"> <!-- want "task.id" to be as an expression, use : -->
            <label for="">
                
                <input type="checkbox" @input="emit('toggleDone', task.id)" :checked="task.done">
                
                <span :class="{done: task.done}">
                    {{ task.title }}
                </span>
            </label>
        
        </article>
    </div>
    
</template>

<style>
.task-list{
    margin-top: 1rem;
}
.done{
    text-decoration: line-through;
}
</style>