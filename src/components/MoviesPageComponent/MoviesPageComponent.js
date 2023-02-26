import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieCard} from "../../components";
import css from './MoviesPageComponent.module.css'
import Pagination from "../Pagination/Pagination";

const MoviesPageComponent = () => {
    let [query, setQuery] = useSearchParams({page: '1', with_genres: null});
    let page = query.get('page');
    let genre_id = query.get('with_genres');
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {total_pages} = movies;

    useEffect(() => {
        dispatch(moviesActions.getAll({page, genre_id}));
    }, [dispatch, page, genre_id]);

    return (
        <div className={css.container}>
            <div className={css.movies}>
                {!!movies.length &&
                    <div className={css.moviesList}>{movies.map(film => <MovieCard key={film.id} film={film}/>)}</div>}
            </div>
            <Pagination query={query} setQuery={setQuery} total_pages={total_pages}/>
        </div>
    );
};

export {MoviesPageComponent};