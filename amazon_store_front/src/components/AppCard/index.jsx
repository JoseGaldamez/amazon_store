import React from "react";
import "./AppCard.css";

const urlBase = "http://localhost:8080/app-icons/";

const AppCard = ({ app }) => {
  return (
    <div className="app-card">
      <div className="app-card__image">
        <img src={`${urlBase}${app.image}`} alt={app.appname} />
      </div>
      <div className="app-card__info">
        <h3>{app.appname}</h3>
        <small>{app.developer}</small>
        <div>starts</div>
        <div className="app-card__info___price">$ {app.price}</div>
      </div>
    </div>
  );
};

export default AppCard;
