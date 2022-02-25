import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from './ErrorBoundary';

import App from './App';
import PokemonData from './components/PokemonData/PokemonData';

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:name" element={<PokemonData />} />
            </Routes>
        </BrowserRouter>
    </ErrorBoundary>,

    document.getElementById('root')
);
