import {apiServices} from "./apiServices";
import {urls} from "../configs";

const genreServices = {
    getAll: ()=> apiServices.get(urls.genres.genres)
}

export {
    genreServices
}