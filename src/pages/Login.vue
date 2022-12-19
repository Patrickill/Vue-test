<script setup lang="ts">
import {  onMounted, ref } from "vue";
import loginAPI from "../apis/login";

import router from "../router";




const isLoginSuccess = ref(false);
const username = ref("");
const password = ref("");

const checkSession = async () => {
  const res = await loginAPI({
     "pwd": password.value,
      "account": username.value
  });
  console.log("checkSession", res);
}

// const autoLogin = async () => {
//   const res = await checkSession();
//   if (res.data.code === "200") {
//     console.log("自动登录成功");
//     isLoginSuccess.value = true;
//     await router.push("home");
//   } else {
//     console.log("自动登录失败");
//   }
// }

const onClick = async () => {
  alert("1");
  const res = await loginAPI({
    account: username.value,
    pwd: password.value
  });
  if (res.data.msg === "ojbk") {
    alert("登录成功");
    isLoginSuccess.value = true;
    await router.push("home");
  } else {
    alert("登录失败");
  }
}

// onMounted(() => {
//   autoLogin();
// })

</script>

<template>
  <div>
    <label for="username">Username</label>
    <input v-model="username" id="username" />
  </div>

  <div>
    <label for="password">Password</label>
    <input v-model="password" id="password" />
  </div>

  <button @click="onClick">登陆</button>
  <RouterView></RouterView>
</template>