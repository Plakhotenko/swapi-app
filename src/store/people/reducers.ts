import { IPerson } from '../../models';
import { AC, Reducer } from '../../state-manager';

const ACTION_TYPES = {
  SET_PEOPLE: 'SET_PEOPLE',
  SET_LOADING: 'SET_LOADING',
  SET_CACHE_LOADING: 'SET_CACHE_LOADING',
};

interface PeopleState {
  entities: IPerson[];
  loading: boolean;
  cacheLoading: boolean;
}

export const initialState: PeopleState = {
  entities: [],
  loading: false,
  cacheLoading: false,
};

export const setPeople: AC = (people: IPerson[]) => ({
  type: ACTION_TYPES.SET_PEOPLE,
  people,
});

export const setLoading: AC = (loading: boolean) => ({
  type: ACTION_TYPES.SET_LOADING,
  loading,
});

export const setCacheLoading: AC = (loading: boolean) => ({
  type: ACTION_TYPES.SET_CACHE_LOADING,
  loading,
});

export const peopleReducer: Reducer<PeopleState> = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PEOPLE:
      return {
        ...state,
        entities: action.people,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case ACTION_TYPES.SET_CACHE_LOADING:
      return {
        ...state,
        cacheLoading: action.loading,
      };
    default:
      return state;
  }
};
