<template >
<span>
  <input v-model="newTodo" placeholder="输入todo">
  <button @click="addTodo">添加</button>
</span>
  <ul>
    <li v-for="list in lists">

      <List v-if="!list.onEdit" :ctx="list.ctx" :done="list.done" :id="list.id" :on-edit="list.onEdit" @del="delet(list.id)" @haveDone="list.done = !list.done" @edit="list.onEdit = !list.onEdit"></LIST>
      <template v-else>
        <input v-model="list.ctx">
        <button @click="list.onEdit=!list.onEdit">完成编辑</button>
      </template>

    </li>
  </ul>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import listStore from "../stores/listStore";
import List from "./list.vue";
const newTodo = ref<string>("")
let id = 0
const piniaList = listStore()
const lists = ref<any>([
  {id: id++ , ctx: "list2" , done: false , onEdit: false},
  {id: id++ , ctx: "list1" , done: false , onEdit: false},
  {id: id++ , ctx: "list3" , done: false , onEdit: false},
])
const watchPinia = ref<Array<{
  'ctx': string,
  'onEdit': boolean,
  'done': boolean,
  'id': number
}>>(piniaList.lists);



function addTodo()
{
  lists.value.push({id: id++ , ctx: newTodo.value , done: false , onEdit: false});
  newTodo.value = "";
  lists.value = piniaList.lists;
}
function delet(toId: number)
{
  lists.value = piniaList.lists;

}

lists.value = piniaList.lists;


function newPiniaList(){
    piniaList.setListStorge(lists.value)
}
onMounted(() => {
  newPiniaList();
})
watch((lists),() =>{
  newPiniaList();
})

</script>

<style scoped>

</style>