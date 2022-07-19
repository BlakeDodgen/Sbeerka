import React, { useState } from "react";
import axios from "axios";

const BeerForm = ({ brewery, setInputtingBeer }) => {

    const [image, setImage] = useState(null);

    const [values, setValues] = useState({
        brewery_id: brewery,
        beer_type_id: "1",
        name: "",
        alcohol_volume: 0,
        degree: 0,
        description: "",
        // beer_pic_id: 0,
    });

    const handleChange = (e) => {
        if (e.target.files) {
            return setImage(e.target.files[0])
        }
        console.log(values);
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });

    };

    const handleImage = (e) => {
        // console.log(e.target.value)
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const formData = new FormData();

        formData.append('image', image)
        formData.append('values', JSON.stringify(values))

        const response = await axios.post("/api/beers/create", formData, options);
        const response_data = response.data;
        console.log(response_data)

        
        // const response = await axios.post('/api/breweries/create', values);
        // const response_data = response.data;
        // console.log(response)

        // return navigate(`/breweries/${user.id}`);
        setInputtingBeer(false)
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
                        name="beer_type_id"
                        autocomplete="off"
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
                        autocomplete="off"
                        name="name"
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
                        autocomplete="off"
                        name="alcohol_volume"
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
                        name="degree"
                        value={values.degree}
                        autocomplete="off"
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
                        autocomplete="off"
                        required
                        name="description"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <br />
                <div className="form__container">
                    <label className="form__label form__label-image">
                        Upload Image:
                    </label>
                    <input
                        className="form__input form__input-image"
                        type="file"
                        name="image"
                        autocomplete="off"
                        required
                        onChange={handleImage}
                    />
                </div>
                <br />
                <button className="form__button">Add Beer To Sbeerka</button>
                <br />
            </form>

        </>
    );
};

export default BeerForm;
