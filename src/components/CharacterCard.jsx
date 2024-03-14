import React from 'react';

function CharacterCard({ character }) {
    return (
        <div className='characterCard'>
            <img src={character.image} alt={character.name} width="100%" />
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <p>{character.status}</p>
            <p>{character.id}</p>
        </div>
    )
}

export default CharacterCard;