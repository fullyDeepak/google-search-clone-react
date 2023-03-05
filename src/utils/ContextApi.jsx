import React, { createContext, useState } from 'react';

export const Context = createContext();

export const AppContext = (props) => {
  const [imageSearch, SetImageSearch] = useState(false);
  return (
    <Context.Provider
      value={{
        imageSearch,
        SetImageSearch,
      }}>
      {props.children}
    </Context.Provider>
  );
};
