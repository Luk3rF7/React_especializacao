// 1 - criar context

import { createContext,useState } from "react"

export const CounterContext = createContext();

// criar o provider

export const CounterContextProvider = ({ children }) =>{
  const [counter,setCounter] = useState(10)


  return (
    <CounterContext.Provider value={{counter,setCounter}}>
      {children}
      </CounterContext.Provider>
  )
}
