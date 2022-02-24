import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonData() {
    let params = useParams();

    return <div>{params.name}</div>;
}

export default PokemonData;
