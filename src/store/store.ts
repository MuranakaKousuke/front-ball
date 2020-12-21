import { createStore, compose, applyMiddleware} from 'redux';
import thunk, { ThunkMiddleware } from "redux-thunk";

import AppActions from './actions';
import rootReducer, { AppState } from './reducer';

// -------------------- Store Create --------------------
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)));

export default store;