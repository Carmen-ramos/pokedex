import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokemonList.scss";

function PokemonList(props) {
  const pokemonCard = props.pokemons.map((card) => {
    return (
      <li key={card.id}>
        <Pokemon card={card} />
      </li>
    );
  });

  return <ul className="pokeCard">{pokemonCard}</ul>;
}
export default PokemonList;
