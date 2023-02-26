import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreServices} from "../../services";

const getAll = createAsyncThunk('genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data:{genres}} = await genreServices.getAll();
            return genres;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });

const initialState = {
    genres: [],
};
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
}
export {
    genreActions,
    genreSlice,
    genreReducer
}

