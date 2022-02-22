import React, { useEffect, useState } from 'react';
import './Pokemon.css';
import { getPokeData } from '../../api/index';

function Pokemon({ item, url }) {
    const [pokeState, setPokeState] = useState({
        name: '',
        image: '',
        number: '',
        type: '',
    });

    useEffect(() => {
        (async function pokeData() {
            if (typeof url !== 'undefined') {
                const pokeData = await getPokeData(url);
                setPokeState({
                    name: pokeData.forms[0].name,
                    image: pokeData.sprites.front_default,
                    number: pokeData.id,
                    type: pokeData.types,
                });
            } else {
                console.log('hola');
            }
        })();
    }, []);

    console.log(pokeState);
    return (
        <div className="pokemon__container">
            <h2>{pokeState.name}</h2>
            <p>{pokeState.image}</p>
            <p>{pokeState.number}</p>
            {/* <p>{pokeState.type}</p> */}
        </div>
    );
}

export default Pokemon;
