import {defineStore} from "pinia";
import {ref} from "vue";

const testPinia = defineStore("test",() =>{
  const name = ref("hello")
  const setName = ( value: string) => {
    name.value = value;
  }
  return {
    name,
    setName
  }
})

export default testPinia