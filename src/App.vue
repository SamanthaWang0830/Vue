<script lang="ts" setup>
import { computed, ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import type { Task } from './types';
import TaskList from './components/TaskList.vue';


const tasks=ref<Task[]>([])

function addTask(newTask: string){
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTask,
    done: false
  })
}

function toggleDown(id: string){
  const task = tasks.value.find((task) => task.id === id);
  if(task){
    task.done= !task.done
  }
}
/* only re-run when its dependency change (tasks) */
const totalDone= computed(()=>tasks.value.reduce((total, task)=> task.done? total+1: total, 0))
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <!-- if this component emit the addTask event, then call the function -->
    <TaskForm @add-task="addTask"/>
    <h3 v-if="! tasks.length">Add a task to get started</h3>
    <h3 v-else>{{ totalDone }} / {{ tasks.length }} tasks completed</h3>
    <TaskList :tasks @toggle-done="toggleDown"/>
  </main>
  
</template>

<style>
main{
  max-width: 800px;
  margin: 1rem auto;
} 
.button-container{
  display: flex;
  justify-content: end;
}
</style>