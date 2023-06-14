import React from "react";

function Logo(props) {
  // const logWhenClicked = ()=>{
  // console.log("Logo clicked!");
  return (
    <header>
      {/* <h1>Welcome to {props.AppName} the Podex</h1> */}
      <h1>Welcome to the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        className="pokedex-img"
        alt="Pokedex"
        onClick={props.handleClick}
      />
    </header>
  );
}

export default Logo;
