<script lang="ts" setup>
import { useCounterStore } from './stores/counter';
const counter= useCounterStore()
</script>

<template>
<div>
  <nav class="header">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/shop" class="nav-link">Shop</router-link>
    <router-link to="/like" class="nav-link">{{counter.count}} Like(s)</router-link>
    <router-link to="/todo" class="nav-link">Todo</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
    <router-link to="/user" class="nav-link">User</router-link>
  </nav>
  <router-view/>
</div>
</template>


<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: white;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.router-link-active {
  text-decoration: underline;
}
</style>

