import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BeerProfile = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);

    const loadData = async () => {
        const response = await axios.get(`/api/beers/${id}`);
        // console.log(response.data);
        // if (response.data.reviews == {}) {

        let ratingScore = 0;
        response.data.reviews.forEach((review) => {
            ratingScore += review.rating;
        });
        const avRating = ratingScore / response.data.reviews.length.toFixed(1);

        let bodyScore = 0;
        response.data.reviews.forEach((review) => {
            bodyScore += review.body;
        });
        const avBody = bodyScore / response.data.reviews.length.toFixed(1);

        let lingerScore = 0;
        response.data.reviews.forEach((review) => {
            lingerScore += review.linger;
        });
        const avLinger = lingerScore / response.data.reviews.length.toFixed(1);

        let herbalScore = 0;
        response.data.reviews.forEach((review) => {
            herbalScore += review.herbal;
        });
        const avHerbal = herbalScore / response.data.reviews.length.toFixed(1);

        let citrusScore = 0;
        response.data.reviews.forEach((review) => {
            citrusScore += review.citrus;
        });
        const avCitrus = citrusScore / response.data.reviews.length.toFixed(1);

        let hoppyScore = 0;
        response.data.reviews.forEach((review) => {
            hoppyScore += review.hoppy;
        });
        const avHoppy = hoppyScore / response.data.reviews.length.toFixed(1);

        let bitterScore = 0;
        response.data.reviews.forEach((review) => {
            bitterScore += review.bitter;
        });
        const avBitter = bitterScore / response.data.reviews.length.toFixed(1);

        let sourScore = 0;
        response.data.reviews.forEach((review) => {
            sourScore += review.sour;
        });
        const avSour = sourScore / response.data.reviews.length.toFixed(1);

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
    }, []);

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
                <h2>Reviews:</h2>
                {beer.data.reviews.map((review, i) => (
                    <p key={i}>{review.review}</p>
                ))}
            </div>
        )
    );
};

export default BeerProfile;
