//import style
import './App.css'
//import components
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/listRender'
import Condicional from './components/Condicional'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CartDEtail'
import Fragmento from './components/Fragmento'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import MessageStatus from './components/Message'
import ChangeMessageStats from './components/changeMessageStats'
import { useState } from 'react'
import UserDetails from './components/UserDetail'





function App() {
  //instancia
  const name = "usuario logado app.jsx (props)"
  const cars = [
    {id:1,brand: "Ferrari",color:'vermelho',newCars: true,Km:0},
    {id:2,brand: "Fusca",color:'preto',newCars: false,Km:2000},
    {id:3,brand: "Kia",color:'Cinza',newCars: true,Km: 500}
  ]
  //funçoes:
  function showMessage(){
    console.log('Evento de components Pai')
  }
  //hook
  const [message,setMessage] = useState()

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  //desafios: 
  const person = [
    {id:1,name:'user1',age:25,job:'Programador'},
    {id:2,name:'user2',age:16,job:'estudante'},
    {id:3,name:'user3',age:18,job:'ajudante'}
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
        <CarDetails
        key={car.id} brand={car.brand} color={car.color} Km={car.Km} newCars={car.newCars}/>        
       </>
      ))}
      <Fragmento propFragment="fragment Test" />
      {/* Container childprop */}
      <Container myValue="valor propriedade container" >
        <h3> Esse e um paragrafo filho</h3>
      </Container>
      <Container myValue="outro valor do container" >
        <h3> outro titulo do container reutilizado</h3>
      </Container>
      {/*  executando função com props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift
      usamos para gerenciar  */}
      <MessageStatus msg={message}/>
      <ChangeMessageStats  handleMessage={handleMessage}/>
     {person.map((user) => (
      <UserDetails
       key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}/>
     ))}
    </div>
    </>
  )
    
}
export default App
