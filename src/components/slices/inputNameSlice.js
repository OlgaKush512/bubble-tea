import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const inputNameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getName } = inputNameSlice.actions;
export default inputNameSlice.reducer;
