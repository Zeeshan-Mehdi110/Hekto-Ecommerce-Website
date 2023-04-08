import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import ProductsList from "./components/products/ProductsList"
import ShopingCart from "./components/products/ShopingCart"

export default function AppRoutes() {
    const routes = [
        {
            path : '/',
            element : Home
        },
        {
            path : '/products',
            element : ProductsList
        },
        {
            path : '/shopingcart',
            element : ShopingCart
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
