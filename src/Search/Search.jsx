import { useState } from 'react';
import './Search.css'
import useDebounce from '../Debounce/useDebounce';
function Search({updateSearchTerm}){
    const debouncedCallback= useDebounce((e)=> updateSearchTerm(e.target.value),500)
       return(
        <div className='search-wrapper'>
            <input  
             type="text" 
            placeholder="Search here .." 
            id="pokemon-name-search"   
            onChange={debouncedCallback}/>  
        </div>
       )
}
export default Search;