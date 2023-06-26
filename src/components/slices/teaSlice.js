import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tea: 0,
};

export const teaSlice = createSlice({
  name: 'tea',
  initialState,
  reducers: {
    getTea: (state, action) => {
      state.tea = action.payload;
    },
  },
});

export const { getTea } = teaSlice.actions;
export default teaSlice.reducer;
