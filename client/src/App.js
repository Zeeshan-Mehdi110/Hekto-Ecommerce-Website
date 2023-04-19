import { useLocation } from 'react-router';
import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/common/Footer';
import Header from './components/common/header/Header';

function App() {
  const location = useLocation()
  const endpoint = location.pathname
  const isAdminPannel = endpoint === '/admin' || endpoint === "/admin/"  ? true : false;
  return (
    <div className="App">
      { !isAdminPannel && <Header /> }
      <AppRoutes />
      { !isAdminPannel &&<Footer /> }
    </div>
  );
}
export default App;
