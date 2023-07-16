// * style css
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <NavLink to={'/'} className={style.brand}> <span> Mini Blog </span>
          </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink to={"/Home"} className={({isActive})=>(isActive ? style.active : "")} > Inicio </NavLink>
        </li>
        <li>
          <NavLink to={"/About"} className={({isActive})=>(isActive ? style.active : "")} > Sobre </NavLink>
        </li>
        <li>
          <NavLink to={"/Login"} className={({isActive})=>(isActive ? style.active : "")} > Entrar </NavLink>
        </li>
     
        <li>
          <NavLink to={"/Register"} className={({isActive})=>(isActive ? style.active : "")} > Cadastre-se </NavLink>
        </li>
     
      </ul>
    </nav>
  );
}
