import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filling: 100,
};

export const fillingSlice = createSlice({
  name: 'filling',
  initialState,
  reducers: {
    getFilling: (state, action) => {
      state.filling = action.payload;
    },
  },
});

export const { getFilling } = fillingSlice.actions;
export default fillingSlice.reducer;
