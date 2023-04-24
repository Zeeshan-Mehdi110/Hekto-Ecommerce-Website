import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/common/Footer';
import Header from './components/common/header/Header';
import { useLocation } from "react-router-dom";

function App() {
const location = useLocation();
  const endpoint = location.pathname;
  const isAdminPanel = endpoint.startsWith("/admin");
  return (
    <div className="App">
      { !isAdminPanel && <Header /> }
      <AppRoutes />
      { !isAdminPanel &&<Footer /> }
    </div>
  );
}
export default App;
