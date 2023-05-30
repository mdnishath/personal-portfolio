import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setOpen] = useState(false);

  //Value of auth
  const authInfo = { user, isOpen, setOpen };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
