import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import ReactDOM from "react-dom";

const BreweryForm = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [number, setNumber] = useState(0);

    const [values, setValues] = useState({
        user_id: null,
        city: "",
        country: "",
        website: "",
        size: "",
        history: "",
        brewery_pic_id: ""
    });

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        values.user_id = user.id;
        console.log(values)
        const response = await axios.post("/api/breweries/create", values);
        const response_data = response.data;
        console.log(response)
            
        if (typeof res === 'object') {
            console.log(response)
        }

        return navigate(`/breweries/${number + 1}`);
    };

    const loadData = async () => {
        const responseData = await axios.get(`/api/breweries/number`);
        setNumber(responseData.data);
    };

    useEffect(() => {
        loadData();
    }, []);

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
                        name="city"
                        value={values.city}
                        onChange={handleChange}
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
                        name="country"
                        value={values.country}
                        onChange={handleChange}
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
                        name="website"
                        value={values.website}
                        onChange={handleChange}
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
                        name="size"
                        value={values.size}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-history">
                        History:
                    </label>
                    <input
                        className="form__input form__input-history"
                        type="textarea"
                        name="history"
                        value={values.history}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <br />
                {/* <div className="form__container">
                <label
                 className="form__label form__label-image"
                > Upload Image: </label>
                <input
                    className="breweryform__input"
                    type="text"
                    value={value.brewery_pic_id}
                    name="brewery_pic"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                /> </div> */}
                <br />
                <button>Cheers</button>
            </form>
            
        </div>
    );
};

export default BreweryForm;
