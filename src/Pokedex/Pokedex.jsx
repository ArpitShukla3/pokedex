import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";
function Pokedex(){
    const [searchItem, setSearchItem] = useState('');
    return(
        < div className="pokdex-wrapper">
        <Search updateSearchTerm={setSearchItem}/>
        {(searchItem.length==0)?  <PokemonList/>: "" }
        </ div>
    )
}
export default Pokedex;