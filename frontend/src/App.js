
// import { NativeBuffer } from 'mongoose';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchBox from './components/searchBox/SearchBox';

function App() {
  return (
    <>
      <Navbar/>
      <SearchBox/>
      <Footer/>
    </>
  );
}

export default App;
