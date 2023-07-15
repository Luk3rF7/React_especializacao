import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
    <h1>Formulario</h1>
    <MyForm user={{name:"josias",email:'josias@gmail.com',bio:'sou advogado',role:'admin'}} />
    </>
  )
}

export default App
