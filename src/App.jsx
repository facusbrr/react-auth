import React from "react";

import Login from "./components/Login";
import Home from "./components/Home";

import { useSession } from "./hooks/useSession";
import { SessionProvider } from "./context/SessionProvider";

const App = () => {
  const { session } = useSession();

  return <div>{session ? <Home /> : <Login />}</div>;
};

export default function AppWrapper() {
  return (
    <SessionProvider>
      <App />
    </SessionProvider>
  );
}
