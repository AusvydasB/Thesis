import  Shipping from './pages/Gallery/Shipping';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import './components/navBarStyles.css'
import './components/general.css'
import Footer from './components/Footer';
import LogIn from './components/LogIn'




function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Shipping"} element={<Shipping/>} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/FAQ"} element={<FAQ />} />
          <Route path={"/LogIn"} element={<LogIn />} />
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
