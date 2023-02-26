import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieCard} from "../../components";
import css from '../../components/MoviesPageComponent/MoviesPageComponent.module.css';
import Pagination from "../Pagination/Pagination";

const SearchFilmPageComponent = () => {

    const {moviesByKeyWords: {results: moviesByKeyWords, total_pages}} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const keywords = localStorage.getItem('keywords') || null;
    const [query, setQuery] = useSearchParams({page: '1'});
    const searchMovies= moviesByKeyWords ? moviesByKeyWords : [];
    let page = query.get('page');

    useEffect(() => {
        if (keywords) {
            dispatch(moviesActions.getAllByKeyWord({page, keywords}));
        }
    }, [page, keywords, dispatch]);

    return (
        <div className={css.container}>
            <div className={css.movies}>
            {!!searchMovies.length &&
                <div className={css.moviesList}>{searchMovies.map(film => <MovieCard key={film.id} film={film}/>)}</div>}
            </div>
                <div>
                    <Pagination query={query} setQuery={setQuery} total_pages={total_pages}/>
            </div>
        </div>
    );
};

export {SearchFilmPageComponent};