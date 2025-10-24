<template>
    <div>
        <h2>用户中心</h2>
        <nav>
            <router-link to="/user/profile" class="link">profile</router-link>
            <router-link to="/user/settings" class="link">settings</router-link>
        </nav>

        <hr/>

        <!-- 子路由页面会渲染在这里 -->
        <router-view/>
    </div>
</template>

<style scoped>
.link{
  text-decoration: none;
  color: inherit;
}
</style>