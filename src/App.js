import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import PokemonMovesSelector from "./components/PokemonMovesSelector";
import PokemonCity from "./components/PokemonCity";



function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <Logo appName="Pokedex" />
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        className="pokedex-img"
        alt="Pokedex"
      />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMovesSelector/>
      <PokemonCity/>
    </div>
  );
}

export default App;

