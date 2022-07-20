import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
// import { Rings } from 'react-loader-spinner';

const SearchResults = (props) => {
    const { search, searchString } = useParams();

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [searchItems, setSearchItems] = useState([])

    //parameters search + text passed into the string
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
    }



    // setLoading(false);



    useEffect(() => {
        fetchData();

    }, [search, searchString])

    

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {

        return item.name.toLowerCase().includes(searchString.toLowerCase())


    });

    // setSearchItems(newSearch);

    //  setSearchItems(newSearch);
    //  if (searchItems === "") {
    //      setSearchItems([]);
    //  } else {
    //      setSearchItems(newSearch);
    //  }

    ///HOVERing /////////

    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = (e) => {
    //     setIsHovering(true);
    // }

    // const handleMouseOut = (e) => {
    //     setIsHovering(false);
    // }

    return (
        <>
            <h1>Tapping results for: <br /> {searchString}</h1>

            <div className="search-results">
                {/* loops in the array which contains updated search items */}
                {/* for less displayed results use splice method on array .splice(0,10) */}
                {/* {loading && <Rings
                    height="100"
                    width="100"
                    color='#19a991'
                    ariaLabel='loading'
                />} */}
                {!!newSearch.length ? (
                    newSearch.map((value, index) => {


                        return (

                            <SearchResult key={index}
                                name={search === "beer-type" ? value.type : value.name}
                                beer_pic_id={value.beer_pic_id}
                                brewery={value.brewery.user.brewery_name}
                                type={value.beer_type.type}
                                beer_id={value.id}
                                brewery_id={value.brewery_id}
                            // handleMouseOver ={handleMouseOver}
                            // handleMouseOut = {handleMouseOut}
                            />

                            // <a className="search__items" key={index} >{value.name} </a>
                        )

                    })
                ) : <h2>No {search} found</h2>}
            </div>
        </>
    );
};

export default SearchResults;
