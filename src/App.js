import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
       <Router>
       <Header />
       <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/coins" element={ <Coins /> }/>
        <Route path="/coin/:id" element={ <CoinDetails /> }/>
        <Route path="/exchanges" element={ <Exchanges /> }/>
       </Routes>
       <Footer />
      <ToastContainer theme={"colored"}/>
       </Router>
    </div>
  );
}

export default App;
