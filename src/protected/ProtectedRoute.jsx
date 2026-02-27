import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth"; // from the helper I suggested

const ProtectedRoute = ({ element }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;