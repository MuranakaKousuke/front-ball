import { Login } from './type'
import { LOGIN, LOGOUT, LoginActionsTypes } from './actions';

// -------------------- InitialState --------------------
export const initialState: Login = {
  success: false,
  teamId: undefined,
}

// -------------------- Reducer --------------------
const loginReducer = (state = initialState, action: LoginActionsTypes): Login => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        success: true,
        teamId: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
}

export default loginReducer;