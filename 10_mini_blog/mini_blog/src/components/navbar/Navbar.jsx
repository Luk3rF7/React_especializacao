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
          <NavLink to={"/Login"} className={({isActive})=>(isActive ? style.active : "")} > Login </NavLink>
        </li>
        <li>
          <NavLink to={"/Info"} className={({isActive})=>(isActive ? style.active : "")} > Info </NavLink>
        </li>
      </ul>
    </nav>
  );
}
