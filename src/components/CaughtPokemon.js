import React, { useState } from "react";


const CaughtPokemon = () => {
  const [caughtPokemon, setCaughtPokemon] = useState(0);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  // const catchPokemon = () => {
  //   if (pokemonNameInput !== "") {
  //     setCaughtPokemon(caughtPokemon.concat(pokemonNameInput));
  //     setPokemonNameInput("");
  //   }
  // };

   const catchPokemon = () => {
     setCaughtPokemon((prevCaughtPokemon) => prevCaughtPokemon + 1);
   };

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
    return (
      <div>
        <p>
          {/* Caught {caught.length} Pokemon on {props.date} */}
          Caught {caughtPokemon} Pokemon
        </p>
        <input
          type="text"
          value={pokemonNameInput}
          onChange={handleInputChange}
        />
        <button onClick={catchPokemon}>Catch Pokemon</button>
        {/* <ul>
          {caughtPokemon.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul> */}
      </div>
    );
};

export default CaughtPokemon;
