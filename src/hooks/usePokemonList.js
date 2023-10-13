import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url){
    const [pokemonListState, setPokemonListState] =useState({
        isLoading:true,
        pokemonList:[],
        pokedexUrl:url,
        prev:"",
        next:"",
      })
      
    //  downloads pokemon details,sets pokedexUrl to next,
    // sets pokedexUrl to prev
     async function downloadPokemons()
     {
       setPokemonListState((state)=>({
         ...state,
         isLoading:true
         }));
       const response = await axios.get(pokemonListState.pokedexUrl);
       const PokemonResults =response.data.results;
 
       setPokemonListState((state)=>({
         ...state,
         prev:response.data.previous,
         next:response.data.next,
       }))

       const PokemonPromiseResults = PokemonResults.map((pokemon)=> axios.get(pokemon.url));
       const PokemonData= await axios.all(PokemonPromiseResults);
       const result= PokemonData.map((pokemon)=>{
               return (
           {
                     name: pokemon.data.species.name,
                     id: pokemon.data.id,
                     image: pokemon.data.sprites.other.home.front_default,
                     type: pokemon.data.types
           }
                      )
       })
       setPokemonListState((state)=>({
         ...state,
         pokemonList:result,
         isLoading:false
       }))
     }


       // will reload download page whenever pokedexUrl changes
   useEffect(()=>{
     downloadPokemons();
   },[pokemonListState.pokedexUrl])

   return [pokemonListState,setPokemonListState ]
}
export default usePokemonList;