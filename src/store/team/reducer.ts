import { FETCH_TEAM, DELETE_TEAM, TeamActionsTypes } from './actions';

// -------------------- InitialState --------------------
export type teamState = {
  login: boolean;
  id: number | null;
  email: string | null;
}

export const initialState: teamState = {
  login: false,
  id: null,
  email: null,
}

// -------------------- Reducer --------------------
const teamReducer = (state = initialState, action: TeamActionsTypes): teamState => {
  switch(action.type){
    case FETCH_TEAM:
      return {
        ...state,
        login: action.payload.login,
        id: action.payload.id,
        email: action.payload.email,
      }
    case DELETE_TEAM:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
}

export default teamReducer;