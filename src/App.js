import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetails from './containers/PokemonDetails';

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route path="/" component={Pokedex} />
      <Route path="/pokemon/:id" component={PokemonDetails} />
    </Router>
  );
}
