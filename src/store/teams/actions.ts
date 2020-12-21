import { Team } from './types';

// -------------------- Action --------------------
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_TEAM = 'FETCH_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';

// -------------------- Types --------------------
export interface FetchTeamsAction {
  type: typeof FETCH_TEAMS;
  payload: Team[];
}
export interface FetchTeamAction {
  type: typeof FETCH_TEAM;
  payload: Team;
}
export interface UpdateTeamAction {
  type: typeof UPDATE_TEAM;
  payload: Team;
}

// -------------------- ActionTypes --------------------
export type TeamsActionsTypes = FetchTeamsAction | FetchTeamAction | UpdateTeamAction

// -------------------- Action Creator --------------------
export const fetchTeams = (data: Team[]): TeamsActionsTypes => ({
  type: FETCH_TEAMS,
  payload: data
})

export const fetchTeam = (data: Team): TeamsActionsTypes => ({
  type: FETCH_TEAM,
  payload: data
})

export const updateTeam = (data: Team): TeamsActionsTypes => ({
  type: UPDATE_TEAM,
  payload: data
})
