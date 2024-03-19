import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a nuestro e-commerce!"/>
    </div>
  )
}

export default App
