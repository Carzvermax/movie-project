import React from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import css from './MovieCard.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {postersURL} from "../../configs/urls";


const MovieCard = ({film}) => {
    const {id, title, vote_average, poster_path, release_date, genre_ids} = film;
    const imgLink = poster_path ? `${postersURL}${poster_path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

    return (
        <div className={css.card}>
            <img src={imgLink} alt="emptyPoster" className={css.poster}/>
            <StarRatings name={'rating'} starRatedColor={'rgb(200, 180, 22)'} starDimension={'20px'} starSpacing={'1px'} rating={vote_average} numberOfStars={10} />
            <p></p>
            <Link to={`/movies/${id}`} state={id}>{title}</Link>
            <p>{release_date}</p>
            <GenreBadge ids={genre_ids}/>
        </div>
    );
};

export {MovieCard};