import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useTheme} from "../../hooks/useTheme";
import {Search} from "../Search/Search";

const Header = () => {

    const {setTheme} = useTheme();
    const navigate = useNavigate();

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <img src={'https://cdn-icons-png.flaticon.com/512/195/195492.png'} className={css.logo_img} onClick={() => navigate('movies?page=1')}
                 alt={'logo'}/>
            </div>
            <div>
            <Search/>
        </div>
            <div className={css.themesSwitcher}>
                <button className={css.button} onClick={() => setTheme('light')}>Light Theme</button>
                <button className={css.button} onClick={() => setTheme('dark')}>Dark Theme</button>
            </div>
            <div>
                <img className={css.photo} src={'https://mspgh.unimelb.edu.au/__data/assets/image/0011/3576098/Placeholder.jpg'} alt={'UserICon'}/>
            </div>
        </div>
    );
};

export {Header};