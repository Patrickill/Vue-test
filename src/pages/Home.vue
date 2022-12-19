<template>
  <h1>This is Home Page</h1>
  <todo-list></todo-list>
  <button @click="turnToSearch">搜索页面</button>
  <nav></nav>
</template>

<script setup lang="ts">
import TodoList from "../components/todoList.vue";
import router from "../router";
import nav from "../components/mynav.vue"
function turnToSearch(){
  router.push('/search');
}
</script>

<style scoped>

</style>