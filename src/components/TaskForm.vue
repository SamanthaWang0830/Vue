<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{ addTask: [newTask: string] }>();
const newTask = ref("");
const error = ref("");

function formSubmit() {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value.trim());
    newTask.value = "";
  } else {
    error.value = "task can not be empty";
  }
}
</script>

<template>
  <form @submit.prevent="formSubmit">
    <label
      >New Task
      <input
        name="newTask"
        v-model="newTask"
        :aria-invalid="!!error || undefined"
        @input="error= ''"
      />
      <small v-if="error" id="invalid-helper">
        {{ error }}
      </small>
    </label>
    <div class="button-container">
      <button>Add</button>
    </div>
  </form>
</template>
