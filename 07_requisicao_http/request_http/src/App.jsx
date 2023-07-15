import { useEffect, useState } from 'react'
import './App.css'

const url = "http://localhost:3000/products"
function App() {
  //guarda os dados
 const [products,setProducts] = useState([])
 //resgastando dados
  useEffect(() =>{
 try{
  // eslint-disable-next-line no-inner-declarations
  async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  } 
  fetchData()
 }catch(e){
  console.error(e)
 }
  },[])
  console.log(products)
  return (
    <>
       <div >
      <h1>Lista de Produtos</h1>
      </div>
    </>
  )
}

export default App
