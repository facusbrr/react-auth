import React, { createContext, useState } from "react";

const URL = "http://localhost:3000";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const logIn = async (credentials) => {
    try {
      const data = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!data.ok) {
        throw new Error("Error en la autenticacion");
      }

      const result = await data.json();
      setSession(result);
    } catch (error) {
      console.error("Error al autenticar al usuario", error);
      throw error;
    }
  };

  const logOut = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={(session, setSession)}>
      {children}
    </SessionContext.Provider>
  );
};
