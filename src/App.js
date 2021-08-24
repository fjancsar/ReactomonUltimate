import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import PokemonsList from "./components/PokemonsList";
import Home from "./components/Home";
import Types from "./components/Types";

const App = () => {
  return (
    <div className="App">
        <Home/>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/pokemons">
                    <PokemonsList />
                </Route>
                <Route path="/types">
                    <Types />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
