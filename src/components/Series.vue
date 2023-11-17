<!-- LISTA SERIE-TV-->

<template>
    <section class="flex">
      <div class="card" 
          v-for="item in list2"
          :key="item.id"
      >
        <CardSeries 
            :poster='item.poster_path'
            :name='item.name'
            :originalName='item.original_name'
            :language='item.original_language'
            :vote='item.vote_average'
            :overview='item.overview'
        />
      </div>
  </section>
  </template>
  
  
  
  <script>
import CardSeries from '../components/CardSeries.vue'
  export default {
      name: 'SeriesList',
      components: {
        CardSeries,
      },
      props: {
          list2: Array,
      }
  }
  </script>
  
  <style scope lang="scss">
     .flex{
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
     }
  </style>