import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState = {
  page: 'total',
};

export const changePageSlice = createSlice({
  name: 'change',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { changePage } = changePageSlice.actions;
export const page = (state: RootState) => state.change;
