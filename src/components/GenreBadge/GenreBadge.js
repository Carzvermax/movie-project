import React from 'react';
import {Link} from "react-router-dom";

import css from './Badge.module.css';

const GenreBadge = ({ids}) => {
        const genres = JSON.parse(localStorage.getItem('Genres')) || [];

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '0px'}}>
            {genres.filter(val => ids.includes(val.id)).map(val => {
                return <div key={val.id} className={css.badge_bg}>
                    <Link to={'/genre-movies'} className={css.badge_text} onClick={()=>localStorage.setItem('genreId', val.id)}>{val.name}</Link>
                </div>
            })}
        </div>
    );
}

export {GenreBadge};