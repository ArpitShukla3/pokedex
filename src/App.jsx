import './App.css'
import Pokedex from './Pokedex/Pokedex'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
    <Link to="/">
     <h1 id="pokedex-heading">Pokedex</h1> 
     </Link>
       <CustomRoutes />
    </>
  )
}

export default App
