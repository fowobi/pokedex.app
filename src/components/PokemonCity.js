import React, { useState } from "react";

const PokemonCity = () => {
  const [city, setCity] = useState("");

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h2>Pokemon City:</h2>
      <input type="text" value={city} onChange={updateCity} />
      <p>You selected: {city}</p>
    </div>
  );
};

export default PokemonCity;
