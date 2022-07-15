import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import ReviewForm from "./forms/ReviewForm";

const BeerProfile = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);
    const { user } = useContext(UserContext);
    const [reviewed, setReviewed] = useState(false);

    const loadData = async () => {
        const response = await axios.get(`/api/beers/${id}`);
        // console.log(response.data);
        // if (response.data.reviews == {}) {
        response.data.reviews.forEach((review) => {
            if (user && (review.user_id == user.id)) {
                setReviewed(true);
            }
        })

        let ratingScore = 0;
        response.data.reviews.forEach((review) => {
            ratingScore += review.rating;
        });
        let avRating = ratingScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avRating)) {
            avRating = 0;
        }

        let bodyScore = 0;
        response.data.reviews.forEach((review) => {
            bodyScore += review.body;
        });
        let avBody = bodyScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avBody)) {
            avBody = 0;
        }

        let lingerScore = 0;
        response.data.reviews.forEach((review) => {
            lingerScore += review.linger;
        });
        
        let avLinger = lingerScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avLinger)) {
            avLinger = 0;
        }

        let herbalScore = 0;
        response.data.reviews.forEach((review) => {
            herbalScore += review.herbal;
        });
        let avHerbal = herbalScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avHerbal)) {
            avHerbal = 0;
        }

        let citrusScore = 0;
        response.data.reviews.forEach((review) => {
            citrusScore += review.citrus;
        });
        let avCitrus = citrusScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avCitrus)) {
            avCitrus = 0;
        }

        let hoppyScore = 0;
        response.data.reviews.forEach((review) => {
            hoppyScore += review.hoppy;
        });
        let avHoppy = hoppyScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avHoppy)) {
            avHoppy = 0;
        }

        let bitterScore = 0;
        response.data.reviews.forEach((review) => {
            bitterScore += review.bitter;
        });
        let avBitter = bitterScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avBitter)) {
            avBitter = 0;
        }

        let sourScore = 0;
        response.data.reviews.forEach((review) => {
            sourScore += review.sour;
        });
        let avSour = sourScore / response.data.reviews.length.toFixed(1);
        if (isNaN(avSour)) {
            avSour = 0;
        }

        setBeer({
            data: response.data,
            averages: {
                rating: avRating.toFixed(1),
                body: avBody.toFixed(1),
                linger: avLinger.toFixed(1),
                herbal: avHerbal.toFixed(1),
                citrus: avCitrus.toFixed(1),
                hoppy: avHoppy.toFixed(1),
                bitter: avBitter.toFixed(1),
                sour: avSour.toFixed(1),
            },
        });
        // } else {
        //     setBeer({data: response.data, averages: {rating: 0, body: 0, linger: 0, herbal: 0, citrus: 0, hoppy: 0, bitter: 0, sour: 0}})
        // }
    };

    useEffect(() => {
        loadData();
    }, [reviewed]);

    return (
        beer && (
            <div className="beerprofile">
                <h1>Beer Profile</h1>
                <p>Name: {beer.data.name}</p>
                <p>
                    Brewery:{" "}
                    <Link to={`/breweries/${beer.data.brewery.id}`}>
                        {beer.data.brewery.user.brewery_name}
                    </Link>
                </p>
                <p>Brewery Picture:</p>
                {/* <img src={`/img/breweries/${beer.data.brewery.brewery_pic.picture}`} alt="brewery logo"/> */}
                <p>Alcohol Volume: {beer.data.alcohol_volume}</p>
                <p>Degree: {beer.data.degree}</p>
                <p>Description: {beer.data.description}</p>
                <p>Beer Picture:</p>
                {/* <img src={`/img/beers/${beer.data.beer_pic.picture}`} alt="beer logo"/> */}
                {/* <p>Average Beer Rating: {beer.averages.rating}</p>
        <p>Average Body Rating: {beer.averages.body}</p>
        <p>Average Linger Rating: {beer.averages.linger}</p>
        <p>Average Herbal Rating: {beer.averages.herbal}</p>
        <p>Average Citrus Rating: {beer.averages.citrus}</p>
        <p>Average Hoppy Rating: {beer.averages.hoppy}</p>
        <p>Average Bitter Rating: {beer.averages.bitter}</p>
        <p>Average Sour Rating: {beer.averages.sour}</p> */}
                {user && (user.user_type == 1 || user.user_type == 3) && (reviewed == false) && <ReviewForm user={user.id} beer={beer.data.id} setReviewed={setReviewed}/>}
                <h2>Reviews:</h2>
                {beer.data.reviews.map((review, i) => (
                    <p key={i}>{review.review}</p>
                ))}
            </div>
        )
    );
};

export default BeerProfile;
