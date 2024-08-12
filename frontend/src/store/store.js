import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk'; // Correct import for named export

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
