import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/listRender'
function App() {
  return (
    <>
    <h1>Iniciando Seção 3:</h1>
    <h1>foto da public:</h1>
    <div>
    <img src='/img/img1.jpg' alt='paisagem' />
    <img src='/img/city.jpg' alt='paisagem' />
    </div>
    <h1>Importando do Assets</h1>
    <div>
    <img src={City} alt="" />
    </div>
    <div>
      <ManageData />
    </div>
    <div>
      <ListRender />
    </div>
    </>
  )
}
export default App
