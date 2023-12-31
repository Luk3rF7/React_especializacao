// * style css
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
/* import { useAuthentication } from '../../context/AuthContext'; */
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from './../../hook/useAuthentication'
export default function Navbar() {
  //instancia
  const { user } = useAuthValue() 
  const { logout } = useAuthentication() 
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
      <span>Blog Developer</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        <li>
        {user && (
            <button className={styles.logout} onClick={logout}>Sair</button>
            )}
            </li>
      </ul>
    </nav>
  );
};