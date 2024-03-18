const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export function createImageUrl(filename, size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
