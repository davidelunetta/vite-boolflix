<template>
  <div>
    Ciao
  </div>
</template>

<script>
import axios from 'axios';
import  store  from '../src/assets/data/store.js';
export default {
  name: 'App',
  data() {
    return{
      store,
    }
  },
  created() {
    const url = store.apiUrl + this.store.endPoint

    axios.get(url).then((res) => {
      console.log(res.data.result)
    })
  }
  }

</script>

<style lang="scss" scoped>

</style>