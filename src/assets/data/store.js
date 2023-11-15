import { reactive } from "vue";
export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    endpoint: {
        movies: "search/movie",
        series: "search/tv",
    },
    params: {
        api_key: "6f233f305ac6d79febf51ed8c1c54a44",
        query: "a",
    }
    api_key: "6f233f305ac6d79febf51ed8c1c54a44",
    query: "a",

    error:"",
    loading: true,
    movieList: [],
    seriesList: [], 
})