import React from "react";
import { AppModal } from "../AppModal";
import { Starts } from "../Starts";
import "./AppCard.css";

const urlBase = "http://localhost:8080/app-icons/";

const AppCard = ({ app, handleShowModal }) => {
  return (
    <>
      <div
        onClick={() => {
          handleShowModal(true, app);
        }}
        className="app-card"
      >
        <div className="app-card__image">
          <img src={`${urlBase}${app.image}`} alt={app.appname} />
        </div>
        <div className="app-card__info">
          <h3>{app.appname}</h3>
          <small>{app.developer}</small>
          <Starts
            ratings={app.ratings}
            size={15}
            color="orange"
            showNumber={false}
            align="left"
          />
          <div className="app-card__info___price">
            {app.price < 0.5 ? "FREE" : `$ ${app.price}`}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
