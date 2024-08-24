<template>
  <h2>Router</h2>
  <div id="router">
    <router-link to="/">Home</router-link>
    <br />
    <router-link to="/about">About</router-link>
    <br />
    <router-link to="/api/我是params数据">Api-路由传参params</router-link>
    <br />
    <router-link :to="{ path: '/api', query: { name: '我是query数据' } }">
      Api-query
    </router-link>
    <br />
    <h2>命名视图</h2>
    <router-link to="/nameLeft">left</router-link>
    ——————
    <router-link to="/nameRight">Right</router-link>
    <br />
  </div>
  <div id="show">
    <router-view />
    <router-view name="left" />
    <router-view name="main" />
    <router-view name="change" />
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style scoped></style>
