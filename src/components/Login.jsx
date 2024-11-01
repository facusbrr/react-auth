import React, { useState } from "react";
import { useSession } from "../hooks/useSession";

const Login = () => {
  const { logIn } = useSession();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(credentials);
    } catch (error) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-slate-200">
      <div className="md:w-1/3 max-w-sm ">
        <input
          className="text-sm w-full px-4 py-2 border border-solid font-sans border-gray-300 mb-3 rounded"
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 mb-1 rounded"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {error && (
          <div className="text-red-500 font-semibold font-sans text-sm mt-2">
            {error}
          </div>
        )}
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-slate-900 hover:text-slate-600 font-sans hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <button
          className="mt-4 bg-slate-900 hover:bg-slate-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider border border-slate-300 hover:border-slate-400 font-sans"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
