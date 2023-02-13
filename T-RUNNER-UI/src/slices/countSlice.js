import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import stravaApi from '../config/axios/stravaAPI';


export const getPostsThunk = createAsyncThunk(
    'count/getPostsThunk',
    async (params, { dispatch, getState }) => {
        // dispatch(increaseNumber());
        const rs = await stravaApi.getbyPosts(params);
        return rs;
    }
);

const countSlice = createSlice({
    //Name of reducer
    name: 'count',
    //Your init state
    initialState: {
        number: 0,
        history: [],
    },
    //Reducer Action, we not use type in old action,
    //parameter: 
    //State: initialState
    //action -> action.payload value that you dispatch from component
    reducers: {
        increaseNumber: (state, action) => {
            state.number = state.number + 1;
        },
        decreaseNumber: (state, action) => {
            state.number = state.number - 1;
        },
        updateHistory: (state, action) => {
            state.history.push(action.payload);
        }
    },
    extraReducers: {
        [getPostsThunk.pending]: (state, action) => {
            state.number = 1;
        },
        [getPostsThunk.fulfilled]: (state, action) => {
            state.number = state.number + 2;
            state.history.push(action.payload);
        },
        [getPostsThunk.rejected]: (state) => {
            state.number = -99999;
        }
    }
})

//Export Action to use
export const {
    increaseNumber,
    decreaseNumber,
    updateHistory
} = countSlice.actions

//Export Reducer
export default countSlice.reducer;
