import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
function PokemonDetails(){
    const {id} = useParams();
    const [details,setDetails] = useState({});
    async function downloadDetails(){
       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
       setDetails({
        name:  response.data.species.name,
        image: response.data.sprites.other.home.front_default,
        height: response.data.height,
        weight: response.data.weight,
        types: response.data.types.map((t)=> t.type.name)
       })
    }
    useEffect(()=>{downloadDetails()} ,[])
    return (
        <>
         <h3>Name : {details.name} </h3>
         <h3> {details.weight} </h3>
         <h3> {details.height} </h3>
         <img src={details.image} alt={details.name}  className="image"/>
        <div className="types">
        {/* {
           details && details.types.map((element)=>
                <h3 key={element.name}>{element.name}</h3> 
            )
         } */}
        </div>
        </>
    )
}
export default PokemonDetails;