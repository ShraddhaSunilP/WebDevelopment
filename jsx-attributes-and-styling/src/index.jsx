import React from "react";
import ReactDOM from "react-dom";

const img_1 = "assets/img_1.png";
const img_2 = "assets/img_2.png";
const img_3 = "assets/img_3.png";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">My Favourite Foods</h1>
    <div>
      <img src={img_1} />
      <img src={img_2} />
      <img src={img_3} />
    </div>
  </div>,
  document.getElementById("root")
);
 