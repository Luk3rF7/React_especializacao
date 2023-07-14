import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/listRender'
import Condicional from './components/Condicional'
import './App.css'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CartDEtail'
function App() {
  //instancia
  const name = "usuario logado app.jsx (props)"
  const cars = [
    {id:1,brand: "Ferrari",color:'vermelho',newCars: true,Km:0},
    {id:2,brand: "Fusca",color:'preto',newCars: false,Km:2000},
    {id:3,brand: "Kia",color:'Cinza',newCars: true,Km: 500}
  ]
  return (
    <>
    <h1>Iniciando Seção 3:</h1>
    <h1>foto da public:</h1>
    <div>
    <img src='/img/img1.jpg' alt='paisagem' />
    <img src='/img/city.jpg' alt='paisagem' />
    </div>
    <h1>Importando do Assets</h1>
    <div>
    <img src={City} alt="" />
    </div>
    <div>
      <ManageData />
    </div>
    <div>
      <ListRender />
      <Condicional/>
      {/* props */}
      <ShowUserName  name={name}/>
      {/* destructuring */}
      <CarDetails brand="VW" Km={10000} color="blue" newCars={false} />
      {/* Reaproveitar o codigo */}
      <CarDetails brand="Ford" Km={2000} color="White" newCars={true}/>
      <CarDetails brand="Fiat" Km={0} color="Red" newCars={true}/>
      {/* loop em Array */}
      {cars.map((car)=> (
       <>
          <h2>Lista Array map</h2>
        <CarDetails brand={car.brand} color={car.color} Km={car.Km} newCars={car.newCars}/>        
       </>
      ))}
    </div>
    
    </>
  )
}
export default App
