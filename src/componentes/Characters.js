import React from 'react'

export const Characters = ({characters, isloading}) => {
    return (
        
        <div className="row">
            
            {
               
                characters.map((character, id) => (
                    <div className="col mb-4" key={character.id}>
                        <div className="card " >
                            <img src={character.image} alt="" />
                            <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <hr/>
                            <p>Especie: {character.species}</p>
                            <p>Location: {character.location.name}</p>
                            <p>Origin: {character.origin.name}</p>
                            </div>
                         </div>
                    </div>
                ))
            }
          
        </div>
    )
}

export default Characters;