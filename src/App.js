import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MainLayout} from "./layouts";
import {GenresFilmPage, MovieDetailsPage, MoviesPage, SearchFilmPage} from "./pages";
import {genreActions} from "./redux";

const App = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    if (genres !== []) {
        localStorage.setItem('Genres', JSON.stringify(genres));
    }
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route exact path={'/movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'/genre-movies'} element={<GenresFilmPage/>}/>
                <Route path={'/search-movies'} element={<SearchFilmPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};