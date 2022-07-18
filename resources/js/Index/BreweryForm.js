import React, { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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

        //brewery_pic: "",

        // picture can or cannot be sent in this post req??
        //images uses 
        //if not second form has to be created

    });
    // new state for Image
    const [image, setImage] = useState(null);

    // const handleUpload = async (e) => {
    //     e.preventDefault();
    //     const formdata = new FormData();
    //     formData.append("image", image);   
    //     
    //     try {
    //         const response = await axios.post("/.....", formdata);
    //         const response_data = response.data;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
        setImage(e.target.files[0])
    }

    console.log(image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        values.user_id = user.id;
<<<<<<< HEAD

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

        return navigate(`/breweries/${number + 1}`);
=======
        const response = await axios.post('/api/breweries/create', values);
        const response_data = response.data;
        console.log(response)

        return navigate(`/breweries/${user.id}`);
>>>>>>> main
    };

    const loadData = async () => {
        const responseData = await axios.get(`/api/breweries/number`);
        setNumber(responseData.data);
    }

    useEffect(() => {
        loadData();
    }, []);

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
<<<<<<< HEAD

                        name="image"
=======
                        name="brewery_pic"
                        autocomplete="off"
>>>>>>> main
                        onChange={handleImage}
                    /> </div>
                <br />
                <button>Cheers</button>
            </form>

        </>
    );
};

export default BreweryForm;