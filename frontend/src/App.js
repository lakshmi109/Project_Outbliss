// import { NativeBuffer } from 'mongoose';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contactus from './components/contactuspage/Contactus';
import Cartpage from './components/cartpage/Cartpage';
import Productspecpg from './components/productspecificpage/Productspecpg';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contactus/>} />
            <Route exact path="/cart" element={<Cartpage/>} />
            <Route exact path="/product" element={<Productspecpg/>} />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
