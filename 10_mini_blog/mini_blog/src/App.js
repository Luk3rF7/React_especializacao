import './styleGlobal/App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
        
     <BrowserRouter >
     <Navbar />
      <div className='container'>
     <Routes>
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/About"} element={<About />} />
     </Routes>
      </div>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
