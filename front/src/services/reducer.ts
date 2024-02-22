import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(Actions.increment, (state) => state + 1),
  on(Actions.decrement, (state) => state - 1)
);
