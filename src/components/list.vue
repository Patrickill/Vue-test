<template>
  <span :class="{done: props.done}" v-if="props.onEdit">{{props.ctx}}</span>
  <span>
    <button @click="deletid(props.id)">删除</button>
    <button @click="$emit('haveDone')">{{props.done? "撤销已完成":"已完成"}}</button>
    <button @click="$emit('edit')">{{props.onEdit? "编辑":"编辑"}}</button>
  </span>
</template>

<script setup lang="ts">
import listStore from "../stores/listStore";
const props = defineProps({
  'done': Boolean,
  'onEdit': Boolean,
  'ctx': String,
  'id': Number
});
const emit = defineEmits(['del','haveDone','edit'])

const listPinia = listStore();
function deletid(toid: number){
  listPinia.deletId(toid);
  emit('del')
}


</script>

<style scoped>
.done
{
  text-decoration: line-through;
}
</style>