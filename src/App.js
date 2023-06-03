import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

function App() {
  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo />
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        className="pokedex-img"
        alt="Pokedex"
      />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
