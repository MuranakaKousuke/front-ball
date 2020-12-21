import { Team } from '../teams/types';
import { FETCH_TEAMS, FETCH_TEAM, UPDATE_TEAM, TeamsActionsTypes } from './actions';

// -------------------- InitialState --------------------
export type teamsState = {
  byId: { [id: number]: Team },
  allIds: number[]
}

export const initialState: teamsState = {
  byId: {},
  allIds: []
}

// -------------------- Reducer --------------------
const teamsReducer = (state = initialState, action: TeamsActionsTypes): teamsState => {
  switch(action.type){
    case FETCH_TEAMS:
      const teams = action.payload.reduce((map, team) => map.set(team.id, team), new Map());
      const teamsIds = Object.keys(teams).map(Number);
      return {
        ...state,
        byId: { ...state.byId, ...teams },
        allIds: Array.from(new Set([...state.allIds, ...teamsIds]))
      }
    case FETCH_TEAM:
      const team = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [team.id]: team,
        },
        allIds: Array.from(new Set([...state.allIds, team.id]))
      }
    case UPDATE_TEAM:
      const updateTeam = action.payload;
      return {
        ...state,
        byId: {
          [updateTeam.id]: updateTeam
        }
      }
    default:
      return state;
  }
}

export default teamsReducer;