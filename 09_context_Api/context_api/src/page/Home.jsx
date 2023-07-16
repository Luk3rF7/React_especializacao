/* * useContext
 import { useContext} from 'react'
import {CounterContext} from './../context/Counter'; */
import ChangeCounter from '../context/ChangeCounter';
/* 4 refatorando com hook  */
import { useCounterContext } from '../hook/useCounterContext';
import { useTitleColorContext } from './../hook/useTitleColorContext';


export default function Home() {
  /* 
  * Foi trocado useContext(CounterContext)
  * pelo hook useCounterContext */
  const { counter } = useCounterContext();
  const {color,dispatch} =  useTitleColorContext()
  /* 
  *alterando state complexo:
   */
  const setTitleColor = (color) => {
    dispatch({type:color})
  }
  return (
    <div >
      <h1 style={{color:color}}>
          Home
        </h1> 
      <h2> Valor do contador : {counter}</h2>
      {/* alterando valor contexto */}
      <ChangeCounter />
      {/*  alterando context */}
      <div>
    <button onClick={(() => setTitleColor("PURPLE"))}>
      mude a cor
    </button>
    <button onClick={(() => setTitleColor("BLUE"))}>
      mude a cor
    </button>
    <button onClick={(() => setTitleColor("RED"))}>Reset</button>
      </div>
      </div>
  )
}
