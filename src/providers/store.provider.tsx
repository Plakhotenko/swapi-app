import React, { FC } from 'react';
import { Store, StoreContext } from '../state-manager';

export const StoreProvider: FC<{ children: JSX.Element; structure: Store }> = ({
  children,
  structure,
}) => <StoreContext.Provider value={structure}>{children}</StoreContext.Provider>;
