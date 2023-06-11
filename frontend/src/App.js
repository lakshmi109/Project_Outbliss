// import { NativeBuffer } from 'mongoose';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contactus from './components/contactuspage/Contactus';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contactus/>} />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
