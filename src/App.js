import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/common/Footer';
import Header from './components/common/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
export default App;
