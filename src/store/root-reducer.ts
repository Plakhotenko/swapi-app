import { createReducer } from '../state-manager';
import { peopleReducer, initialState as peopleInitialState } from './people/reducers';

export const reducers = {
  people: createReducer(peopleInitialState, peopleReducer),
};
