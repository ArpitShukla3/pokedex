import { Link, useParams } from "react-router-dom";
import "./Pokemon.css"
import { useEffect } from "react";
function Pokemon({name , image, id})
{
    return (
      <Link to={`/element/${id}`} >
      <div className="pokemon-card">
         <div className="pokemon-name">{name}</div>
         <div> <img  src={image}/> </div>
      </div>
      </Link>
    )
}
export default Pokemon;