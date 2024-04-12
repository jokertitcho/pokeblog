import {useState} from "react"

const FindByName = () => {
    const [namePok, setNamePok] = useState()

    const findPok =(e)=>{
        e.preventDefault()
        const enterName = e.target.search.value

        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + enterName)
        .then((data)=>{return data.json()})
        .then((pok)=> setNamePok(pok))
    }


    return (
        <div>
            <form onSubmit={findPok}>

                <input type="search" name="search" />
                <input type="submit" />

            </form>
            {namePok && <div>
                <h2>{namePok.name}</h2>
                <img src={namePok.image} alt={namePok.name}/>
                <p>{namePok.apiTypes.map((types)=>{
                    return(
                        <ul key={types.name}>
                            <li>{types.name}</li>
                        </ul>
                    )
                    
                })}</p>

                </div>}
        </div>
    );
};

export default FindByName;