import { useState, useContext } from "react";
import React from "react";
import axios from "axios";
import DiscreteSliderMarks from "../mui/DiscreteSliderMarks";
//import Slider from '@mui/material/Slider';


const ReviewForm = ({ user, beer, averageValues, setReviewed, setGraphValues }) => {

    const [values, setValues] = useState({
        review: 0,
        rating: 0,
        // favorite: false,
        // body: averageValues.body,
        // linger: averageValues.linger,
        // herbal: averageValues.herbal,
        // citrus: averageValues.citrus,
        // hoppy: averageValues.hoppy,
        // bitter: averageValues.bitter,
        // sour: averageValues.sour,
        // user_id: user,
        // beer_id: beer
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

    // console.log(values);
    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await axios.post("/api/reviews/create", values);
        const response_data = response.data;
        console.log(response)

        if (typeof res === 'object') {
            console.log(response)
        }
        setReviewed(true);

        // return navigate("/");
    };

    return (

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
                className="form"
                action="/beers/review"
                method="post"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >

                <div className="form__container">
                    {
                        !!errorResponse && <span>Login Failed</span>
                    }
                    <label className="form__label form__label-review">
                        Review:
                    </label>
                    <textarea
                        className="form__input form__input-review"
                        placeholder="Tell us how you really feel..."
                        rows="10"
                        name="review"
                        value={values.review}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-rating">
                        Rating:
                    </label>
                    <input
                        className="form__input form__input-rating"
                        type="number"
                        min="0"
                        max="10"
                        name="rating"
                        value={values.rating}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-body">
                        Body:
                    </label>
                    <input
                        className="form__input form__input-body"
                        type="number"
                        name="body"
                        min="0"
                        max="10"
                        value={values.body}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-linger">
                        Linger:
                    </label>
                    <input
                        className="form__input form__input-linger"
                        type="number"
                        name="linger"
                        min="0"
                        max="10"
                        value={values.linger}
                        onChange={handleChange}
                    />
                </div>

                <div className="form__container">
                    <label className="form__label form__label-herbal">
                        Herbal:
                    </label>
                    <input
                        className="form__input form__input-herbal"
                        type="number"
                        name="herbal"
                        min="0"
                        max="10"
                        value={values.herbal}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-citrus">
                        Citrus:
                    </label>
                    <input
                        className="form__input form__input-citrus"
                        type="number"
                        name="citrus"
                        min="0"
                        max="10"
                        value={values.citrus}
                        onChange={handleChange}
                    />
                </div>

                <div className="form__container">
                    <label className="form__label form__label-hoppy">
                        Hoppy:
                    </label>
                    <input
                        className="form__input form__input-hoppy"
                        type="number"
                        name="hoppy"
                        min="0"
                        max="10"
                        value={values.hoppy}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-bitter">
                        Bitter:
                    </label>
                    <input
                        className="form__input form__input-bitter"
                        type="number"
                        name="bitter"
                        min="0"
                        max="10"
                        value={values.bitter}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-sour">
                        Sour:
                    </label>
                    <input
                        className="form__input form__input-sour"
                        type="number"
                        name="sour"
                        min="0"
                        max="10"
                        value={values.sour}
                        onChange={handleChange}
                    />
                </div>

                <button className="form__button">Submit</button>
            </form>
        </div>
    );
};
export default ReviewForm;
