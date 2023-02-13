import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        data: null,
        isOpenDetailClass: false,
        isOpenAddChallenge: false
    },
    reducers: {
        setStatusPopup: (state, action) => {
            state.isOpenDetailClass = action.payload.isOpenDetailClass;
            state.isOpenAddChallenge = action.payload.isOpenAddChallenge;
        },
        setDataPopup: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {
    setStatusPopup,
    setDataPopup
} = popupSlice.actions

export default popupSlice.reducer