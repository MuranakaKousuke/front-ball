import { Login } from './type';

// -------------------- Action --------------------
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// -------------------- Types --------------------
export interface LoginAction {
  type: typeof LOGIN;
  payload: number;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

// -------------------- ActionTypes --------------------
export type LoginActionsTypes = LoginAction | LogoutAction

// -------------------- Action Creator --------------------
export const changeLogin = (data: number): LoginActionsTypes => ({
  type: LOGIN,
  payload: data
})

export const changeLogout = (): LoginActionsTypes => ({
  type: LOGOUT,
})