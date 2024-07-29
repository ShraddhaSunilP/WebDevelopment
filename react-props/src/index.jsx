import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img 
        src={props.img}
        alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  )
}
export default Card
ReactDOM.render(
  <div>
    <h1>My contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone= "+123 456 789"
      email = "b@beyonce.com"
    />

    <Card
      name="Hitesh"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone= "+126 433 567"
      email = "h@itesh.com"
    />
  </div>,
  document.getElementById("root")
);
