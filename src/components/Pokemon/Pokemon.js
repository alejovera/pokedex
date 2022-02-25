import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                const datita = pokeData.types.map((item) => {
                    return item;
                });
                const mappedType = datita.map((item) => {
                    return item.type.name;
                });
                setPokeState({
                    name: pokeData.forms[0].name,
                    image: pokeData.sprites.front_default,
                    number: pokeData.id,
                    type: mappedType,
                });
            } else {
                console.log('hola');
            }
        })();
    }, []);

    return (
        <>
            {pokeState.type ? (
                <Link className="link" to={`/${pokeState.name}`}>
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
                        <div className="pokemon__type-container">
                            {pokeState.type.map((item) => (
                                <button key={item} className="pokemon__type">
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </Link>
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}

export default Pokemon;
