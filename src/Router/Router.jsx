import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import Register from "../Pages/Register.jsx";
import Login from "../Pages/Login.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])