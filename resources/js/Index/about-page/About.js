import History from "./History";
import Mission from "./Mission";
import Carousel from "../carousel/Carousel";

const About = () => {
    return (
        <div className="about">
            <Mission />

            <History />

            <Carousel />
        </div>
    );
};

export default About;
