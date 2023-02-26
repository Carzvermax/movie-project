import React from 'react';
import shortid from "shortid";
import StarRatings from "react-star-ratings/build/star-ratings";

import css from './MovieInfo.module.css';
import {postersURL} from "../../configs/urls";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Trailer} from "../Trailer/Trailer";

const MoviesInfo = ({details, images, trailer}) => {
    const {
        id, poster_path, original_title, tagline, release_date, production_countries, genres,
        runtime, overview, production_companies, vote_average
    } = details;

    const companies = production_companies.map((cmp, index) => {
        const sep = index !== production_companies.length - 1 ? ', ' : '';
        return `${cmp.name}${sep}`;
    })
    const countries = production_countries.map((country, index) => {
        const sep = index !== production_countries.length - 1 ? ', ' : '';
        return `${country.name}${sep}`;
    });
    const path = poster_path ? `${postersURL}/${poster_path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    const images_path = postersURL.replace('original', 'w780');

    return (
        details &&
        <div className={css.container}>
            <div className={css.image_data}>
                <div>
                    <img src={path} alt="poster" className={css.poster}/>
                </div>
                <div className={css.data}>
                    <div>
                        <h2 className={css.titles}>Title: </h2>: <span
                        className={css.text}>{original_title}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Slogan: </h2>: <span
                        className={css.text}>"{tagline}"</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Release date: </h2>
                        <span className={css.text}>{release_date}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Country: </h2>
                        <span className={css.text}>
                            {countries}
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Genres: </h2>
                        <span className={css.text}>
                            <GenreBadge ids={genres.map(val => val.id)}/>
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Runtime:</h2>
                        <span className={css.text}>{runtime} min</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Overview: </h2>
                        <span className={css.text}>{overview}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Companies: </h2>
                        <span className={css.text}>
                            {companies}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Star rating: </h2>
                        <div className={css.stars}>
                    <StarRatings name={'rating'} starRatedColor={'rgb(200, 180, 22)'} starDimension={'20px'} starSpacing={'1px'} rating={vote_average} numberOfStars={10} />
                        </div>
                </div>
                </div>
            </div>
            <div className={css.movie_images}>
                {images && images.map((img) => <img key={shortid.generate()} src={`${images_path}/${img.file_path}`} alt="filmPhoto"/>)}
            </div>
            <div className={css.trailer}>{trailer && <Trailer trailer={trailer} id={id}/>}
            </div>
        </div>
    );
}

export {MoviesInfo};