//style
import styles from './About.module.css'
import { Link } from 'react-router-dom';
export default function About() {
  return(
  <div className={styles.containers}> 
  <div className={styles.title}>
  <h2>Sobre o Projeto Dev <span>Blog</span></h2>
  </div>
  <hr/>
  <article className={styles.article}>
    <p>
      Dev Blog e um mini Projeto para consolidar os Conhecimento 
      Com React utilizando ferramenta:
    </p>
  <hr/>
    <ul>
      <li>
        React-router-Dom
      </li>
      <li>
        Firebase
      </li>
      <li>
        Sistema de autenticação
      </li>
      <li>
        Sistema de login e Registro
      </li>
      <li>
      Sistema de upload de foto imagem
      </li>
      <li>
         validações
      </li>
    </ul>
    <hr/>
    <Link to="/posts/create"className={styles.link} > Venha criar um Post e testar! </Link>
  </article>
  </div>

)
}
