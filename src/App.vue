<script lang="ts" setup>
import { computed, ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import type { Task, TaskFilter } from './types';
import TaskList from './components/TaskList.vue';
import FilterButton from './components/FilterButton.vue';
import Calulator from './components/Calulator.vue';
import Inputs from './components/Inputs.vue';


const tasks=ref<Task[]>([])
const filter= ref<TaskFilter>("all")

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

function removeTask(id: string){
  const taskIndex= tasks.value.findIndex(task=> task.id===id)
  if(taskIndex!==-1){
    tasks.value.splice(taskIndex, 1) // remove the task at that index, and remove 1 of them
  }
}

function setFilter(value: TaskFilter){
  filter.value= value
}


/* only re-run when its dependency change (tasks) */
const totalDone= computed(()=>tasks.value.reduce((total, task)=> task.done? total+1: total, 0))

const filteredTasks= computed(()=>{
  if(filter.value=="all"){
    return tasks.value
  }else if(filter.value=='done'){
    return tasks.value.filter(task=> task.done)
  }else if(filter.value= 'todo'){
    return tasks.value.filter(task=> !task.done)
  }else{
    return tasks.value
  }
})
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <!-- if this component emit the addTask event, then call the function -->
    <TaskForm @add-task="addTask"/>
    <h3 v-if="! tasks.length">Add a task to get started</h3>
    <h3 v-else>{{ totalDone }} / {{ tasks.length }} tasks completed</h3>

    <div class="button-container" v-if="tasks.length">
      <FilterButton
        :currentFilter="filter"
        filter="all"
        @set-filter="setFilter"
      />
      <FilterButton
        :currentFilter="filter"
        filter="done"
        @set-filter="setFilter"
      />
      <FilterButton
        :currentFilter="filter"
        filter="todo"
        @set-filter="setFilter"
      />
    </div>

    <TaskList :tasks="filteredTasks" @toggle-done="toggleDown" @remove-task="removeTask"/>
  </main>
  <Calulator/>
  <Inputs/>
</template>

<style>
main{
  max-width: 800px;
  margin: 1rem auto;
} 
.button-container {
  display: flex;
  justify-content: end;
  gap: 0.5rem;
}
</style>