import React, { FC, createContext, useState, useMemo } from 'react';

export const ErrorBarContext = createContext<{ errorText: string; showError: (t: string) => void }>(
  {} as any
);

ErrorBarContext.displayName = 'ErrorBarProvider';

export const ErrorBarProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [errorText, setErrorShown] = useState('');

  const showError = (errorText: string) => setErrorShown(errorText);

  const providerValue = useMemo(() => ({ errorText, showError }), [errorText]);

  return <ErrorBarContext.Provider value={providerValue}>{children}</ErrorBarContext.Provider>;
};
