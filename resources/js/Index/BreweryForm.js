import React, { useState } from "react";
import ReactDOM from "react-dom";

const BreweryForm = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [size, setSize] = useState("");
    const [history, setHistory] = useState("");
    // const [image, setimage] = useState("");

    const handleCity = (e) => {
        setCity(e.target.value);
    };
    const handleCountry = (e) => {
        setCountry(e.target.value);
    };
    const handleWebsite = (e) => {
        setWebsite(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleSize = (e) => {
        setSize(e.target.value);
    };
    const handleHistory = (e) => {
        setHistory(e.target.value);
    };

    // const handleImage = (e) => {
    //     setImage(e.target.value);
    // };

    return (
        <div className="form">
            <h2> Sign-up Form </h2>
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
                        value={city}
                        required
                        onChange={(e) => {
                            handleCity(e);
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
                        value={country}
                        required
                        onChange={(e) => {
                            handleCountry(e);
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
                        value={website}
                        required
                        onChange={(e) => {
                            handleWebsite(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-email">
                        Email:
                    </label>
                    <input
                        className="form__input form__input-email"
                        type="text"
                        value={email}
                        required
                        onChange={(e) => {
                            handleEmail(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-size">
                        Size:
                    </label>
                    <input
                        className="form__input form__input-size"
                        type="text"
                        value={size}
                        required
                        onChange={(e) => {
                            handleSize(e);
                        }}
                    />
                </div>
                <br />
                <div className="form__container">
                    <label className="form__label form__label-history">
                        History:
                    </label>
                    <input
                        className="form__input form__input-history"
                        type="text"
                        value={history}
                        required
                        onChange={(e) => {
                            handleHistory(e);
                        }}
                    />
                </div>
                {/* <br />
                <div className="form__container">
                <label
                 className="form__label form__label-image"
                > Upload Image: </label>
                <input
                    className="breweryform__input"
                    type="text"
                    value={image}
                    required
                    onChange={(e) => {
                        handleImage(e);
                    }}
                /> </div>*/}
                <br />
            </form>
            <button>Cheers</button>
        </div>
    );
};

export default BreweryForm;
