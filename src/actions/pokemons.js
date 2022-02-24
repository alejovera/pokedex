import { getAllPokes, getTypePokes } from '../api/index';

export const getPokeData = () => async (dispatch) => {
    try {
        const { results } = await getAllPokes();
        console.log(results);
        dispatch({ type: 'FETCH_ALL', payload: results });
    } catch (err) {
        console.log(err.message);
    }
};

export const getTypePokemons = (typePoke) => async (dispatch) => {
    try {
        const { pokemon } = await getTypePokes(typePoke);
        console.log(pokemon);

        dispatch({ type: 'FETCH_TYPE', payload: pokemon });
    } catch (err) {
        console.log(err.message);
    }
};
