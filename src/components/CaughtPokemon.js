// import React from "react";

// const CaughtPokemon = (props) => {
//   // const date = new Date().toLocaleDateString();
//   return <p>Caught 0 Pokemon on {props.date}</p>;
// };

// export default CaughtPokemon;


import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  // const catchPokemon = () => {
  //   const randomPokemon = "Pikachu";
  //   // setCaught(caught + 1);
  //   setCaught(caught.concat(randomPokemon));
  // };
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
