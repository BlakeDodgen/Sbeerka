import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import ReactDOM from "react-dom";

const BreweryForm = () => {

    const { user } = useContext(UserContext);

    const [values, setValues] = useState({
        user_id: user.id,
        city: "",
        country: "",
        website: "",
        size: "",
        history: "",
        brewery_pic_id: "",
    });

    const handleChange = (e) => {
        console.log(values)
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await axios.post("/api/breweries/create", values);
        const response_data = response.data;
        console.log(response)
            
        if (typeof res === 'object') {
            console.log(response)
        }

        return navigate("/");
    };

    return (
        <div className="form">
            <h2> Brewery Form </h2>
            <form
                className="form__form"
                // action=""
                method="post"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="form__container">
                    <label className="form__label form__label-city">
                        City:
                    </label>
                    <input
                        className="form__input form__input-city"
                        type="text"
                        value={values.city}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-country">
                        Country:
                    </label>

                    <input
                        className="form__input form__input-country"
                        type="text"
                        value={values.country}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-website">
                        Website:
                    </label>
                    <input
                        className="form__input form__input-website"
                        type="text"
                        value={values.website}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />

                <br />
                <div className="form__container">
                    <label className="form__label form__label-size">
                        Size:
                    </label>
                    <input
                        className="form__input form__input-size"
                        type="text"
                        value={values.size}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-history">
                        History:
                    </label>
                    <input
                        className="form__input form__input-history"
                        type="textarea"
                        value={values.history}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />

                {/* <br />
                <div className="form__container">
                <label
                 className="form__label form__label-image"
                > Upload Image: </label>
                <input
                    className="breweryform__input"
                    type="text"
                    value={value.brewery_pic_id}
                    required
                    onChange={(e) => {
                        handleChange(e);
                    }}
                /> </div>*/}
                <br />
            </form>
            <button>Cheers</button>
        </div>
    );
};

export default BreweryForm;
