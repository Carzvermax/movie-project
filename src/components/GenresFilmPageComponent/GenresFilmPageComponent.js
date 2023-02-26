import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MovieCard} from "../../components";
import css from '../../components/MoviesPageComponent/MoviesPageComponent.module.css';
import Pagination from "../Pagination/Pagination";

const GenresFilmPageComponent = () => {
    const genreId = localStorage.getItem('genreId');
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');
    const {moviesWithGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {total_pages} = moviesWithGenres;

    useEffect(() => {
        dispatch(moviesActions.getAllWithGenres({page, genreId}));
    }, [dispatch, page, genreId]);

    return (
        <div className={css.container}>
            <div className={css.movies}>
                {!!moviesWithGenres.length &&
                    <div className={css.moviesList}>{moviesWithGenres.map(film => <MovieCard key={film.id} film={film}/>)}</div>}
            </div>
            <div>
                <Pagination query={query} setQuery={setQuery} total_pages={total_pages}/>
            </div>
        </div>
    );
};

export {GenresFilmPageComponent};