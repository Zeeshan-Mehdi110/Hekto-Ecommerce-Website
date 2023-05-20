import { useEffect } from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import { loadAuth } from './store/actions/authActions';
import { connect } from 'react-redux';


function App({ user, isAuthLoaded, loadAuth }) {
  useEffect(() => {
    loadAuth();
  }, [])
  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthLoaded: state.auth.isLoaded,
  };
}

export default connect(mapStateToProps, { loadAuth })(App);
