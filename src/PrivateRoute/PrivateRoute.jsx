import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(user);
  console.log(loading);

  // we have to wait hare
  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
