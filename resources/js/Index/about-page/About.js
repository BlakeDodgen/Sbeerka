import History from "./History";
import Mission from "./Mission";
import StarRating from "../ratings/StarRating";

const About = () => {
    return (
        <div className="about">
            <Mission />

            <History />
            <StarRating />
        </div>
    );
};

export default About;
