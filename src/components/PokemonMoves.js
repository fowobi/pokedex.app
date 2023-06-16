import React, { useState, useEffect } from "react";

const PokemonMoves = (props) => {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    if (props.pokemonId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // setPokemonData(data);
          setMoves(data.moves.map((move) => move.move.name));
        })
        .catch((error) => console.log(error));
    }
  }, [props.pokemonId]);

  return (
     <div>
      <h2>Moves:</h2>
      {moves.length > 0 ? (
        <ul>
          {moves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      ) : (
        <p>No moves found.</p>
      )}
    </div>
  );
};

export default PokemonMoves;
