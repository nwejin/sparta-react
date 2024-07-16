// import { createStore, combineReducers } from 'redux';
import counter from '../modules/counter';
import { configureStore } from '@reduxjs/toolkit';

// 1. 일반 Redux
// const rootReducer = combineReducers({
//   counter,
// });

// const store = createStore(rootReducer);

// 2. Redux Toolkit
const store = configureStore({
  reducer: {
    // key: value
    counter: counter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
