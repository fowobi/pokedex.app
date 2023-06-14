// import React from "react";

// function BestPokemon() {
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//       <p>My favorite pokemon is squirtle</p>
//       <ul>
//         {abilities.map((name, index) => (
//           <li key={index}>{name} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BestPokemon;

import React from "react";

function BestPokemon(props) {
  return (
    <div>
      <p>My favorite pokemon is squirtle</p>
      <ul>
        {props.abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;

