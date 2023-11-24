import { configureStore } from '@reduxjs/toolkit';

import blogsReducer from './blogs/reducer';

export const store = configureStore({
  reducer: blogsReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
