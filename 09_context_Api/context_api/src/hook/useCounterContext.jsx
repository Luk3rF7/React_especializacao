import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if(!context){
    console.log("context não encontrado!")
  }
  return context;
}