import { createSlice } from "@reduxjs/toolkit";

export const firmSlice = createSlice({
    name: 'firm',
    initialState: {
        firmId: 0,
        firms: []
    },
    reducers: {
        setFirmId: (state, action) => {
            state.firmId = action.payload;
        },
        addFirmS: (state, action) => {
            state.firms = action.payload;
        }
    }
})

export const { setFirmId, addFirmS } = firmSlice.actions;

export default firmSlice.reducer;