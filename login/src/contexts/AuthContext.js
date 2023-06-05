//mover estado a nivel global
"use client";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, getToken] = useState(null);

  useEffect(() => {
    //comprobar si el usuario esta logeado o no
  }, []);

  const login = async (accessToken) => {
    //accesstoken nos manda de la respuesta del login
    try {
      console.log("TOKEN", accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
