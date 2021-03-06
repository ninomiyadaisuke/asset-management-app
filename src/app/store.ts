import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { toggleSlice } from '../slice/toggleSlice';
import { changePageSlice } from '../slice/changePageSlice';

export const store = configureStore({
  reducer: {
    change: changePageSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
