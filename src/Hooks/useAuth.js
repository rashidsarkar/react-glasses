import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function useAuth() {
  const all = useContext(AuthContext);
  return all;
}

export default useAuth;
