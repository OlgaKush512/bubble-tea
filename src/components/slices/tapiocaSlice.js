import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tapioca: '',
};

export const tapiocaSlice = createSlice({
  name: 'tapioca',
  initialState,
  reducers: {
    getTapioca: (state, action) => {
      state.tapioca = action.payload;
    },
  },
});

export const { getTapioca } = tapiocaSlice.actions;
export default tapiocaSlice.reducer;
