import { configureStore } from '@reduxjs/toolkit';
import inputNameReducer from '../components/slices/inputNameSlice';
import teaReducer from '../components/slices/teaSlice';
import fontReducer from '../components/slices/fontSlice';

import cupReducer from '../components/slices/cupSlice';
import tapiocaReducer from '../components/slices/tapiocaSlice';
import sizeReducer from '../components/slices/sizeSlice';


export const store = configureStore({
  reducer: {
    name: inputNameReducer,
    font: fontReducer,
    tea: teaReducer,
    cup: cupReducer,
    tapioca: tapiocaReducer,
    size: sizeReducer,

  },
});
