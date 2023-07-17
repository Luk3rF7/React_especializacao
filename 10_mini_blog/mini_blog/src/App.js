import './styleGlobal/App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// Firebase
import { onAuthStateChanged } from 'firebase/auth';
// Context
import { AuthProvider } from './context/AuthContext'

// hook
import { useState,useEffect} from 'react'
import  { useAuthentication} from './hook/useAuthentication'
// components
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';



function App() {
  //monitora o usuario:
  const [user,setUser] = useState(undefined)
  const {auth} =useAuthentication()
  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    });
  },[auth])
 // verificando usuario logado
 if(loadingUser){
  return <p> Carregando...</p>
}
  return (
    <>
    <div className="App">
    <AuthProvider value={{user}}> 
     <BrowserRouter >
     <Navbar />
      <div className='container'>
     <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={user ? <Login /> : <Navigate to="/" />}/>
      <Route path={"/posts/create"} element={user ? <CreatePost />: <Navigate to="/login"/>} />
      <Route path={"/dashBoard"} element={user ? <Dashboard />: <Navigate to="/login"/> }/>
     </Routes>
      </div>
     </BrowserRouter>
     </AuthProvider>   
    </div>
     <Footer />
    </>
  );
}

export default App;
