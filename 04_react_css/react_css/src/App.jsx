import { useState } from 'react';
import './App.css'
import MyCompStyle  from './components/MyComponents';
import Title from './components/title';


function App() {
  const n =1
  const [ name] = useState('Lucas')
  const redTitle = true
  return (
    <>
    {/* css global */}
    <h1> React com Css</h1>
    {/* css components */}
    <MyCompStyle />
    <p className="my-comp-paragraph" >paragrafo do Css global</p>
    <p>paragrafo do Css global</p>
    {/* inline Css */}
    <p style={{color:"#eee",padding:'25px',border:'4px solid red'}}>
      este elemento foi estilizado de forma inline
    </p>
    {/* css inline dinamico */}
    <h2 style={n < 10 ? ({color:'purple',border:'2px solid purple'}):({color:'pink'})}>
    css Dinamico
    </h2>
    <h2 style={name === 'Lucas' ? ({color:'red',border:'2px solid red'}):({color:'blue'})}>
    css Dinamico
    </h2>
    {/* classe dinamica */}
    <h2 className={redTitle ? "red-title" : "title"}>
    Este titulo vai classe dinâmica
    </h2>
    {/* modules.css */}
    <Title />
    </>
  )
}

export default App
