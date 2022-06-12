import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { selectUser } from "../reducer/AuthSlice"

const RoleBased = ({allowedRole}) => {
    const location = useLocation();
    const user = useSelector(selectUser)

    return user.role === allowedRole ? (
        <Outlet />
    ):(
        <Navigate to="/app" state={{ from: location }} replace />
    )
}

export default RoleBased