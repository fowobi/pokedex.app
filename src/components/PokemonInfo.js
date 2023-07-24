// import React from "react";
// import { useParams } from "react-router-dom";

// function PokemonInfo() {
//   const { name } = useParams();

//   return (
//     <div>
//       <h2>Pokemon Information</h2>
//       <p>Name: {name}</p>
//     </div>
//   );
// }

// export default PokemonInfo;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, color, shape, base_happiness, capture_rate } = pokemonData;

  return (
    <div>
      <h2>Pokemon Information</h2>
      <p>Name: {name}</p>
      <p>Color: {color.name}</p>
      <p>Shape: {shape.name}</p>
      <p>Base Happiness: {base_happiness}</p>
      <p>Capture Rate: {capture_rate}</p>
    </div>
  );
}

export default PokemonInfo;
