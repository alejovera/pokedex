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
    const [filteredSearch, setFilteredSearch] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    useEffect(() => {
        fetchPokes();
        selectType();
    }, [chosenType]);

    const selectType = (data) => {
        if (typeof data !== undefined) {
            setDropdownActive(true);
            setChosenType(data);
            setChosenIndex(options.indexOf(data));
        }
    };

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

    //If we call this fn on the use Effect and depending in condition we dispatch the action, we could read the data below that?

    const fetchPokes = async () => {
        try {
            if (dropdownActive) {
                const { pokemon } = await getTypePokes(chosenIndex + 1);
                setLoading(false);
                const mappedPokemon = pokemon.map((item) => {
                    return item.pokemon;
                });
                setResults(mappedPokemon);
                setFilteredSearch(true);
            } else {
                const data = await getAllPokes();
                setResults(data.results);
                setLoading(false);
                return results;
            }
        } catch (err) {
            console.log(err.message);
        }
    };

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
            {filteredSearch ? (
                <h3 className="pokemon__title">Busqueda filtrada:</h3>
            ) : (
                <h3 className="pokemon__title">Lista aleatoria</h3>
            )}

            {loading ? (
                <p>Cargando...</p>
            ) : (
                results.map(({ name, url }) => (
                    <Pokemon
                        key={name}
                        item={name}
                        url={url}
                        dataManager={selectType}
                    />
                ))
            )}
        </div>
    );
}

export default ListOfPokemons;
