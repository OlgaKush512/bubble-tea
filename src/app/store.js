import { configureStore } from '@reduxjs/toolkit';
import nameFormReducer from '../components/loginFormSlice';
import inputLoginReducer from '../components/inputLoginSlice';
import homePageReducer from '../components/homePageSlice';
import whichGameReducer from '../components/whichGameSlice';

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    inputLogin: inputLoginReducer,
    homePage: homePageReducer,
    whichGame: whichGameReducer,
  },
});
