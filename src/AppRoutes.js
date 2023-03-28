import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"

export default function AppRoutes() {
    const routes = [
        {
            path : '/',
            element : Home
        },
    ]
    return (
            <Routes>
                {
                    routes.map((route,index) => {
                        return  <Route key={index} path={route.path} element={<route.element/>} />
                    } )
                }
            </Routes>
    )
}
