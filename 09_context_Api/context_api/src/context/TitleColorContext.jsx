import {createContext, useReducer } from 'react'
export const TitleColorContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const titleColorReducer = (state,action ) => {
  switch(action.type){
    case "PURPLE":
      return {...state,color:"purple"}
    case"BLUE":
        return {...state,color:"blue"}
        case "RED":
          return {...state,color:"red"}
       default:
        return state;

  }
}
export const TitleColorContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(titleColorReducer,{color:"red"})
  return (
    <TitleColorContext.Provider value ={{...state,dispatch}}>
      {children}
    </TitleColorContext.Provider>
  )
}