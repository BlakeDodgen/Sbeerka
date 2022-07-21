import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "./Index/UserContext";

const BeerCollection = (props) => {

    const [ beers, setBeers] = useState(null);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    const loadData = async () => {
        const response = await axios.get(`/api/reviews/favorites/${id}`);
        console.log(response.data);
        setBeers(response.data)
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            {/* <h1>Tapping results for : <br /> {searchString}</h1> */}

            <div className="search__results">
                <h2>Beer Collection</h2>
                {/* loops in the array which contains updated search items */}
                {/* for less displayed results use splice method on array .splice(0,10) */}

                {!!newSearch.length ? (
                    newSearch.map((value, index) => {
                        const beerName = value.beers.map((value, index) => {
                            return value.name

                        })
                        const beerPic = value.beers.map((value, index) => {
                            return value.beer_pic.picture

                        })
                        console.log(beerName);
                        return (

                            <BeerTypeResult
                                key={value.id} link={`/breweries/${value.id}`} name={beerName} values={value}
                                pic={beerPic} />
                            // <Link key={value.id} to={`/beers/${value.id}`}><p> {beerName} / {value.type}</p></Link>

                        )

                    })
                ) : <h2>This kind of beer type is not on the menu</h2>}
            </div>
        </>
    )
};

export default BeerCollection;