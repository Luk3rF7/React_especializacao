//style Css
import styles from './Home.module.css'
import blog1 from '../../assets/svg/Blog1.svg'
import blog3 from '../../assets/svg/Blog3.svg'
/* import blog3 from '../../assets/svg/Blog3.svg' */

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div>
      <img src={blog3} alt="" className={styles.img} />
      </div>
    <div >
      <img src={blog1} alt="" className={styles.img2} />
    </div>
    </div>
  );
}
