import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import usePokemonList from "../hooks/usePokemonList";
function PokemonList()
{
               const [pokemonListState,setPokemonListState] =usePokemonList("https://pokeapi.co/api/v2/pokemon");

    return (
        <div className="pokemonList-wrapper">
           <div className="pokemon-wrapper">
           {(pokemonListState.isLoading)? "Data loading...":
             pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}  id={p.id}/>)
            }
           </div>
           <div className="controls">
            <button onClick={()=>pokemonListState.prev && setPokemonListState((state)=>({...state, pokedexUrl:state.prev}))}>Prev</button>
            <button onClick={()=> pokemonListState && setPokemonListState((state)=>({...state, pokedexUrl:state.next}))}>Next</button>
           </div>
        </div>
    )
}
export default PokemonList;