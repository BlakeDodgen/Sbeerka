import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeerTypeResult from "./BeerTypeResult";

const BeerTypeResults = (props) => {
    const { search, searchString } = useParams();

    const [data, setData] = useState([]);

    // console.log("props from BTR:" + props.searchType)

    //parameters search + text passed into the string
    const url = `/api/search?search=beer-type&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    // console.log("url from BTR:" + url);

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
        return item.type.toLowerCase().includes(searchString.toLowerCase());
    });

    return (
        <>
            {/* <h1>Tapping results for : <br /> {searchString}</h1> */}

            <div className="search-results">
                {/* loops in the array which contains updated search items */}
                {/* for less displayed results use splice method on array .splice(0,10) */}

                {!!newSearch.length ? (
                    newSearch.map((value, index) => {
                        const beerName = value.beers.map((value, index) => {
                            return value.name;
                        });
                        const beerPic = value.beers.map((value, index) => {
                            return value.beer_pic.picture;
                        });
                        // console.log(beerName);
                        return (
                            <BeerTypeResult
                                key={value.id}
                                link={`/breweries/${value.id}`}
                                name={beerName}
                                values={value}
                                pic={beerPic}
                            />
                            // <Link key={value.id} to={`/beers/${value.id}`}><p> {beerName} / {value.type}</p></Link>
                        );
                    })
                ) : (
                    <h2>This kind of beer type is not on the menu</h2>
                )}
            </div>
        </>
    );
};

export default BeerTypeResults;
