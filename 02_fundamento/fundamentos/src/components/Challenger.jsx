
export default  function Challenger(){
const a = 10;
const b = 20;

  
  
  return (
    <div>
      <h1>valor A: {a}</h1>
      <h1>valor B :{b}</h1>
      <button onClick={(() => console.log(a+b) )}>clique aqui</button>
      </div>
  )
}
