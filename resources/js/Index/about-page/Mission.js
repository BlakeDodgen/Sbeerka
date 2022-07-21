import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Mission = () => {
    return (
        <div className="mission">
            {/* <h2 className="mission__container__title">Our Mission</h2> */}
            <div className="mission__container_text">
                <h2 className="mission__container__title">Our Mission</h2>
                <p>
                    Sbeerka is an app that allows beer connoisseurs to rate
                    beers and allows craft breweries to present their beers
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione blanditiis architecto odit, nemo velit dolorem?
                    Maxime est ducimus architecto, nam quasi soluta ea
                    exercitationem expedita sequi sit libero molestias culpa?
                </p>
            </div>
        </div>
    );
};

export default Mission;
