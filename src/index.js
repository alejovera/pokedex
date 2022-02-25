import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from './ErrorBoundary';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import PokemonData from './components/PokemonData/PokemonData';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/:name" element={<PokemonData />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>,

    document.getElementById('root')
);
