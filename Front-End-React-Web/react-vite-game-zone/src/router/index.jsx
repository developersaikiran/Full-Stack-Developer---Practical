import { createBrowserRouter } from "react-router-dom";
import MainContent from "../layouts/MainContent/MainContent";
import LudoMainPage from "../pages/Ludo/Main";

export const router = createBrowserRouter([
    {
        element: <MainContent/>,
        children: [
            {
                key: 0,
                path: "/",
                element: <LudoMainPage/>,
            }
        ]
    }
])