import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Footer from "./components/commonComponents/footer/Footer";
import Header from "./components/commonComponents/header/Header";
import AppPreLoader from "./components/library/AppPreLoader";
import { loadHomeData } from "./store/actions/homeActions";
import { connect } from "react-redux";
import loader from "./static/loader.gif"


function App({ allRecordsLoaded, dispatch }) {

  useEffect(() => {
    dispatch(loadHomeData());
  }, [])

  // if (!allRecordsLoaded)
  //   return <AppPreLoader loader={loader} />

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

const mapStateToProps = ({ home }) => {
  return {
    allRecordsLoaded: home?.allRecordsLoaded,
  }
}

export default connect(mapStateToProps)(App);