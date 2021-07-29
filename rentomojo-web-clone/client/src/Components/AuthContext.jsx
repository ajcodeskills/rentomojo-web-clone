import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLoginAuth = (user) => {
    if (user === "8879200470") {
      setIsAuth(true);
      alert("login successfull");
    } else {
      alert("Please enter correct details");
    }
  };

  const ToggleAuth = () => {
    setIsAuth((el) => !el);
  };

  const value = { isAuth, setIsAuth, handleLoginAuth, ToggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
