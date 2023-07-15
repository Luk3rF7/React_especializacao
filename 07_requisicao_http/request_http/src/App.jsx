import './App.css'
import { useState } from 'react'
import { useFetch } from './hook/useFetch'

const url = "http://localhost:3000/products"
function App() {
  //guarda os dados
/*  const [products,setProducts] = useState([]) */
 const [name,setName] = useState("")
 const [price,setPrice] = useState("")
 const [color,setColor] = useState("")
 //instanciando e extraido do hookPersonalizado:
  const { data: items,httpConfig,loading,error } = useFetch(url)
/* 
 * resgastando dados sem utilizar Hook personalizado
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
},[]) */
const handleSubmit = async(e) =>{
  e.preventDefault()
  
  const products = {
    name,price,color
  }
  httpConfig(products,"POST")
  setPrice("")
  setName("")
  setColor("")
  /*
  * Exemplo sem hookPersonalizado 
  * 2 - add produtos: 
  const res = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body : JSON.stringify(product),
});
   * 3 carregamento dinamico
  const addedProduct = await res.json()
  setProducts((prevProduct) => [...prevProduct,addedProduct])
  */
}
 const handleRemove = (id) =>{
  httpConfig(id,"DELETE")

}
  return (

    <div className="container_listproduc">
         {/* Adiciona produto */}
         <div className="add-product">
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar Produto:</h2>
          <label >
          Produto:
          <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label >
          Price:
          <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <label >
          Qual cor do produto:
          <input type="text" value={color} name="color" onChange={(e) => setColor(e.target.value)} />
          </label>
          <label>  
           {loading &&  <input type="submit" disabled value="Aguarde ..." />}
           {!loading &&  <input type="submit" value="Cadastrar " />}
          </label>
        </form>
      </div>
      { /* visualizar produto */ }
       <div className="container_prod">
       <h1>Lista de Produtos</h1>
       {error && <h1>{error}</h1>} 
        {loading && <h1>Carregando dados...</h1>}
       {!error &&
       <ul>
       {items && items.map((product)=> (
         <li key={product.id}>
           <b>Produto :</b>  {product.name} <br/>
           <b>Preço R$:</b> {product.price} <br/>
           <b>cor:</b>{product.color}
           <button onClick={() => handleRemove(product.id)}>Deletar item</button>      
         </li>
       ))}
     </ul>}
      </div>
    </div>
  )
}

export default App
