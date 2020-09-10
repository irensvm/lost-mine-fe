import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rating() {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            name="rating"
                            className="rat-input"
                            type="radio"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        ></input>
                        <FaStar
                            className="star"
                            color={ratingValue < (hover || rating) ? "#ffc107" :  "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        ></FaStar>


                    </label>
                )
            }

            )}

        </div>
    )
}
