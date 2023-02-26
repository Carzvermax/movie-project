import axios from "axios";

import {baseURL} from "../configs";

const apiServices = axios.create({baseURL});

apiServices.interceptors.request.use((config)=>{
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDhjZWVmMDk2ZTkxMDE3NTI5MTEyMTAwZDc5YThiZSIsInN1YiI6IjYzZWU3ZjZkNmFhOGUwMDA4NDgwNDUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.grtU_HphVKxsLWs80xbkPyUEFiuQUZqzXfOmhiar3AA';
    config.headers.Authorization = `Bearer ${access}`;
    return config;
})

export {
    apiServices
}