import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export const StartsGreen = ({ ratings }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const rating = ratings.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);

    const average = rating / ratings.length;

    setStart(Math.floor(average));
  }, []);
  return (
    <div className="starts">
      {[...Array(5)].map((n, i) =>
        i < start ? (
          <FaStar key={`start-${i}`} color="green" />
        ) : (
          <FaRegStar key={`start-${i}`} color="green" />
        )
      )}
    </div>
  );
};
