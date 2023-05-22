import { Route, Routes } from 'react-router-dom'
import AddCategory from './components/category/AddCategory'
import Categories from './components/category/Categories'
import EditCategory from './components/category/EditCategory'
import Profile from './components/layout/Profile'
import Template from './components/layout/Template'
import LoginForm from './components/LoginForm'
import AddProduct from './components/product/AddProduct'
import EditProduct from './components/product/EditProduct'
import Products from './components/product/Products'
import AddUser from './components/user/AddUser'
import EditUser from './components/user/EditUser'
import Users from './components/user/Users'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Template />}>
        {/* Users Routes */}
        <Route path="users/add" element={<AddUser />} />
        <Route path="users" element={<Users />} />
        <Route path="users/profile" element={<Profile />} />
        <Route path="users/edit/:id/:rows/:page" element={<EditUser />} />
        <Route path="users/:recordsPerPage/:pageNumber" element={<Users />} />

        {/* Products Routes */}
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/edit/:id/:rows/:page" element={<EditProduct />} />
        <Route
          path="products/:recordsPerPage/:pageNumber"
          element={<Products />}
        />

        {/* Categories Routes */}
        <Route path="categories" element={<Categories />} />
        <Route path="categories/add" element={<AddCategory />} />
        <Route
          path="categories/edit/:id/:rows/:page"
          element={<EditCategory />}
        />
        <Route
          path="categories/:recordsPerPage/:pageNumber"
          element={<Categories />}
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes
