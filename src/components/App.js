import "../stylesheets/App.scss";
import PokemonList from "./PokemonList.js";
import pokemonsData from "../data/data.json";
import logo from "../images/logo2.png";
import { useState } from "react";

function App() {
  const [data] = useState(pokemonsData);
  return (
    <div className="App">
      <img src={logo} alt="logo Pokemon" className="logo" />
      <h1 className="title1"> Lista de pokemons</h1>
      <h2 className="title2">¡Hazte con todos!</h2>
      <PokemonList pokemons={data} />
    </div>
  );
}

export default App;
