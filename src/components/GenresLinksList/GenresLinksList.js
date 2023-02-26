import React from 'react';

import {GenreBadge} from "../GenreBadge/GenreBadge";
import css from './GenresLinkList.module.css';

const GenresLinksList = () => {
    const genres = JSON.parse(localStorage.getItem('Genres')) || [];

    return (
        <div className={css.genresContainer}>
            <h3>Select a filter genre:</h3>
            <GenreBadge ids={genres.map(val => val.id)}/>
        </div>
    );
};

export {GenresLinksList};