import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import context
import { CounterContextProvider } from './context/Counter.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
       <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
