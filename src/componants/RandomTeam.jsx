import { useEffect, useState } from "react";


const RandomTeam = () => {


    const[arrTeam, setArrTeam] = useState([])
    console.log(arrTeam);

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((data)=>{return data.json()})
        .then((team)=>{setArrTeam(team)})
    }, [])
    


    return (
        <div>{arrTeam && <div>
            {arrTeam.map((teamNow)=>{
                return(
                    <div key={teamNow.id}>
                        <h2>{teamNow.name}</h2>
                        <img src={teamNow.image} alt={teamNow.name} />

                    </div>
                )
            })}
            </div>}
            
        </div>
    );
};

export default RandomTeam;