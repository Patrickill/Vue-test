import {defineStore} from "pinia";
import {ref} from "vue";

const listStore = defineStore("listsStore", () => {
  let id = 0;
  const lists = ref<Array<{
     'ctx': string,
     'onEdit': boolean,
     'done': boolean,
    'id': number
    }>>([
    {id: id++ , ctx: "list2" , done: false , onEdit: false},
  ])
  const setListStorge = (value: Array<{
    'ctx': string,
    'onEdit': boolean,
    'done': boolean,
    'id': number
  }>) => {
      lists.value = value;
  }
  const deletId = (toid: number) => {
    lists.value = lists.value.filter((li) => li.id !== toid)
  }
  return {
    lists,
    setListStorge,
    deletId
  }
})
export default listStore

