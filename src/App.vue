<template>
  <div class="app">
    <Header @search="performSearch" />
    <main>
      <section class="film">
        <h2>Film</h2>
        <CardList :list1="movieList" />
      </section>
      <section class="serie">
        <h2>Serie TV</h2>
        <Series :list2="seriesList" />
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../src/assets/data/store.js";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import Series from "./components/Series.vue";
export const searchText = "your_search_text_here";
export default {
  name: "App",
  components: {
    Header,
    CardList,
    Series,
  },
  data() {
    return {
      store,
      movieList: [],
      seriesList: [],
    };
  },
  methods: {
    performSearch(searchText) {
      if (searchText !== "") {
        store.params.query = searchText;
        axios
          .get(store.apiUrl + store.endpoint.movies, {
            params: store.params,
          })
          .then((result) => {
            this.movieList = result.data.results;
          })
          .catch((err) => console.log(err));

        axios
          .get(store.apiUrl + store.endpoint.series, {
            params: store.params,
          })
          .then((result) => {
            this.seriesList = result.data.results;
          });
        // .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
