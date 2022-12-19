<script setup lang="ts">
import { RouterView } from "vue-router";
import nav from "./components/mynav.vue"
import TestNav from "../src/components/testNav.vue"
import Mynav from "./components/mynav.vue";
</script>

<template>
 <test-nav></test-nav>
  <mynav></mynav>
  <router-link to="/login">To Login</router-link>
  <router-link to="/search">To Search</router-link>
  <router-link to="/home">To Home</router-link>
 <div id = "app">
   <RouterView></RouterView>
 </div>
  
</template>

<style scoped>
.logo {
  height: 10em;
}
</style>
//This is a test for branch-style development :) 
//I hope it will be very exciting :)