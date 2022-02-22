import React, { useEffect, useState } from 'react';
import './ListOfPokemons.css';

import { getAllPokes } from '../api/index';
import Pokemon from './Pokemon/Pokemon';

function ListOfPokemons() {
    useEffect(() => {
        fetchPokes();
    }, []);

    const [pokeResults, setPokeResults] = useState();
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);

    const fetchPokes = async () => {
        try {
            const data = await getAllPokes();
            setPokeResults(data);
            setResults(data.results);
            setLoading(false);
            return data;
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                results.map(({ name, url }) => (
                    <Pokemon item={name} url={url} />
                ))
            )}
        </div>
    );
}

export default ListOfPokemons;
