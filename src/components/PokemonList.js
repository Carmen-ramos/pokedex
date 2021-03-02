import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokemonList.scss";
import propTypes from "prop-types";

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

PokemonList.propTypes = {
  card: propTypes.object,
};

export default PokemonList;
