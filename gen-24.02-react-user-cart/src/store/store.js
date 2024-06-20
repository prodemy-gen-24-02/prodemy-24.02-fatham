import { createStore } from 'redux';
import rootReducer from '../store/reducers/Reducer';

const store = createStore(rootReducer);

export default store;
