import { createStore, combineReducers } from 'redux';
import palabraReducer from './palabra/reducer';

const reducers = combineReducers({
    palabraReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //para plugin de Chrome que permite visualizar el Store
);

export default store;