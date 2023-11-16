<template>
 <div class="app">
    <Header @search="performSearch"/>
    <main>
      <section class="film">
        <h2>Film</h2>
      <CardList  
      :list1="movieList"
      />
      </section>
      <section class="serie">
        <h2>Serie TV</h2>
        <SeriesList  
        :list2="seriesList"
      />
    </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { store }  from '../src/assets/data/store.js';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
        Header,
      },
  data() {
    return{
      store,
      movieList: [],
      seriesList: []
    }
  },
  methods: {
    performSearch(searchText) {
      console.log(searchText);

      if (searchText !== '') {
         axios
             .get('https://api.themoviedb.org/3/search/movie?', {
                  params: {
                    api_key:'6f233f305ac6d79febf51ed8c1c54a44',
                    query: searchText,
                    language:'it-IT',
                },
             })
             .then(result => {
               this.movieList = result.data.results;
             })
             .catch(err => console.log(err));

          axios
             .get('https://api.themoviedb.org/3/search/tv?', {
                  params: {
                    api_key:'6f233f305ac6d79febf51ed8c1c54a44',
                    query: searchText,
                    language:'it-IT',
                },
             })
             .then(result => {
               this.seriesList = result.data.results;
             })
             .catch(err => console.log(err));
      }
    },
  }
}



  // created() {
  //   const url = store.apiUrl + this.store.endPoint

  //   axios.get(url).then((res) => {
  //     console.log(res.data.result)
  //   })
  // }
  // }

</script>

<style lang="scss" scoped>

</style>