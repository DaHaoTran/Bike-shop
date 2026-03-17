import { createSlice } from "@reduxjs/toolkit";

export const bikeSlice = createSlice({
    name: "bike",
    initialState: {
        details: {},
        bikes: []
    },
    reducers: {
        addDetails: (state, action) => {
            state.details = action.payload;
        },
        clearDetails: (state, action) => {
            state.details = {}
        },
        addBikeS: (state, action) => {
            state.bikes = action.payload;
        },
        clearBikes: (state, aciton) => {
            state.bikes = []
        },
    }
});

export const { addDetails, clearDetails, addBikeS, clearBikes } = bikeSlice.actions;

export default bikeSlice.reducer;