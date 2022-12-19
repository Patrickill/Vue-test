<template>
<input placeholder="输入想搜索的" v-model="req">
<button @click="require">搜索</button>
  <ul>
    <li v-for="list in ans">

      <List v-if="!list.onEdit" :ctx="list.ctx" :done="list.done" :id="list.id" :on-edit="list.onEdit" @del="del" @haveDone="list.done = !list.done" @edit="list.onEdit = !list.onEdit"></LIST>
      <template v-else>
        <input v-model="list.ctx">
        <button @click="list.onEdit=!list.onEdit">完成编辑</button>
      </template>

    </li>
  </ul>
  <button @click="toHome">返回</button>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";
import List from "../components/list.vue"
import listStore from "../stores/listStore";
import router from "../router";

const req = ref<string>("");
const ans = ref<Array<{
  'ctx': string,
  'onEdit': boolean,
  'done': boolean,
  'id': number
}>>()
const piniaList = listStore();
function require(){
  ans.value = piniaList.lists.filter((li) => 
    li.ctx === req.value
  )
}
function toHome(){
  router.push('/home')
}
watch((piniaList.lists), () => {
  ans.value = piniaList.lists.filter((li) =>
    li.ctx === req.value
  )
})

function del(){
  ans.value = piniaList.lists.filter((li) =>
    li.ctx === req.value
  )
}
</script>

<style scoped>

</style>