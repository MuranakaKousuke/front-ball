import { User } from './types';

// -------------------- Action --------------------
export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';

// -------------------- Types --------------------
export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: User;
}
export interface DeleteUserAction {
  type: typeof DELETE_USER;
}

export type UserActionsTypes = FetchUserAction | DeleteUserAction

// -------------------- Action Creator --------------------
export const fetchUser = (data: User): UserActionsTypes => ({
  type: FETCH_USER,
  payload: data
})

export const deleteUser = (): UserActionsTypes => ({
  type: DELETE_USER,
})