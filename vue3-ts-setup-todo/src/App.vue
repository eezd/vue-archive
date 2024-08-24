<template>
  <div class="app">
    <todo-list :todo-list="todoList" />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent } from 'vue'
import TodoList from 'components/todo/index.vue'
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    TodoList
  },
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.list);

    return { todoList };
  },
});
</script>

<style lang="scss">
.app {
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  select,
  input,
  label,
  button {
    vertical-align: middle;
  }
}
</style>
