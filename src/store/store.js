import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store=configureStore({
    reducer:{
        auth: authSlice //can add more  reducers here if needed.
    }
});

export default store;

