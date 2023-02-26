import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import {GenresLinksList} from "../../components";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <GenresLinksList/>
            <Outlet/>
        </>
    );
};

export {MainLayout};