import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import configureAxios from "./config/axios";

configureAxios(store)


function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
