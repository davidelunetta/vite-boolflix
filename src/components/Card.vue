<!-- MOVIE CARD -->
<template>
  <section class="box" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="img-box">
      <img
        class="poster"
        v-if="poster"
        :src="`https://image.tmdb.org/t/p/w342${poster}`"
        :alt="title"
      />
      <img
        class="poster"
        v-else
        src="https://www.altavod.com/assets/images/poster-placeholder.png"
        :alt="title"
      />
    </div>
    <div class="list-box" :class="{ active: hover }">
      <ul>
        <li>
          <h3>Titolo: {{ title }}</h3>
        </li>
        <li>Titolo Originale: {{ originalTitle }}</li>
        <li>
          <img
            v-if="isFlag"
            :src="`../public/images/${language}.png`"
            :alt="language"
          />
          <span v-else>{{ language }}</span>
        </li>
        <li>
          <img
            v-for="index in Math.min(Math.round(vote / 2), 5)"
            :key="index"
            src="../assets/img/star4.png"
            alt="star"
          />
        </li>
        <li class="over">
          <div class="overflow-scroll">Descrizione: {{ overview }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "Card",
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    overview: String,
  },
  data() {
    return {
      availableFlags: ["it", "en", "es", "ja"],
      hover: false,
    };
  },
  computed: {
    isFlag() {
      return this.availableFlags.includes(this.language);
    },
  },
};
</script>

<style scope lang="scss">
@import "../assets/style/main.scss";
</style>
