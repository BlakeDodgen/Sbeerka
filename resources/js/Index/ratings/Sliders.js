import DiscreteSliderMarks from "./mui/DiscreteSliderMarks";
import { useState } from "react";

const Sliders = () => {
    const [values, setValues] = useState({
        favorite: false,
        body: 5,
        linger: 5,
        herbal: 5,
        citrus: 5,
        hoppy: 5,
        bitter: 5,
        sour: 5,
    });
    return (
        <div className="slider">
            <div className="slider__body">
                <p>Body</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__linger">
                <p>Linger</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__herbal">
                <p>Herbal</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__citrus">
                <p>Citrus</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__hoppy">
                <p>Hoppy</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__bitter">
                <p>Bitter</p>
                <DiscreteSliderMarks />
            </div>
            <div className="slider__sour">
                <p>Sour</p>
                <DiscreteSliderMarks />
            </div>
        </div>
    );
};

export default Sliders;
