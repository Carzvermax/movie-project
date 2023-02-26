import {apiServices} from "./apiServices";
import {urls} from "../configs";

const moviesServices = {
    getAll: (page = 1) => apiServices.get(urls.discover.discover, {params: {page}}),
    getAllWithGenres: (page = 1, with_genres = null) => {
        const genreId = with_genres ? with_genres : '';
        return apiServices.get(`${urls.discover.discover}?page=${page}&with_genres=${genreId}`)
    },
    getAllByKeyword: (page = 1, keywords = null) => {
        const keyWords = keywords ? keywords : '';
        return apiServices.get(`${urls.search.search}?query=${keyWords}&page=${page}`)
    },
    getTodayTrends: () => apiServices.get(urls.trending.trending),
    getById: (id) => apiServices.get(`${urls.movie.movie}/${id}`),
    getImages: (id) => apiServices.get(`${urls.movie.movie}/${id}/${urls.images.images}`),
    getVideos: (id) => apiServices.get(`${urls.movie.movie}/${id}/videos`)
}


export {
    moviesServices
}
