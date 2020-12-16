import { Team } from './types';

// -------------------- Action --------------------
export const FETCH_TEAM = 'FETCH_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';

// -------------------- Types --------------------
export interface FetchTeamAction {
  type: typeof FETCH_TEAM;
  payload: Team;
}
export interface DeleteTeamAction {
  type: typeof DELETE_TEAM;
}

export type TeamActionsTypes = FetchTeamAction | DeleteTeamAction

// -------------------- Action Creator --------------------
export const fetchTeam = (data: Team): TeamActionsTypes => ({
  type: FETCH_TEAM,
  payload: data
})

export const deleteTeam = (): TeamActionsTypes => ({
  type: DELETE_TEAM,
})