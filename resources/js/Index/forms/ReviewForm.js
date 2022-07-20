import { useState, useContext } from "react";
import React from "react";
import axios from "axios";
import DiscreteSliderMarks from "../mui/DiscreteSliderMarks";

//import Slider from '@mui/material/Slider';


const ReviewForm = ({ user, beer, setReviewed, setGraphValues }) => {
   
    const [values, setValues] = useState({
        review: "",
        rating: 5,
        favorite: false,
        body: 5,
        linger: 5,
        herbal: 5,
        citrus: 5,
        hoppy: 5,
        bitter: 5,
        sour: 5,
        user_id: user,
        beer_id: beer
    });
    
    const [errorResponse, setErrorResponse] = useState(null);

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
        setGraphValues(values);
    };

  
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
            <div className="form-rating">
                <DiscreteSliderMarks
                    value={values.body}
                    setValue={handleChange}
                    name="body"
                />

                <DiscreteSliderMarks
                    value={values.linger}
                    setValue={handleChange}
                    name="linger"
                />

                <DiscreteSliderMarks
                    value={values.herbal}
                    setValue={handleChange}
                    name="herbal"
                />

                <DiscreteSliderMarks
                    value={values.citrus}
                    setValue={handleChange}
                    name="citrus"
                />

                <DiscreteSliderMarks
                    value={values.hoppy}
                    setValue={handleChange}
                    name="hoppy"
                />

                <DiscreteSliderMarks
                    value={values.bitter}
                    setValue={handleChange}
                    name="bitter"
                />

                <DiscreteSliderMarks
                    value={values.sour}
                    setValue={handleChange}
                    name="sour"
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
                    <div className="review__container">
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
                    {user && <button className="form__button">Submit</button>}

                </form>
            </div>
        </>
    );
};
export default ReviewForm;
