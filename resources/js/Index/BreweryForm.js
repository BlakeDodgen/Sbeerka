import React, { useState } from "react";


const BreweryForm = () => {
    const [values, setValues] = useState({
        city: "",
        country: "",
        website: "",
        size: "",
        history: "",
        brewery_pic_id: "",
        
        // picture can or cannot be sent in this post req??
        //if not second form has to be created
        
    });

    // const handleUpload = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("/.....", values);
    //         const response_data = response.data;
    //     } catch (err) {
    //         console.log(err);
    //     }

       //     return navigate("/....");
    // };

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };



    return (
        <div className="form">
            <h2> Brewery Form </h2>
            <form
                className="form__form"
                // action=""
                method="post"
                enctype="multipart/form-data"
                onSubmit={(e) => {
                    handleUpload(e);
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
                        type="text"
                        value={values.history}
                        required
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <br />

                <br />
                <div className="form__container">
                <label
                 className="form__label form__label-image"
                > Upload Image: </label>
                <input
                    className="breweryform__input"
                    type="file" 
                    name = "picture"
                    required
                    
                /> </div>
                <br />
               
                <button>Cheers</button>
            </form>
            
        </div>
    );
};

export default BreweryForm;
