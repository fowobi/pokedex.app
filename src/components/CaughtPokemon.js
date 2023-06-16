import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  };

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
    return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
