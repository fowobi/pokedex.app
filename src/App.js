// import React from "react";
// import Logo from "./components/Logo";
// import BestPokemon from "./components/BestPokemon";
// import CaughtPokemon from "./components/CaughtPokemon";

// function App() {
//   // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//       <Logo />
//       <img
//         src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//         className="pokedex-img"
//         alt="Pokedex"
//       />
//       <BestPokemon />
//       <CaughtPokemon />
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import Logo from "./components/Logo";
// // import BestPokemon from "./components/BestPokemon";
// // import CaughtPokemon from "./components/CaughtPokemon";

// function App() {
//   // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   // const date = new Date().toLocaleDateString();
//    const logWhenClicked = () => {
//      console.log("Logo clicked!");
//    };

//   return (
//     // <div>
//     //   <Logo appName="Pokedex" />
//     //   <img
//     //     src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//     //     className="pokedex-img"
//     //     alt="Pokedex"
//     //   />
//     //   <BestPokemon abilities={abilities} />
//     //   <CaughtPokemon date={date} />
//     // </div>
//     <div>
//       <Logo handleClick={logWhenClicked} />
//     </div>
//   );
// }

// export default App;





import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import PokemonMoves from "./components/PokemonMoves";
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
      <PokemonMoves />
      <PokemonCity/>
    </div>
  );
}

export default App;

