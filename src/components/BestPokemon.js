import React from "react";

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite pokemon is squirtle</p>
      <ul>
        {abilities.map((name, index) => (
          <li key={index}>{name} </li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
