import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function PublicRoute() {
    const { user } = useAuth();
    return !user ? <Outlet /> : <Navigate to="/home" replace />;
}
