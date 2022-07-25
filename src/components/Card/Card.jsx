import React from "react";
import "./Card.css";

const Card = (props) => {
  const { url, title, description } = props;

  return (
    <div className="card-container">
      <img className="card-container__image" url={url}></img>
      <h1 className="card-container__title">{title}</h1>
      <p className="card-container__description">{description}</p>
    </div>
  );
};

export default Card;
