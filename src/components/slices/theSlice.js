import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  the: '',
};

export const theSlice = createSlice({
  name: 'the',
  initialState,
  reducers: {
    getThe: (state, action) => {
      state.the = action.payload;
    },
  },
});

export const { getThe } = theSlice.actions;
export default theSlice.reducer;
