import "../stylesheets/App.scss";
import PlantillaFunc from "./function.js";
import PlantillaClass from "./class.js";
import pokemonsData from "../data/data.json";

function App() {
  return (
    <div className="App">
      hola
      <PokemonList pokemons={pokemonsData} />
      <Pokemon />
    </div>
  );
}

export default App;
