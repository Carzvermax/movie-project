import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlice";
import {genreReducer} from "./slices/genresSlice";

let rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}
