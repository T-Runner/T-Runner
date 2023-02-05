import { createSlice } from '@reduxjs/toolkit';
import { classes } from '../data';

const classSlice = createSlice({
    //Name of reducer
    name: 'classes',
    //Your init state
    initialState: {
        classList: classes,
        type: [],
        active: ''
    },
    //Reducer Action, we not use type in old action,
    //parameter: 
    //State: initialState
    //action -> action.payload value that you dispatch from component
    reducers: {
        fetchRunClassesList: (state, action) => {
            state.type = action.payload.data;
            state.active = action.payload.active;
        }
    }
})

//Export Action to use
export const { fetchRunClassesList } = classSlice.actions;

//Export Reducer
export default classSlice.reducer;
