import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

function BodyComponent(props) {
    const [characters, setCharacters] = useState(props.characters);
    useEffect(() => {
        setCharacters(props.characters);
    }, [characters]);

    return (
        <div className='bodyContainer'>
            {characters.map((character) => {
                return <CharacterCard character={character} key={Math.random()} />
            })}
        </div>
    )
}

export default connect(mapStateToProps)(BodyComponent);