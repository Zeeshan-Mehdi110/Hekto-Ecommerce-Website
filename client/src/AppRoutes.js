import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ShoppingCart from './components/commonComponents/products/ShoppingCard';
import CheckOut from './components/products/CheckOut';
import OrderCompleted from './components/products/OrderCompleted';
import ProductDetails from './components/products/ProductDetails';
import ProductsList from './components/products/ProductsList';

function AppRoutes() {

  const routes = [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/products',
      element: ProductsList,
    },
    {
      path: "/details/:productId",
      element: ProductDetails,
    },
    {
      path: "/shoppingcart",
      element: ShoppingCart,
    },
    {
      path: "/checkout",
      element: CheckOut,
    },
    {
      path: "/order-complete",
      element: OrderCompleted
    },
  ];

  return (
    <Routes>
      {
        routes.map((route, index) => (
          <Route key={index} exact path={route.path} element={<route.element />} />
        ))
      }
    </Routes>
  );
}

export default AppRoutes;