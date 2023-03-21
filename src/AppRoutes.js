import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/common/header/Header"
import Header2 from "./pages/Header2"
import Pashto from "./pages/Pashto"
import Urdu from "./pages/Urdu"

export default function AppRoutes() {
    const routes = [
        {
            path : '/',
            element : Header
        },
        {
            path : '/header2',
            element : Header2 
        },
        {
            path : '/Urdu',
            element : Urdu 
        },
        {
            path : '/Pashto',
            element : Pashto 
        },
        
    ]
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route,index) => {
                        return  <Route key={index} path={route.path} element={<route.element/>} />
                    } )
                }
            </Routes>
        </BrowserRouter>
    )
}
