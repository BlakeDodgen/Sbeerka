import { useState, useContext } from "react";
import React from "react";
import axios from "axios";
import DiscreteSliderMarks from "../mui/DiscreteSliderMarks";
import { Rating } from 'react-simple-star-rating';
import Button from '@mui/material/Button';

//import Slider from '@mui/material/Slider';


const ReviewForm = ({ user, beer, setReviewed, setGraphValues }) => {

    const [rating, setRating] = useState(0)

    const [values, setValues] = useState({
        review: "",
        rating: 0,
        favorite: 'false',
        body: 5,
        linger: 5,
        sour: 5,
        citrus: 5,
        hoppy: 5,
        bitter: 5,
        herbal: 5,
        user_id: user,
        beer_id: beer
    });

    const [errorResponse, setErrorResponse] = useState(null);

    const handleChange = (e) => {
        console.log(e.target.value); 
        setValues((previous_values) => {
            return {
                ...previous_values,
                // ["rating"] : rating/20,
                [e.target.name]: e.target.value,
            };
        });
        setGraphValues(values);
    };

    const handleLike = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });

    }

    // Catch Rating value
    const handleRating = (rating) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                ['rating']: rating / 20,
            };
        });

    }
    console.log(values);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/reviews/create", values);
        const response_data = response.data;


        if (typeof res === 'object') {

        }
        setReviewed(true);

        // return navigate("/");
    };

    return (
        <>
            <label>Body</label>
            <div className="form-rating">
                <DiscreteSliderMarks
                    value={values.body}
                    setValue={handleChange}
                    name="body"
                />

                <label>Linger</label>
                <DiscreteSliderMarks
                    value={values.linger}
                    setValue={handleChange}
                    name="linger"
                />

                <label>Sour</label>
                <DiscreteSliderMarks
                    value={values.sour}
                    setValue={handleChange}
                    name="sour"
                />

                <label>Citrus</label>
                <DiscreteSliderMarks
                    value={values.citrus}
                    setValue={handleChange}
                    name="citrus"
                />

                <label>Hoppy</label>
                <DiscreteSliderMarks
                    value={values.hoppy}
                    setValue={handleChange}
                    name="hoppy"
                />

                <label>Bitter</label>
                <DiscreteSliderMarks
                    value={values.bitter}
                    setValue={handleChange}
                    name="bitter"
                />

                <label>Herbal</label>
                <DiscreteSliderMarks
                    value={values.herbal}
                    setValue={handleChange}
                    name="herbal"
                />

                <form
                    className="review"
                    action="/beers/review"
                    method="post"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div className="review__container">
                        {!!errorResponse && <span>Login Failed</span>}
                        <label>Review:</label>
                        <textarea
                            placeholder="Tell us how you really feel..."
                            rows="10"
                            name="review"
                            value={values.review}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <label>Rating:</label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            name="rating"
                            value={values.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="body"
                            min="0"
                            max="10"
                            value={values.body}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="linger"
                            min="0"
                            max="10"
                            value={values.linger}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="herbal"
                            min="0"
                            max="10"
                            value={values.herbal}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="citrus"
                            min="0"
                            max="10"
                            value={values.citrus}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="hoppy"
                            min="0"
                            max="10"
                            value={values.hoppy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="bitter"
                            min="0"
                            max="10"
                            value={values.bitter}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="review__container-hidden">
                        <input
                            type="number"
                            name="sour"
                            min="0"
                            max="10"
                            value={values.sour}
                            onChange={handleChange}
                        />
                    </div>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={20}
                        label='false'
                        transition
                        fillColor='#c2702a'
                        emptyColor='#2c2d2d'
                        className='foo' /* Available Props */ />

                    <Button
                     variant="outlined"
                     onClick={handleLike}
                     value={values.favorite==='false'? 'true':'false'}
                     name='favorite'
                     >Like</Button>         


                    {user && <button className="form__button">Submit</button>}

                </form>
            </div>
        </>
    );
};
export default ReviewForm;
