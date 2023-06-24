import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isSend: false,
};

export const inputNameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    isSend: (state, action) => {
      state.isSend = action.payload;
    }
  },
});

export const { getName, isSend } = inputNameSlice.actions;
export default inputNameSlice.reducer;
