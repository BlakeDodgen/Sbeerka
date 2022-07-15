import React from "react";

const Radio = () => {
    const [status, setStatus] = React.useState(1)


    const radioHandler = (status) => {
        setStatus(status);
    };

    return (
        <div>
            <input type="radio" name="release" checked={status === 1} onClick={(e) => radioHandler(1)} />
            <input type="radio" name="release" checked={status === 2} onClick={(e) => radioHandler(2)} />
            {status === 1 && Status1()}
            {status === 2 && Status2()}
        </div>
    )
}

const Status1 = () => {
    return (
        <>
            <div className="form__container">
                <label id="first-name" className="form__label form__label-name">First Name</label>
                <input className="form__input form__input-name" type="text" name="first_name" value={values.first_name} onChange={handleChange} />
            </div>
            <div className="form__container">
                <label className="form__label form__label-surname">Surname</label>
                <input className="form__input form__input-surname" type="text" name="surname" value={values.surname} onChange={handleChange} />
            </div>
            <div className="form__container">
                <label className="form__label form__label-username">Username</label>
                <input className="form__input form__input-username" type="text" name="username" value={values.username} onChange={handleChange} />
            </div>
        </>
    )
}

const Status2 = () => {
    return (
        <div className="form__container">
            <label className="form__label form__label-breweryname">Brewery Name</label>
            <input className="form__input form__input-breweryname" type="text" name="brewery_name" value={values.brewery_name} onChange={handleChange} />
        </div>
    )
}


//   const Status = () => {
//     const [1, 2]
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }



export default Radio;

// ReactDOM.render(<Search />, document.querySelector("#container"))