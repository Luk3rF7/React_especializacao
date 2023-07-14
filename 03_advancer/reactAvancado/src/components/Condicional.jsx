import { useState } from 'react'

const Condicional = () => {
  const [x] = useState(true)
  const [name,setName] = useState('')
  return (
    <div>
    <h1>Condicional</h1>
    <h3>Isso será exibido?</h3>
     {x && <p>Se X for verdadeiro , Vou Aparecer</p>}
     {!x && <p>Se X for falso  irei aparecer</p>}
     <h3>if Tenario :</h3>
     {name === 'user' ? (
        <div>
          <p>Nome é {name}</p>
        </div>
     ) : (
      <div>
        <p> Não foi encontrado esse nome {name}</p>
      </div>
     )}
     <button onClick={() => setName("user")}>o nome a ser encontrado é:</button>
    </div>
  )
}

export default Condicional