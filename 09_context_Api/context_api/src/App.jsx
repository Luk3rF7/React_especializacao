import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//components
import Home from './page/Home';
import About from './page/About';
import Info from './page/Info';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
    <h1>Context Api</h1>
      <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path={'/Home'} element={<Home />} />
      <Route  path={'/Info'} element={<Info />}/>
      <Route path={'/About'} element={<About />}/>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
