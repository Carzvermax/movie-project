const baseURL = 'https://api.themoviedb.org/3';
const postersURL = 'https://image.tmdb.org/t/p/original';

const discover = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';
const trending = '/trending/movie/day';
const images = '/images';
const search = '/search';

const urls = {
    discover: {
        discover
    },
    trending: {
        trending
    },
    genres: {
        genres
    },
    movie: {
        movie
    },
    images: {
        images
    },
    search: {
        search: search + movie
    }
}

export {
    baseURL,
    postersURL,
    urls
}