import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TypePokemons = ()=>{

    const {pokeType} = useParams()

    const [typePok, setTypePok ] = useState([])

    useEffect(()=>{

        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + pokeType)
        .then((data)=>{return data.json()})
        .then((type)=>{setTypePok(type)})

    }, [])


    return(
        <>
         {typePok && <div>
            {typePok.map((types)=>{
                return(
                    <div key={types.id}>
                        <h2>{types.name}</h2>
                        <img src={types.image} alt={types.name} />
                        <p>types {types.apiTypes.map((multype)=>{
                            return(
                                <div key={multype.name}>
                                    <p>{multype.name}</p>
                                </div>
                            )
                        })}</p>
                    </div>
                )
            })}
            </div>}
        </>
    )
}
export default TypePokemons;