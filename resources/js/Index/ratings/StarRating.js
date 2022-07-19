import React, { useState } from "react";
import Rating from "react-rating";

function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <div className="rating">
            <h3>
                <a
                    href="https://cluemediator.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
            </h3>

            <strong>Rating</strong>
            <Rating
                fractions={2}
                stop={5}
                initialRating={rating}
                onClick={(rate) => setRating(rate)}
            />
            <p>Rating: {rating}</p>
        </div>
    );
}

export default StarRating;
