import React, { useState } from "react";
import ReactDOM from "react-dom";

const BeerForm = () => {
    const navigate = useNavigate();
    const  [values, setValues]  = useContext(UserContext);

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });

    return (
        <div className="form">
            <h2> Beer Form </h2>
            <form
                className="form__form"
                // action=""
                method="post"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="form__container">
                    <label className="form__label form__label-beerType">
                        Beer Type:
                    </label>
                    <input
                        className="form__input form__input-beerType"
                        type="text"
                        value={beerTypeId}
                        required
                        onChange={(e) => {
                            handleBeerTypeId(e);
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
                        value={name}
                        required
                        onChange={(e) => {
                            handleName(e);
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
                        type="text"
                        value={alcoholVolume}
                        required
                        onChange={(e) => {
                            handleAlcoholVolume(e);
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
                        type="text"
                        value={degree}
                        required
                        onChange={(e) => {
                            handleDegree(e);
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
                        value={description}
                        required
                        onChange={(e) => {
                            handleDescription(e);
                        }}
                    />
                </div>
                {/* <br />
                <div className="form__container">
                    <label className="form__label form__label-beerPicId">
                        History:
                    </label>
                    <input
                        className="form__input form__input-beerPicId"
                        type="text"
                        value={beerPicId}
                        required
                        onChange={(e) => {
                            handleBeerPicId(e);
                        }}
                    />
                </div> */}
                <br />
            </form>
            <button>Cheers</button>
        </div>
    );
};

export default BeerForm;
