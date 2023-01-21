import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import "./Starts.css";

export const Starts = ({
  ratings,
  color = "green",
  size = 20,
  showNumber = true,
  align = "center",
}) => {
  const [start, setStart] = useState(0);

  const getColor = () => {
    if (color === "green") {
      if (start <= 2) {
        return "red";
      } else {
        return "green";
      }
    } else {
      return color;
    }
  };

  useEffect(() => {
    if (ratings.length === 0) {
      setStart(0);
    } else {
      const rating = ratings.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0);

      const average = rating / ratings.length;

      setStart(Math.floor(average));
    }
  }, []);

  return (
    <div className={`starts ${align}`}>
      {[...Array(5)].map((n, i) =>
        i < start ? (
          <FaStar key={`start-${i}`} color={getColor()} size={size} />
        ) : (
          <FaRegStar key={`start-${i}`} color={getColor()} size={size} />
        )
      )}
      {showNumber && (
        <span
          className={`starts-number text-${start <= 2 ? "danger" : "success"}`}
        >
          {start.toFixed(1)}
        </span>
      )}
    </div>
  );
};
