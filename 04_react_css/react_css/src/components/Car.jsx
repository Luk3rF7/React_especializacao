import styles from './Cars.module.css'

const Car = ({car}) => {
  return ( 
    <div className={styles.card}>
      <h1>{car.name}</h1>
      <p>Km : {car.Km}</p>
      <p>cor : {car.color}</p>
      </div>
  )
}
export default Car