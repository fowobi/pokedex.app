import React from "react";

function Logo(props) {
  console.log(props);
  // const AppName = "Fowobi's";
  return (
    <header>
      <h1>Welcome to {props.AppName} the Podex</h1>
    </header>
  );
}

export default Logo;
