import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSlice from '../authslice/authSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;