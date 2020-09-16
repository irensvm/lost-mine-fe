import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating(props) {
  const handleClick = (rating) => {
    if (props.disabled) {
      return;
    }
    props.onChange(rating);
    setRating(rating);
  };
  const handleHover = (rating) => {
    if (props.disabled) {
      return;
    }
    setHover(rating);
  };

  const [rating, setRating] = useState(props.rating);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <>
            <FaStar
              key={ratingValue}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => handleHover(ratingValue)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => handleClick(ratingValue)}
            ></FaStar>
          </>
        );
      })}
    </div>
  );
}
