import React, { FC, createContext, useState } from "react";

export const ErrorBarContext = createContext<{ errorText: string, showError: Function }>({} as any);

ErrorBarContext.displayName = "ErrorBarProvider";

export const ErrorBarProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [errorText, setErrorShown] = useState('');

  const showError = (errorText: string) => setErrorShown(errorText);

  return (
    <ErrorBarContext.Provider value={{ errorText, showError }}>
      {children}
    </ErrorBarContext.Provider>
  )
}
