import { combineReducers } from 'redux';

import loginReducer from './login/reducer';
import teamsReducer from './teams/reducer'

// -------------------- Reducer Combine --------------------
const rootReducer = combineReducers({
  login: loginReducer,
  teams: teamsReducer,
})

export default rootReducer;

// -------------------- App State Combine --------------------
export type AppState = ReturnType<typeof rootReducer>