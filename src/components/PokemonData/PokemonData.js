import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonData.css';
import Graph from '../Graph/Graph';
import { getPokeDataSingular } from '../../api';

function PokemonData() {
    const [specificPokemon, setSpecificPokemon] = useState();
    const [pokemonAbilities, setPokemonAbilities] = useState();
    const [pokemonType, setPokemonType] = useState();
    const [statsPokemon, setStatsPokemon] = useState();
    const [loading, setLoading] = useState(true);

    let params = useParams();

    useEffect(() => {
        fetchData();
    }, [params.name]);

    async function fetchData() {
        const rta = await getPokeDataSingular(params.name);
        setSpecificPokemon(rta);
        const type = rta.types.map((item) => item.type.name);
        setPokemonType(type);

        const ability = rta.abilities.map((item) => item.ability.name);
        setPokemonAbilities(ability);

        const stats = rta.stats.map((item) => item.base_stat);
        setStatsPokemon(stats);

        setLoading(false);
    }

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="pokemon-single__container">
                    <img src={specificPokemon.sprites.front_default} />
                    <h2 className="pokemon-single__title">
                        {specificPokemon.name}
                    </h2>
                    <div className="pokemon-single__char">
                        <p className="pokemon-single__p">
                            Altura: {specificPokemon.height * 0.1}
                        </p>
                        <p className="pokemon-single__p">
                            Peso: {specificPokemon.weight / 10}
                        </p>
                    </div>
                    <div className="container__type">
                        <p className="pokemon-single__p">Tipos de pokemon:</p>
                        {pokemonType.map((item) => (
                            <button className="pokemon__type" key={item}>
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="container__abilities">
                        <p className="pokemon-single__p">Habilidades: </p>
                        {pokemonAbilities.map((item) => (
                            <button className="pokemon__abilities" key={item}>
                                {item}
                            </button>
                        ))}
                    </div>
                    <Graph pokeStats={statsPokemon} />
                </div>
            )}
        </>
    );
}
export default PokemonData;
