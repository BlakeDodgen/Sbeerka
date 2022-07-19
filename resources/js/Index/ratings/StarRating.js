import React, { useState } from "react";
import Rating from "react-rating";

function StarRating() {
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);

    return (
        <div className="App">
            <h3>
                Rating Component -{" "}
                <a
                    href="https://cluemediator.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Clue Mediator
                </a>
            </h3>

            <strong>Example 1</strong>
            <Rating
                initialRating={rating1}
                onClick={(rate) => setRating1(rate)}
            />
            <p>Rating: {rating1}</p>

            <strong>Example 2</strong>
            <Rating
                fractions={2}
                stop={10}
                initialRating={rating2}
                onClick={(rate) => setRating2(rate)}
            />
            <p>Rating: {rating2}</p>
        </div>
    );
}

export default StarRating;
