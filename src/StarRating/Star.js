import React from "react";

const StarRating = ({ rate, handleRate }) => {
  function stars(n) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        star.push(
          <span
            onClick={() => handleRate(i)}
            style={{ color: "yellow", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            onClick={() => handleRate(i)}
            style={{ color: "black", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return star;
  }

  return <div> {stars(rate)}</div>;
};

export default StarRating;
