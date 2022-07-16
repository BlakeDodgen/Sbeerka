import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const BreweryProfile = () => {

    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    const loadData = async () => {
        const response = await axios.get(`/api/breweries/${id}`);
        console.log(response.data[0])
        setBrewery(response.data[0]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (brewery &&
        <div className="breweryprofile">
            <h1>Brewery Profile</h1>
            <p>Name: {brewery.user.brewery_name}</p>
            <p>City: {brewery.city}</p>
            <p>Country: {brewery.country}</p>
            <p>Website: <a href={brewery.website} target="_blank">{brewery.website}</a></p>
            <p>Size: {brewery.size}</p>
            <p>History: {brewery.history}</p>
            <p>Brewery Picture:</p>
            {/* <img src={`/img/breweries/${brewery.brewery_pic.picture}`} alt="brewery logo" style={{width: "100px"}}/> */}
            <h2>More beers from this brewery:</h2>
            {brewery.beers.map((beer, i) => (
                <div className="beer">
                    <Link to={`/beers/${beer.id}`}><p key={i}>{beer.name}</p></Link>
                    {/* <img src={`/img/beers/${beer.beer_pic.picture}`} alt="beer logo" style={{width: "50px"}}/> */}
            </div>
            ))}
        </div>
    )
}
export default BreweryProfile;