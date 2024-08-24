<template>
  <setup />
  <hr />
  <hr />
  <router />
  <hr />
  <hr />
  <vuex />
</template>

<script>
import router from '@/router'
import vuex from '@/vuex'
import setup from '@/setup'
export default {
  name: 'App',
  components: { router, vuex, setup },
}
</script>
