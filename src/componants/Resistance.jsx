import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Resistance = () => {

    const {PokRes} = useParams()
    const[ resistPok, setResistPok] = useState()

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + PokRes )
        .then((data)=>{return data.json()})
        .then((res)=>{ setResistPok(res)})
    })

    return (
        <div>
            {resistPok && <div>
                {resistPok.map((resist)=>{
                    return(
                        <div key={resist.id}> 
                            <h2>{resist.name}</h2>
                            <img src={resist.image} alt={resist.name} />
                            <ul >
                                {resist.apiTypes.map((type)=>{
                                    return(
                                        <li key={type.name}> {type.name} </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                </div>}
            
        </div>
    );
};

export default Resistance;