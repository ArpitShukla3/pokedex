import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import useDownloadDetailsById from "../downloadDetails/useDownloadDetailsById";
import useDownloadDetailsByName from "../downloadDetails/useDownloadDetailsByName";
function PokemonDetails({name}){
    const {id} = useParams();
    if(!name)
    {
    const details = useDownloadDetailsById(id);
    return (
        <>
         <h3>Name : {details.name} </h3>
         <h3> {details.weight} </h3>
         <h3> {details.height} </h3>
         <img src={details.image} alt={details.name}  className="image"/>
        </>
    )
    }
    else{
      const details= useDownloadDetailsByName(name);
      return (
        <>
         <h3>Name : {details.name} </h3>
         <h3> {details.weight} </h3>
         <h3> {details.height} </h3>
         <img src={details.image} alt={details.name}  className="image"/>
        </>)
    }
}
export default PokemonDetails;