import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreweryResult from "./BreweryResult";

const BreweryResults = (props) => {
    const { search, searchString } = useParams();

    const [data, setData] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    //Hovering effect
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = (e) => {
        setIsHovering(true);
    };
    const handleMouseOut = (e) => {
        setIsHovering(false);
    };

    //parameters search + text passed into the string
    const url = `/api/search?search=breweries&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
    };
    useEffect(() => {
        fetchData();
    }, [props.searchType, searchString]);

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {
        return item.brewery_name
            .toLowerCase()
            .includes(searchString.toLowerCase());
    });

    return (
        <>
            {/* <h1>Tapping results for: <br /> {searchString}</h1> */}

            {/* {isHovering && (
        <div className="hover2">
        <img src={`/img/beers/${props.beer_pic_id}.png`} className="search-result__img" alt="beer-item-img" />
        <p className="search-result__name">{props.name}</p>
        <p className="search-result__brewery">{props.brewery}</p>
        <p className="search-result__type">{props.type}</p>
    <   p className="search-result__rating">Rating</p>
    </div>

            )} */}

            <div
                className="search-results"
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
            >
                {/* loops in the array which contains updated search items */}
                {/* for less displayed results use splice method on array .splice(0,10) */}

                {newSearch.length > 0 ? (
                    newSearch.map((value, index) => {
                        // console.log(value);

                        return (
                            <>
                                <BreweryResult
                                    key={value.id}
                                    name={value.brewery_name}
                                    values={value}
                                    country={value.country}
                                />
                                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}
                                {/* <a className="search__items" key={index} >{value.name} </a> */}
                            </>
                        );
                    })
                ) : (
                    <h2>No breweries were found</h2>
                )}
            </div>
        </>
    );
};

export default BreweryResults;
