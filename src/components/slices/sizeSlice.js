import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  size: '',
};

export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    getSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { getSize } = sizeSlice.actions;
export default sizeSlice.reducer;
