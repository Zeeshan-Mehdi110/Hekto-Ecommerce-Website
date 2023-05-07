import {  Route, Routes } from 'react-router-dom';
import Template from './components/layout/Template';
import AddUser from './components/user/AddUser';
import Users from './components/user/Users';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/admin/users/add" element={<AddUser />} />
                <Route path="/admin/users" element={<Users />} />
            </Route>
        </Routes>
    );


}

export default AppRoutes;