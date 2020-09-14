import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rating(props) {
    const handleClick = (rating) => {
        props.onChange(rating)
        setRating(rating)
    }
   
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    

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
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => handleClick(ratingValue)}
                        ></FaStar>

                    </>
                )
            }

            )}

        </div>
    )
}
