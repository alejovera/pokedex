export default (pokemons = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_TYPE':
            return action.payload;
        default:
            return pokemons;
    }
};
