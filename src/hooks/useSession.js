import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider";

export const useSession = () => {
  return useContext(SessionContext);
};
