import {  Route, Routes } from 'react-router-dom';
import Template from './components/layout/Template';
import AddUser from './components/user/AddUser';
import Users from './components/user/Users';
import LoginForm from './components/LoginForm';
import Categories from './components/categories/Categories';
import AddCategory from './components/categories/AddCategory';
import EditUser from './components/user/EditUser';
import EditCategory from './components/categories/EditCategory';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/admin/signin" element={<LoginForm />} />
            <Route path="/admin/" element={<Template />}>
                <Route path="users/add" element={<AddUser />} />
                <Route path="users" element={<Users />} />
                <Route path="categories" element={<Categories />} />
                <Route path="users/edit/:id/:rows/:page/" element={<EditUser />} />
                <Route path="category/edit/:id/:rows/:page/" element={<EditCategory />} />
                <Route path="users/:recordsPerPage/:pageNumber/" element={<Users />} />
                <Route path="categories/:recordsPerPage/:pageNumber/" element={<Categories />} />
                <Route path="category/add" element={<AddCategory />} />
            </Route>
        </Routes>
    );


}

export default AppRoutes;