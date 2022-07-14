import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

<<<<<<< HEAD
const SearchResults = () => {
    const { search, searchString } = useParams();

    const [data, setData] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
=======

const SearchResults = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    return (
        <>
            <Nav />
=======
    const [data, setData] = useState([])
    const { search, searchString} = useParams();
    // const data = useContext(DataContext);
   
=======
    const {search, searchString} = useParams();
>>>>>>> 2c3c2656fe80d3b86b84fb3e4c7de11f36fc69ec
>>>>>>> feat/homepage

    // console.log("searchstring:"+ searchString)

    //parameters search + text passed into the string
    const url = `http://www.sbeerka.beer/api/search?search=${search}&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    console.log("url:" + url);

    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
    };

    console.log(data);

    //data are fetch after each selection in searchbar
    useEffect(() => {
        fetchData();
    }, [searchItems]);

    const newSearch = data.filter((item) => {
        //return value if true-> if object.name includes search items
        //compare the user input and data-> lowercase both values
        // console.log(item);
        return item.name.toLowerCase().includes(searchString.toLowerCase());
    });

    // setSearchItems(newSearch);
    // if (searchItems === "") {
    //     setSearchItems([]);
    // } else {
    //     setSearchItems(newSearch);
    // }

    return (
        <>
            <h1>{search}</h1>
            {searchItems && (
                <div className="search__result">
                    {/* loops in the array which contains updated search items */}
                    {/* for less displayed results use splice method on array .splice(0,10) */}
                    {newSearch.map((value, index) => {
                        return (
                            <a className="search__items" key={index}>
                                {value.name}{" "}
                            </a>
                        );
                    })}
                </div>
            )}
            {/* map function for list of results */}
            {/* <SearchResult /> */}
            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>
<<<<<<< HEAD
=======
            

>>>>>>> 7ebf932ea7045c847cde81f9250e4410529d0b74
>>>>>>> feat/homepage
        </>
    );
};

export default SearchResults;
