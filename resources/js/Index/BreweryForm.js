import React, { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const BreweryForm = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState(null);

    const [values, setValues] = useState({
        user_id: null,
        city: "",
        country: "",
        website: "",
        size: "",
        history: "",
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

    const loadData = async () => {
        if (id) {
            const response = await axios.get(`/api/breweries/${id}`);
            console.log(response.data[0])
            setValues(...response.data);
        }
        
    }

    const handleImage = (e) => {
        console.log(e.target.value)
        setImage(e.target.files[0])
    }

    // console.log(image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        values.user_id = user.id;

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const formData = new FormData();

        formData.append('image', image)
        formData.append('values', JSON.stringify(values))

        const response = await axios.post("/api/breweries/create", formData, options);
        const response_data = response.data;
        console.log(response_data)

        return navigate(`/breweries/${user.id}`);
    };

    useEffect(() => {
        loadData();
    }, [id]);

    return (
        <>
            <h2> Brewery Form </h2>
            <form
                className="form"
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
                        autocomplete="off"
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
                        autocomplete="off"
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
                        autocomplete="off"
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
                        autocomplete="off"
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
                        autocomplete="off"
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div className="form__container">
                    <label
                        className="form__label form__label-image"
                    > Upload Image: </label>
                    <input
                        className="breweryform__input"
                        type="file"

                        name="image"
                        required
                        onChange={handleImage}
                    /> </div>
                <br />
                <button>Cheers</button>
            </form>

        </>
    );
};

export default BreweryForm;