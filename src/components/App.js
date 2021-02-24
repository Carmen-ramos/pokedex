import "../stylesheets/App.scss";
import PokemonList from "./PokemonList.js";
import Pokemon from "./Pokemon.js";
import pokemonsData from "../data/data.json";
import logo from "../images/logoPokemon.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo Pokemon" className="logo" />
      <h1> Lista de pokemons</h1>
      <h2>¡Hazte con todos!</h2>
      <PokemonList pokemons={pokemonsData} />
    </div>
  );
}

export default App;
