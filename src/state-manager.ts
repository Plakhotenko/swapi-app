import { createContext, useContext } from 'react';

interface Action {
  type: string;
  [key: string]: any;
}

export type AC = (payload: any) => Action;
export type Reducer<T> = (state: T, action: Action) => T;

export interface Store {
  [key: string]: (action: Action) => any;
}

type Selector = (store: Store) => (action: Action) => any;

export const StoreContext = createContext({} as any);
StoreContext.displayName = 'StoreProvider';

export const useSelector = (selector: Selector) => {
  const store: Store = useContext(StoreContext);
  return selector(store)({} as Action);
};

export const useDispatch = () => {
  const store: Store = useContext(StoreContext);
  return (action: Action) => {
    const reducers = Object.values(store);
    reducers.forEach((reducer) => {
      reducer(action);
    });
  };
};

export const createReducer = <T>(initialState: T, reducer: Reducer<T>) => {
  let state = initialState;
  return (action: Action) => {
    state = reducer(state, action);
    return state;
  };
};
