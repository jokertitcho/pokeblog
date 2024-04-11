import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Allpokemons = ()=>{

    const [arrAllPok, setArrAllPok] = useState([])

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then( (data)=>{ return data.json()})
    .then((arr) => {
        setArrAllPok(arr)
    })

    }, [])
    


    return(
        <div>
        {arrAllPok.map((pok)=>{
            return (
                <>
                    <p key={pok.id}>{pok.name}</p>

                    <p>{pok.apiTypes.map((type)=>{
                        return (
                            <p key={type.name}>
                                <Link to={`/pokemon-by-Types/${type.name}`}> de type {type.name} </Link>
                                
                            </p>
                            
                        )
                    })}</p>
                    
                    <p><Link to={`/pokemon-details/${pok.id}`}>Voir les details de ce pokemon</Link></p>
                </>
                
            )
        })}
        
        
        
        
        </div>
    )
}
export default Allpokemons;