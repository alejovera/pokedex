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
            <div className="image__container">
                <img
                    className="pokemon__image"
                    src={pokeState.image}
                    alt="imagen pokemon"
                />
            </div>
            <h3>{pokeState.name}</h3>
            <p className="pokemon__number"># {pokeState.number}</p>
        </div>
    );
}

export default Pokemon;
