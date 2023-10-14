function useDownload({props})
{
    const [details,setDetails] = useState({});
    async function downloadDetails(){
       try {
            const dataFromApi=await axios.get(`https://pokeapi.co/api/v2/pokemon/${props}`);
            setDetails(()=>({
             name:  dataFromApi.data.species.name,
             image: dataFromApi.data.sprites.other.home.front_default,
             height: dataFromApi.data.height,
             weight: dataFromApi.data.weight,
             types: dataFromApi.data.types.map((t)=> t.type.name)
            }))
       } catch (error) {
        console.log("something went wrong")
       }
        } 
        useEffect(()=>{downloadDetails()} ,[]) ;
        return (details);
}
export default useDownload;