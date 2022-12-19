<template>
<span >
  <button @click="toLogin">登陆界面</button>
  <button @click="toHome">首页</button>
  <button @click="toSearch" >搜索</button>
</span>
</template>

<script setup lang="ts">
import router from "../router";

function toHome(){
  router.push('/home')
}
function toSearch(){
  router.push('/search')
}
function toLogin(){
  router.push('/login')
}

</script>

<style scoped>

</style>