// Alterando Contexto

import { useContext } from 'react'
import { CounterContext} from './Counter'

const ChangeCounter = () => {
  const {counter,setCounter} = useContext(CounterContext)

  return(
    <div>
      <button onClick={() => setCounter(counter + 1)}>
      <h3>Count + 1</h3>
      </button>
    </div>
  )
}
export default ChangeCounter;