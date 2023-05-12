import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import configureAxios from "./config/axios";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
