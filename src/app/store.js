import { configureStore } from '@reduxjs/toolkit';
import inputNameReducer from '../components/slices/inputNameSlice';
import theReducer from '../components/slices/theSlice';
import cupReducer from '../components/slices/cupSlice';
import tapiocaReducer from '../components/slices/tapiocaSlice';
import sizeReducer from '../components/slices/sizeSlice';


export const store = configureStore({
  reducer: {
    name: inputNameReducer,
    the: theReducer,
    cup: cupReducer,
    tapioca: tapiocaReducer,
    size: sizeReducer,

  },
});
