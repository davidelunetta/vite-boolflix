<template>
  <header>
    <div class="title-section">
      <h2>Boolflix</h2>
    </div>
    <div class="input-section d-flex">
      <input
        type="text"
        class="form-control outline-none"
        placeholder="Search a movie"
        v-model.trim="searchText"
        @keyup.enter="$emit('search', searchText)"
      />
      <button class="btn btn-danger" @click="$emit('search', searchText)">
        Search
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/main.scss";
</style>
