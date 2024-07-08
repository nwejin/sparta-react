import { createStore, combineReducers } from 'redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({
  counter,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
