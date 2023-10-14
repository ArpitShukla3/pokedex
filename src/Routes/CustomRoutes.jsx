import { Routes, Route} from 'react-router-dom'
import Pokedex from '../Pokedex/Pokedex';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
function CustomRoutes()
{
    return (
    <>
    <Routes>
          <Route path='/'  element={<Pokedex/>}/>
          <Route path='/element/:id' element={<PokemonDetails/>}/>
    </Routes>
    </>
    )
}
export default CustomRoutes;