import {  Route, Routes } from 'react-router-dom';
import Template from './components/layout/Template';
import AddUser from './components/user/AddUser';
import Users from './components/user/Users';
import LoginForm from './components/LoginForm';
import Categories from './components/categories/Categories';
import AddCategory from './components/categories/AddCategory';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/admin/users/add" element={<AddUser />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/signin" element={<LoginForm />} />
                <Route path="/admin/categories" element={<Categories />} />
                <Route path="/admin/category/add" element={<AddCategory />} />
            </Route>
        </Routes>
    );


}

export default AppRoutes;