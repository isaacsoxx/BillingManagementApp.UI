import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../user.state';

export const selectUserState = createFeatureSelector<UserState>('user');
export const getSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);
