import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";




const SearchResults = (props) => {
    const { search, searchString } = useParams();


    const [data, setData] = useState([])
    const [searchItems, setSearchItems] = useState([])
    // const [searchType, setSearchType] = useState(props.searchType);


    console.log("props from SR:" + props.searchType)


    //parameters search + text passed into the string
    const url = `http://www.sbeerka.beer/api/search?search=${search}&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    console.log("url from SR:" + url);

    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);

    }
    useEffect(() => {
        fetchData();

    }, [search, searchString])

    console.log(data);

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {
        //return value if true-> if object.name includes search items
        //compare the user input and data-> lowercase both values
        // console.log(item);
        // if (search === "beer-type") {
        //     return item.type.toLowerCase().includes(searchString.toLowerCase())
        // } if (search === "beers") {
        return item.name.toLowerCase().includes(searchString.toLowerCase())
        // }

    });

    // setSearchItems(newSearch);

    //  setSearchItems(newSearch);
    //  if (searchItems === "") {
    //      setSearchItems([]);
    //  } else {
    //      setSearchItems(newSearch);
    //  }

    return (
        <>
            <h1>{search}</h1>
            {searchItems && (
                <div className="search-results">
                    {/* loops in the array which contains updated search items */}
                    {/* for less displayed results use splice method on array .splice(0,10) */}

                    {!!newSearch.length ? (
                        newSearch.map((value, index) => {


                            return (
                                <SearchResult key={index}
                                    name={search === "beer-type" ? value.type : value.name}
                                    beer_pic_id={value.beer_pic_id}
                                    brewery={value.brewery.user.brewery_name}
                                    type={value.beer_type.type}
                                />
                                // <a className="search__items" key={index} >{value.name} </a>
                            )

                        })
                    ) : <h2>No {search} found</h2>}
                </div>
            )}






        </>
    );
};

export default SearchResults;
