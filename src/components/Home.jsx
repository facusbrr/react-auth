import React from "react";
import { useSession } from "../hooks/useSession";

const Home = () => {
  const { session, logOut } = useSession();

  return (
    <div>
      <h2>Welcome, {session.name}</h2>
      <button
        onClick={() => {
          console.log("Se clickeo");
          logOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
