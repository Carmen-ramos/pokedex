import React from "react";
import Pokemon from "./Pokemon";

function PokemonList(props) {
  const pokemonCard = props.pokemons.map((pepino) => {
    return (
      <li key={pepino.id}>
        <Pokemon card={pepino} />
      </li>
    );
  });

  return <ul>{pokemonCard}</ul>;
}
export default PokemonList;
