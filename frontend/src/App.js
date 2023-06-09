
// import { NativeBuffer } from 'mongoose';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchBox from './components/searchBox/SearchBox';
import BestSelling from './components/bestselling/BestSelling';
import Aboutus from './components/aboutus/Aboutus';

function App() {
  return (
    <>
      <Navbar/>
      <SearchBox/>
      <BestSelling/>
      <Aboutus/>
      <Footer/>
    </>
  );
}

export default App;
