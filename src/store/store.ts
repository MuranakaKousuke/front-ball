import { combineReducers, createStore, compose, applyMiddleware} from 'redux';
import userReducer from './user/reducer';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from './actions';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  user: userReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)));

export default store;