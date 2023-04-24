import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import ProductsList from "./components/products/ProductsList"
import ShopingCart from "./components/products/ShopingCart"
import ProductDetails from "./components/products/ProductDetails"
import checkOutPage from "./components/products/CheckOutPage"
import OrderCompleted from "./components/products/OrderCompleted"
import Template from "./admin/components/layout/Template"
import AddUser from "./admin/components/users/AddUser"
import User from "./admin/components/users"
import Login from "../src/admin/Login"

export default function AppRoutes() {
	const routes = [
		{
			path: '/',
			element: Home
		},
		{
			path: '/products',
			element: ProductsList
		},
		{
			path: '/shopingcart',
			element: ShopingCart
		},
		{
			path: "/ProductDetails",
			element: ProductDetails
		},
		{
			path: "/checkOutPage",
			element: checkOutPage
		},
		{
			path: "/orderCompleted",
			element: OrderCompleted
		},
		//admin routes
		{
			path : "/admin",
			element : Template
		},
		{
			path: '/admin/login',
			element: Login,
			},
	]
	return (
		<Routes>
			{
				routes.map((route, index) => {
					return <Route key={index} path={route.path} element={<route.element />} />
				})
			}
			<Route path="/admin" element={<Template />}>
                <Route path="user/add" element={<AddUser />} />
                <Route path="user/add" element={<User/>} />
      </Route>
		</Routes>
	)
}
