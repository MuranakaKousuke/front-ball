import { Team } from './types';

// -------------------- Action --------------------
export const FETCH_TEAM = 'FETCH_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';

// -------------------- Types --------------------
export interface FetchTeamAction {
  type: typeof FETCH_TEAM;
  payload: Team;
}
export interface UpdateTeamAction {
  type: typeof UPDATE_TEAM;
  payload: Pick<Team, 'id' |'name' | 'prefectureId' | 'town' | 'introduction'>;
}
export interface DeleteTeamAction {
  type: typeof DELETE_TEAM;
}

export type TeamActionsTypes = FetchTeamAction | UpdateTeamAction | DeleteTeamAction

// -------------------- Action Creator --------------------
export const fetchTeam = (data: Team): TeamActionsTypes => ({
  type: FETCH_TEAM,
  payload: data
})

export const updateTeam = (data: Team): TeamActionsTypes => ({
  type: UPDATE_TEAM,
  payload: data
})

export const deleteTeam = (): TeamActionsTypes => ({
  type: DELETE_TEAM,
})