import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
// import { Rings } from 'react-loader-spinner';

const SearchResults = (props) => {
    const { search, searchString } = useParams();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    // console.log(data.length);

    const url = `/api/search?search=${search}&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    // setLoading(true);
    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
    };

    // setLoading(false);

    useEffect(() => {
        fetchData();
    }, [search, searchString]);

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
    });

    return (
        <>
            {/* <h1>Tapping results for: <br /> {searchString}</h1> */}

            <div className="search-results">
                {/* {loading && <Rings
                    height="100"
                    width="100"
                    color='#19a991'
                    ariaLabel='loading'
                />} */}
                {data.length > 0 ? (
                    newSearch.map((value, index) => {
                        return (
                            <SearchResult
                                key={index}
                                name={
                                    search === "beer-type"
                                        ? value.type
                                        : value.name
                                }
                                beer_pic_id={value.beer_pic_id}
                                brewery={value.brewery.user.brewery_name}
                                type={value.beer_type.type}
                                beer_id={value.id}
                                brewery_id={value.brewery_id}
                                alcohol_volume={value.alcohol_volume}
                                degree={value.degree}
                                // handleMouseOver ={handleMouseOver}
                                // handleMouseOut = {handleMouseOut}
                            />

                            // <a className="search__items" key={index} >{value.name} </a>
                        );
                    })
                ) : (
                    <h2>No {search} found</h2>
                )}
            </div>
        </>
    );
};

export default SearchResults;
