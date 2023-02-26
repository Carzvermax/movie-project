import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesServices} from "../../services";

const initialState = {
    movies: [],
    trends: [],
    details: null,
    images: [],
    moviesWithGenres: [],
    moviesByKeyWords: {},
    trailerPath: null
}

const getAll = createAsyncThunk('moviesSlice/getAll',
    async ({page, genre_id}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getAll(page);
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data)
        }
    })

const getAllWithGenres = createAsyncThunk('moviesSlice/getAllWithGenres',
    async ({page, genreId}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getAllWithGenres(page, genreId);
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    })

const getAllByKeyWord = createAsyncThunk('moviesSlice/getAllWithKeyWord',
    async ({page, keywords}, thunkAPI) => {
        try {
            const {data: {results, total_pages}} = await moviesServices.getAllByKeyword(page, keywords);
            return {results, total_pages}
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });

const getTrends = createAsyncThunk('moviesSlice/getTrends',
    async (_, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getTodayTrends();
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });
const getById = createAsyncThunk('moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesServices.getById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });
const getImages = createAsyncThunk('moviesSlice/getImages',
    async ({id}, thunkAPI) => {
        try {
            const {data: {backdrops}} = await moviesServices.getImages(id)
            return backdrops.slice(0, 5);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    })

const getTrailer = createAsyncThunk('moviesSlice/getTrailer',
    async ({id}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getVideos(id);

            return results.filter(value => value.type === 'Trailer')[0].key;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(getTrends.fulfilled, (state, action) => {
            state.trends = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.details = action.payload;
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.images = action.payload;
        })
        .addCase(getAllWithGenres.fulfilled, (state, action) => {
            state.moviesWithGenres = action.payload;
        })
        .addCase(getAllByKeyWord.fulfilled, (state, action) => {
            state.moviesByKeyWords = action.payload;
        })
        .addCase(getTrailer.fulfilled, (state, action) => {
            state.trailerPath = action.payload;
        })
        .addCase(getTrailer.rejected, state => {
            state.trailerPath = null;
        })
})

const {reducer: movieReducer} = moviesSlice;

const moviesActions = {
    getAll,
    getTrends,
    getById,
    getImages,
    getAllWithGenres,
    getAllByKeyWord,
    getTrailer,

}

export {
    moviesActions,
    moviesSlice,
    movieReducer
}