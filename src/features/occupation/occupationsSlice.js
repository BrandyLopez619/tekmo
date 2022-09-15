import { createSlice } from '@reduxjs/toolkit';
import { AUTOCAD } from '../../app/shared/AUTOCAD';

const initialState = {
    autocadArray: AUTOCAD
};

const occupationsSlice = createSlice({
    name: 'occupations',
    initialState
});

export const occupationsReducer = occupationsSlice.reducer;