import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokDetails =()=>{
    const{pokId} = useParams()

    const[pokemonDetail, setPokemonDetail] = useState(null)

    useEffect(()=>{

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokId)
    .then((data)=>{return data.json()})
    .then((pok)=>{setPokemonDetail(pok)})

    }, [])

    

    return(
        <>

        {pokemonDetail && <>  
            <p>{pokemonDetail.name}</p>
            <img src={pokemonDetail.image} alt={pokemonDetail.name} />
            <p>Types : {pokemonDetail.apiTypes[0].name}</p>
        </>}
        
            

        </>
    )
}
export default PokDetails;