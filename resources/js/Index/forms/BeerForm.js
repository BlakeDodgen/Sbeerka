import React, { useState } from "react";
import ReactDOM from "react-dom";

const BeerForm = () => {
    // const navigate = useNavigate();
    const [values, setValues] = useState({
        beer_type_id: "",
        name: "",
        alcohol_volume: 0,
        degree: 0,
        description: "",
        // beer_pic_id: 0,
    });

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };
    return (
        <>
            <form
                className="form"
                // action=""
                method="post"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <h2 className="form__h2">Beer Form</h2>
                <div className="form__container">
                    <label className="form__label form__label-beerType">
                        Beer Type:
                    </label>
                    <input
                        className="form__input form__input-beerType"
                        type="text"
                        value={values.beer_type_id}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-name">
                        Name:
                    </label>

                    <input
                        className="form__input form__input-name"
                        type="text"
                        value={values.name}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-alcoholVolume">
                        Alcohol Volume:
                    </label>
                    <input
                        className="form__input form__input-alcoholVolume"
                        type="number"
                        value={values.alcohol_volume}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-degree">
                        Degree:
                    </label>
                    <input
                        className="form__input form__input-degree"
                        type="number"
                        value={values.degree}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-description">
                        Description:
                    </label>
                    <input
                        className="form__input form__input-description"
                        type="text"
                        value={values.description}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                {/* <br />
                <div className="form__container">
                    <label className="form__label form__label-image">
                        Upload Image:
                    </label>
                    <input
                        className="form__input form__input-image"
                        type="number"
                        value={values.beer_pic_id}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div> */}
                <br />
                <button className="form__button">Add Beer To Sbeerka</button>
                <br />
            </form>

        </>
    );
};

export default BeerForm;
