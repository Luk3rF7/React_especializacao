import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Mini Blog</h1>
      </div>
     <BrowserRouter >
     <Navbar />
     <Routes>
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/info"} element={<Info />} />
      <Route path={"/Login"} element={<Login />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
