<!-- LISTA FILM -->
<template>
    <section class="flex">
      <div class="card" 
           v-for="item in list1"
           :key="item.id"
      >
        <Card 
             :poster='item.poster_path'
             :title='item.title'
             :originalTitle='item.original_title'
             :language='item.original_language'
             :vote='item.vote_average'
             :overview='item.overview'
        />
      </div>
    </section>
    </template>
    
    <script>
    import Card from './Card.vue'
    
    export default {
        name: 'CardList',
        components: {
          Card,
        },
        props: {
            list1: Array,
        },
        methods: {
          
        }
    }
    </script>
    
    <style lang='scss'>
       .flex{
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         .card{
           margin: 20px;
         }
       }
    </style>
    