
const CarDetails = ({brand,Km,color,newCars}) => {
  return <div>
    <h2>Detalhes do Carro</h2>
    <ul>
      <li> Marca :{brand}</li>
      <li> Km :  {Km}</li>
      <li>  Cor: {color}</li>
    </ul>
    { newCars === true ? ( <h2>Carro Novos</h2>) : (<h2>Carro velho</h2>)}
  </div>
}
export default CarDetails;