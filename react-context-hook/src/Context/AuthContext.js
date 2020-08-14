import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [state, setstate] = useState({
    isAuthenticated: false,
  });

  const authToggleHandler = () => {
    setstate({
      ...state,
      isAuthenticated: !state.isAuthenticated,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, authToggle: authToggleHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
