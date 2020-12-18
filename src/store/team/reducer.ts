import { FETCH_TEAM, DELETE_TEAM, TeamActionsTypes } from './actions';

// -------------------- InitialState --------------------
export type teamState = {
  login: boolean;
  id: number | null;
  name: string | null;
  town: string | null;
  introduction: string | null;
  prefectureId: number | null;
}

export const initialState: teamState = {
  login: false,
  id: null,
  name: null,
  town: null,
  introduction: null,
  prefectureId: null,
}

// -------------------- Reducer --------------------
const teamReducer = (state = initialState, action: TeamActionsTypes): teamState => {
  switch(action.type){
    case FETCH_TEAM:
      return {
        ...state,
        login: action.payload.login,
        id: action.payload.id,
        name: action.payload.name,
        town: action.payload.town,
        introduction: action.payload.introduction,
        prefectureId: action.payload.prefectureId,
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