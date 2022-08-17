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
          <FaStar key={`start-${i}`} color={color} size={size} />
        ) : (
          <FaRegStar key={`start-${i}`} color={color} size={size} />
        )
      )}
      {showNumber && <span className="starts-number">{start.toFixed(1)}</span>}
    </div>
  );
};
