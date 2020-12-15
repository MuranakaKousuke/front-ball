import { FETCH_USER, DELETE_USER, UserActionsTypes } from './actions';

// -------------------- InitialState --------------------
export type userState = {
  login: boolean;
  id: number | null;
  name: string | null;
}

export const initialState: userState = {
  login: false,
  id: null,
  name: null,
}

// -------------------- Reducer --------------------
const userReducer = (state = initialState, action: UserActionsTypes): userState => {
  switch(action.type){
    case FETCH_USER:
      return {
        ...state,
        login: action.payload.login,
        id: action.payload.id,
        name: action.payload.name,
      }
    case DELETE_USER:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
}

export default userReducer;