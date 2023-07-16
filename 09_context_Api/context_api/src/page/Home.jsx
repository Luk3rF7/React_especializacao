/* * useContext
 import { useContext} from 'react'
import {CounterContext} from './../context/Counter'; */
import ChangeCounter from '../context/ChangeCounter';
/* 4 refatorando com hook  */
import { useCounterContext } from '../hook/useCounterContext';


export default function Home() {
  /* 
  * Foi trocado useContext(CounterContext)
  * pelo hook useCounterContext */
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>
      Home
        </h1> 
      <h2> Valor do contador : {counter}</h2>
      {/* alterando valor contexto */}
      <ChangeCounter />
      </div>
  )
}
