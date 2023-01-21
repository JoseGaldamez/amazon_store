import React from "react";
import { CarruselScreenshots } from "../CarruselScreenshots";
import { Comments } from "../Comments";
import { Starts } from "../Starts";

import "./AppModal.css";
const urlBase = "http://localhost:8080/app-icons/";

export const AppModal = ({ app, setShowModal }) => {
  return (
    <div className="app-modal">
      <div className="app-info app_info_spacing">
        <div>
          <CarruselScreenshots screenshots={app.screenshots} />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4">
                <img
                  src={`${urlBase}${app.image}`}
                  alt={app.name}
                  className="app-icon"
                />
              </div>
              <div className="col-8 app-info__modal">
                <h4>{app.appname}</h4>
                <small>{app.developer}</small>
                <p>{app.description}</p>
                <h5>{app.price < 0.5 ? "FREE" : `$ ${app.price}`}</h5>
              </div>
            </div>
          </div>
          {/* end container info */}
          <Starts ratings={app.ratings} />
          <Comments comments={app.comments} />
        </div>

        <div className="app-info__footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false, {})}
          >
            Cerrar
          </button>
          {!app.installed ? (
            <button className="btn btn-success">Instalar</button>
          ) : (
            <button className="btn btn-danger">Desisntalar</button>
          )}
        </div>
      </div>
    </div>
  );
};
