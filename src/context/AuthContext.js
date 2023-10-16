import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Matheus Barreto");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
