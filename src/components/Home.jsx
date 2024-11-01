import React from "react";
import { useSession } from "../hooks/useSession";

const Home = () => {
  const { session, logOut } = useSession();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-200 ">
      <div className="font-mono font-black text-2xl antialiased hover:subpixel-antialiased">
        <h1>Welcome to home</h1>
      </div>
      <button
        className="mt-4 bg-slate-900 hover:bg-slate-600 px-4 py-2 text-white uppercase rounded text-xs font-semibold tracking-wider border border-zinc-800 font-sans"
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
