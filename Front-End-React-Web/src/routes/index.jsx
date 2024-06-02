import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import AdminLogin from "../pages/Admin/Auth/login"
import { ProtectedRoute } from "./ProtectedRoutes"

// const AdminLogin = lazy(()=> import("../pages/Admin/Auth/login"))

export const routeList = createBrowserRouter([
    {
        path: "/",
        element:(
            <ProtectedRoute isAuth={false} role="admin">
                <AdminLogin />
            </ProtectedRoute>
        ),
        // accessRoles: [systemRoles.],
    },
    // {
    //     id: 2,
    //     path: "/registration",
    //     name: "Registration",
    //     component: <Registration/>,
    //     isAuth: false,
    //     // accessRoles: [systemRoles.],
    // },
])