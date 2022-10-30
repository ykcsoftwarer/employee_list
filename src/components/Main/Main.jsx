import React from "react";
import "./Main.css";

const Main = ({id, image, name,email, age}) => {
  return (
    <div className="main">
      <img src={image} alt="img" className="main-img" />
      <div className="main-info">
        <h3 className="name">{name}</h3>
        <p className="email">{email}</p>
        <p className="age"><b>Age :</b> {age}</p>
      </div>
    </div>
  );
};

export default Main;
