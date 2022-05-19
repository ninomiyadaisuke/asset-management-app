import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState = {
  toggle: true,
};

export const toggleSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = toggleSlice.actions;

export const invert = (state: RootState) => state.toggle;
