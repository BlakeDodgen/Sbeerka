import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission__container">
                <h2 className="mission__container__title">Our Mission</h2>
                <div className="mission__container_text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Accusantium deserunt inventore cupiditate saepe
                        quaerat consectetur cum architecto vel iusto! Aut esse
                        iure dolorem. Suscipit rerum repudiandae molestiae
                        deserunt nobis consectetur?
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione blanditiis architecto odit, nemo velit dolorem?
                        Maxime est ducimus architecto, nam quasi soluta ea
                        exercitationem expedita sequi sit libero molestias
                        culpa?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
