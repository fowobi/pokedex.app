// // import React from "react";
// // import Logo from "./components/Logo";
// // import BestPokemon from "./components/BestPokemon";
// // import CaughtPokemon from "./components/CaughtPokemon";
// // import PokemonMovesSelector from "./components/PokemonMovesSelector";
// // import PokemonCity from "./components/PokemonCity";
// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



// // function App() {
// //   const abilities = ["Anticipation", "Adaptability", "Run-Away"];

// //   return (
// //     <div>
// //       <Logo appName="Pokedex" />
// //       <img
// //         src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
// //         className="pokedex-img"
// //         alt="Pokedex"
// //       />
// //       <BestPokemon abilities={abilities} />
// //       <CaughtPokemon />
// //       <PokemonMovesSelector/>
// //       <PokemonCity/>
// //     </div>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// // import Logo from "./components/Logo";
// import BestPokemon from "./components/BestPokemon";
// import CaughtPokemon from "./components/CaughtPokemon";
// import PokemonMovesSelector from "./components/PokemonMovesSelector";
// import PokemonCity from "./components/PokemonCity";

// function App() {
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];

//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/best-pokemon">Best Pokemon</Link>
//             </li>
//             <li>
//               <Link to="/caught-pokemon">Caught Pokemon</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route
//             path="/best-pokemon"
//             element={<BestPokemon abilities={abilities} />}
//           />
//           <Route path="/caught-pokemon" element={<CaughtPokemon />} />
//           <Route path="/pokemon-moves" element={<PokemonMovesSelector />} />
//           <Route path="/pokemon-city" element={<PokemonCity />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import PokemonMovesSelector from "./components/PokemonMovesSelector";
import PokemonCity from "./components/PokemonCity";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/best-pokemon">Best Pokemon</Link>
            </li>
            <li>
              <Link to="/caught-pokemon">Caught Pokemon</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/best-pokemon"
            element={<BestPokemon abilities={abilities} />}
          />
          <Route path="/caught-pokemon" element={<CaughtPokemon />} />
          <Route path="/pokemon-moves" element={<PokemonMovesSelector />} />
          <Route path="/pokemon-city" element={<PokemonCity />} />
          {/* Add the new route for PokemonInfo */}
          {/* <Route path="/pokemon/:name" element={<PokemonInfo />} /> */}
          <Route path="/pokemon/:id" element={<PokemonInfo />} />
        </Routes>
        <Logo />
      </div>
    </BrowserRouter>
  );
}

export default App;
