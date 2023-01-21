import React, { useState } from "react";

const urlBase = "http://localhost:8080/app-screenshots/";
const defaultScreenshots = ["1.webp", "2.webp", "3.webp"];

import "./CarruselScreenshots.css";

export const CarruselScreenshots = ({ screenshots }) => {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active === 0) {
      return;
    } else {
      setActive(active - 1);
    }
  };

  const handleNext = (index) => {
    if (active === defaultScreenshots.length - 1) {
      return;
    } else {
      setActive(active + 1);
    }
  };
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {defaultScreenshots.map((screenshot, index) => {
          return (
            <div
              key={`screenshot-${index}`}
              className={`carousel-item ${active === index ? "active" : ""} `}
            >
              <img
                src={`${urlBase}${screenshot}`}
                className="d-block w-100"
                alt={`screenshot${index}`}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        onClick={handleNext}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};
