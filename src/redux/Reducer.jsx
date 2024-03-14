import axios from "axios";

let initialState = {
    characters: []
}

function Reducer(state = initialState, action) {
    if (action.type === "FETCH_CHARACTERS") {
        return {
            ...state,
            characters: action.payload
        }
    }
    return state;
}

export default Reducer;

export const getCharacters = dispatch => {
    const characters = [];
    for (let i = 1; i <= 826; i++) {
        axios.get(`https://rickandmortyapi.com/api/character/${i}`)
            .then(response => response.data)
            .then(data => characters.push(data));
    }

    dispatch({
        type: "FETCH_CHARACTERS",
        payload: characters
    })
}