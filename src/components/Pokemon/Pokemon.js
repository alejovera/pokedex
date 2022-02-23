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
                const datita = pokeData.types.map((item) => {
                    return item;
                });
                // console.log(datita);
                const mappedType = datita.map((item) => {
                    return item.type.name;
                });
                // console.log(mappedType);
                setPokeState({
                    name: pokeData.forms[0].name,
                    image: pokeData.sprites.front_default,
                    number: pokeData.id,
                    type: mappedType,
                });
                // if (pokeState.type) {
                //     const pokeStructure = pokeState.type;
                //     console.log(pokeStructure);
                // }
            } else {
                console.log('hola');
            }
        })();
    }, []);

    return (
        <>
            {pokeState.type ? (
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
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}

export default Pokemon;
