export default function Events()  {
   const handleMyEvent = () =>{
    console.log('Evento const handleMyEvent')
   }

   const renderSomething = (x) => {
    if(x){
      return (
        <h1> Renderizou isso!se for true</h1>
      )
    }else{
        return (
          <>
          <h2>como e falso ele: </h2>
          <h2>Rendeziou esse 2x</h2>
          <h2>Rendeziou esse 2x</h2>
          </>
        )
    }
   }
  return (

    <div>
    <div>
      <p className="txt"></p>
      <button onClick={handleMyEvent}>Clique Aqui !</button>
    </div>
    <div>
      <button onClick={() => console.log('Clicou! 2x')}> =| Clique Aqui  |= </button>
    </div>  
      {renderSomething(true)}
      {renderSomething(false)}
  </div>
    )
}