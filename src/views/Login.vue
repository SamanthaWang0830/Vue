<script setup lang="ts">
import { ref, reactive, computed } from "vue";
// ref() 单个值  .value
// reactive() 对象或数组 直接访问
const form = reactive({
  username: "",
  email: "",
  password: "",
});
const showPwd = ref<boolean>(false);
const submitting = ref<boolean>(false);
const errors = reactive({
  username: "",
  email: "",
  password: "",
});

/* 
当你点进一个输入框，它获得焦点（focus）；
当你点到别的地方或按 Tab 离开，它失去焦点（blur）
*/
const touched = reactive<{
  username: boolean;
  email: boolean;
  password: boolean;
}>({
  username: false,
  email: false,
  password: false,
});

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validate = () => {
  errors.username = form.username ? "" : "Username is required.";
  errors.email = form.email
    ? emailRe.test(form.email)
      ? ""
      : "Invalid email address."
    : "Email is required.";
  errors.password =
    form.password.length >= 6 ? "" : "Password must be at least 6 characters.";
};

const onSubmit = () => {
  validate();
  touched.username = touched.email = touched.password = true
  if (!isValid.value) return;
  try {
    console.log(form);
  } catch (error) {
  } finally {
    submitting.value = false;
  }
};

const isValid = computed(() => {
  validate();
  return !errors.username && !errors.email && !errors.password;
});

const touch = (inputField: "username" | "password" | "email") => {
  touched[inputField] = true;
  validate();
};

const isError=(inputField: "username" | "password" | "email")=>{
    return touched[inputField] && errors[inputField]
}
</script>

<template>
  <h2>Login</h2>
  <h3>:   v-bind   单向绑定属性   JS → 模板</h3>
  <h3>@   v-on     绑定事件      模板 → JS</h3>
  <h3>v-model      双向绑定      JS ⇄ 模板</h3>
  <form class="form" @submit.prevent="onSubmit">
    <label for="username">Username</label>
    <input
      type="text"
      name="username"
      id="username"
      required
      v-model="form.username"
      @blur="touch('username')"
      :class="{invalid: isError('username')}"
    />
    <p v-if="isError('username')" class="error"> {{errors.username}}</p>

    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      v-model="form.email"
      @blur="touch('email')" 
      :class="{invalid: isError('email')}"
    />
    <p v-if="isError('email')" class="error"> {{errors.email}}</p>

    <label for="password">Password</label>
    <div class="password-row">
      <input
        :type="showPwd? 'text' : 'password'"
        name="password"
        id="password"
        required
        v-model="form.password"
        @blur="touch('password')"
        :class="{invalid: isError('password')}"
      />
      <button @click="showPwd = !showPwd" type="button">
        {{ showPwd ? "Hide" : "Show" }}
      </button>
    </div>
    <p v-if="isError('password')" class="error"> {{errors.password}}</p>

    <button type="submit" :disabled="submitting || !isValid">
      {{ submitting ? "Signing in…" : "Sign in" }}
    </button>
  </form>
</template>


<style>
.form {
  width: 320px;
  margin: 24px auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  background: #fff;
  display: grid;
  gap: 10px;
}
h2 { margin: 0 0 6px; }
label { font-size: 14px; color: #444; }
input {
  padding: 10px 12px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  outline: none;
}
input.invalid { border-color: #e53935; }
input.invalid:focus{
    border-color: #e53935;
    box-shadow: 0 0 0 3px rgba(229,57,53,.18);
    outline: none;
}
.error { color: #e53935; font-size: 12px; margin: -4px 0 4px; }
.password-row { display: flex; gap: 8px; align-items: center; }
.password-row input { flex: 1; }
button[type='submit']{
    margin-top: 6px;
    padding: 10px 12px;
    border: none;
    border-radius: 8px;
    background: #3f51b5;
    color: #fff;
    cursor: pointer;
}
button[disabled]{
    opacity: .6; 
    cursor: not-allowed;
}
button.ghost {
  background: transparent;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}
</style>
