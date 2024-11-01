import React, { createContext, useState } from "react";
import { fetchData } from "../utilities/fetchUtility.js";

const URL = "http://localhost:3000";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const logIn = async (credentials) => {
    try {
      const data = await fetchData(`${URL}/login`, "POST", credentials);

      const result = await data.json();
      setSession(result);
    } catch (error) {
      console.error("Error al autenticar al usuario", error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await fetchData(`${URL}/logout`, "POST", null);
      setSession(null);
    } catch (error) {
      console.error("Error al cerrar la sesión", error);
    }
  };

  return (
    <SessionContext.Provider value={{ session, logIn, logOut }}>
      {children}
    </SessionContext.Provider>
  );
};
