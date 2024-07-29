import React, { useState} from "react";

function App() {

  const [isMousedOver, setMousedOver] = useState(false);

  function changeColor(){
    setMousedOver(true);
  }

  function removeColor(){
    setMousedOver(false);
  }
  
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{"backgroundColor": isMousedOver ? "black" : "white" }} 
      onMouseOver={changeColor} 
      onMouseOut={removeColor}>
      Submit</button>
    </div>
  );
}

export default App;




