<template>
  <h2>Api</h2>
  <p>路由传参 params：{{ $route.params.abc }}</p>
  <p>路由传参 query：{{ $route.query.name }}</p>
  <p>路由匹配正则表达式 /:pathMatch(.*)：{{ $route.params.pathMatch }}</p>
  <p>路由匹配正则表达式 /user-:afterUser(.*)：{{ $route.params.afterUser }}</p>
</template>

<script>
export default {
  name: 'api',
}
</script>

<style scoped></style>
