import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";

const BeerCollection = (props) => {

    const [beers, setBeers] = useState(null);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    const loadData = async () => {
        const response = await axios.get(`/api/reviews/favorites/${id}`);
        // console.log(response.data);
        setBeers(response.data)
    };

    useEffect(() => {
        loadData();
    }, []);
    //same se beer results
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovering(true);
    }

    const handleMouseOut = (e) => {
        setIsHovering(false);
    }
    return (

        <>
            <h1>Beer Collection</h1>
            {/* <h1>My Favorites: <br /> {searchString}</h1> */}

            <div className="search-results">
                {/* <h2>Beer Collection</h2> */}
                {/* loops in the array which contains updated search items */}
                {/* for less displayed results use splice method on array .splice(0,10) */}

                {!!beers ? (



                    beers.map((value, index) => {

                        console.log(value)
                        return (<>
                            
                      
                            <div className="search-result"
                                
                            >
                                <Link to={`/beers/${value.beer.id}`}>
                                    <div className="search-result__container">
                                        <div className="search-result__img-card"
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                            <img className="search-result__img" src={`/img/beers/${value.beer.beer_pic_id}.png`} alt="beer-item-img" />
                                        </div>
                                        <p className="search-result__name">
                                            <strong>{value.beer.name}</strong><br />
                                            <em>{value.beer.alcohol_volume}% Alcohol By Volume | {value.review}</em>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </>
                        )
                     
                    })
                ) : <h2>No beers in collection</h2>}
            </div>
        </>
    )
};

export default BeerCollection;