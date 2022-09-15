import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { occupationsReducer } from '../features/occupations/occupationsSlice';

export const store = configureStore({
    reducer: {
        occupations: occupationsReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

