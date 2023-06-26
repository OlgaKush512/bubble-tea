import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAnimated: false,
};

export const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    getAnimation: (state) => {
      if (state.isAnimated === true) {
        state.isAnimated = false;
      } else {
        state.isAnimated = true;
      }
    },
  },
});

export const { getAnimation } = animationSlice.actions;
export default animationSlice.reducer;
