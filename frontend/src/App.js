
// import { NativeBuffer } from 'mongoose';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchBox from './components/searchBox/SearchBox';
import BestSelling from './components/bestselling/BestSelling';
import Aboutus from './components/aboutus/Aboutus';
import Testimonialbox from './components/testimonialbox/Testimonialbox';
import Category from './components/category/Category';

function App() {
  return (
    <>
      <Navbar/>
      <SearchBox/>
      <BestSelling/>
      <Aboutus/>
      <Category/>
      <Testimonialbox/>
      <Footer/>
    </>
  );
}

export default App;
