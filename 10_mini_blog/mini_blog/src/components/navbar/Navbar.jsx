// * style css
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
/* import { useAuthentication } from '../../context/AuthContext'; */
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from './../../hook/useAuthentication'
export default function Navbar() {
  //instancia
  const { user } = useAuthValue() 
  const { logout } = useAuthentication() 
  return (
    <nav className={style.navbar}>
        <NavLink to={'/'} className={style.brand}> <span> Dev Blog </span>
          </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink to={"/home"} className={({isActive})=>(isActive ? style.active : "")} > Inicio </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({isActive})=>(isActive ? style.active : "")} > Sobre </NavLink>
        </li>

        {/* if se mostra cadastrar ou logar */}
      {user && (
      <>
       <li>
          <NavLink to={"/login"} className={({isActive})=>(isActive ? style.active : "")} > Entrar </NavLink>
        </li>
     
        <li>
          <NavLink to={"/Register"} className={({isActive})=>(isActive ? style.active : "")} > Cadastre-se </NavLink>
        </li>
      </>)}
      {/*  criar e postar se usuario tiver logado  */}
      {!user && (
        <>
           <li>
          <NavLink to={"/posts/create"} className={({isActive})=>(isActive ? style.active : "")} > Novo Post </NavLink>
        </li>
     
        <li>
          <NavLink to={"/dashboard"} className={({isActive})=>(isActive ? style.active : "")} > Dashboard </NavLink>
        </li>
        </>
      )}
      {!user && (
      <li>
          <button onClick={logout}> Logout</button>
      </li>
      )}
      </ul>
    </nav>
  );
}
