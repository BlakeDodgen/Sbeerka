import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import BeerForm from "./forms/BeerForm";

const BreweryProfile = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);
    const { user } = useContext(UserContext);
    const [inputtingBeer, setInputtingBeer] = useState(false);

    const loadData = async () => {
        const response = await axios.get(`/api/breweries/${id}`);
        console.log(response.data[0]);
        setBrewery(response.data[0]);
    };

    useEffect(() => {
        loadData();
    }, [inputtingBeer]);

    const beerInputClickHandler = () => {
        setInputtingBeer(true);
    };

    return (
        brewery && (
            <div className="breweryprofile">
                <div className="breweryprofile__container">

                    <div className="breweryprofile__content">
                        <h1>{brewery.user.brewery_name}</h1>
                        <p><em>{brewery.city}, {brewery.country}</em></p>
                        <p>
                            Website:{" "}
                            <a href={brewery.website} target="_blank">
                                {brewery.website}
                            </a>
                        </p>
                        <p>{brewery.history}</p>
                        <img className="breweryprofile__image"
                            src={`/img/breweries/${brewery.brewery_pic.picture}`}
                            alt="brewery logo"
                            style={{ width: "100px" }}
                        />

                    </div>
                    {(user && user.id == brewery.user_id) && <Link to={`/edit/brewery/${user.id}`}><button className="edit__button">EDIT PROFILE INFORMATION</button></Link>}
                </div>


                <h2>More beers from this brewery:</h2>
                {user &&
                    user.id == brewery.user_id &&
                    inputtingBeer == false && (
                        <button className="add-beer__button" onClick={beerInputClickHandler}>
                            Add a beer
                        </button>
                    )}
                {inputtingBeer == true && (
                    <BeerForm
                        brewery={brewery.id}
                        setInputtingBeer={setInputtingBeer}
                    />
                )}
                {brewery.beers.map((beer, i) => (
                    <div className="search-result__container">
                        <p className="search-result__name">
                            <Link to={`/beers/${beer.id}`}>
                                <p key={i}>{beer.name}</p>
                            </Link>
                        </p>
                        {/* <img src={`/img/beers/${beer.beer_pic.picture}`} alt="beer logo" style={{width: "50px"}}/> */}
                    </div>

                ))
                }
            </div >
        )
    );
};
export default BreweryProfile;
