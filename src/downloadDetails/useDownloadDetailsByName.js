import axios from "axios";
import { useEffect, useState } from "react";

function useDownloadDetailsByName(name)
{
    const [details,setDetails] = useState({});
    async function downloadDetails(){
        try {
            const dataFromApi=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
             
             setDetails(()=>({
             name:  dataFromApi.data.species.name,
             image: dataFromApi.data.sprites.other.home.front_default,
             height: dataFromApi.data.height,
             weight: dataFromApi.data.weight,
             types: dataFromApi.data.types.map((t)=> t.type.name)
            }))
        } 
        catch (error) {
        console.log("->",`https://pokeapi.co/api/v2/pokemon/${name}`);
         }}
        useEffect(()=>{downloadDetails()} ,[]) ;
        console.log(details);
        return (details);
}
export default useDownloadDetailsByName;