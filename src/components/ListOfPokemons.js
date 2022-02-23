import React, { useEffect, useState } from 'react';
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core';
import './ListOfPokemons.css';

import { getAllPokes, getTypePokes } from '../api/index';
import Pokemon from './Pokemon/Pokemon';

function ListOfPokemons() {
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);
    const [chosenType, setChosenType] = useState();
    const [chosenIndex, setChosenIndex] = useState();
    const [dropdownActive, setDropdownActive] = useState(false);

    useEffect(() => {
        fetchPokes();
    }, [chosenType]);

    const options = [
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'ghost',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dragon',
        'dark',
        'fairy',
    ];
    const handleChange = (evt) => {
        evt.preventDefault();
        setChosenType(evt.target.value);
        setChosenIndex(options.indexOf(evt.target.value));
        setDropdownActive(true);
    };
    console.log(chosenIndex);

    const fetchPokes = async () => {
        try {
            console.log(dropdownActive);
            if (dropdownActive) {
                const data = await getTypePokes(chosenIndex + 1);
                setLoading(false);
                const mappedPokemon = data.pokemon.map((item) => {
                    return item.pokemon;
                });
                console.log(mappedPokemon);
                setResults(mappedPokemon);
            } else {
                const data = await getAllPokes();
                setResults(data.results);
                setLoading(false);
                return data;
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    // console.log(results);

    return (
        <div className="container">
            <div className="dropdown__container">
                <Box sx={{ maxWidth: 300, minWidth: 300 }}>
                    <FormControl fullWidth>
                        <InputLabel
                            className="dropdown__label"
                            id="demo-simple-select-helper-label"
                            label="Label"
                        >
                            Tipos de Pokemon
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Label"
                            value={chosenType}
                            onChange={handleChange}
                        >
                            {options.map((item, index) => {
                                // console.log(options[index]);
                                return (
                                    <MenuItem
                                        key={index}
                                        value={`${options[index]}`}
                                    >
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                results.map(({ name, url }) => (
                    <Pokemon key={name} item={name} url={url} />
                ))
            )}
        </div>
    );
}

export default ListOfPokemons;
