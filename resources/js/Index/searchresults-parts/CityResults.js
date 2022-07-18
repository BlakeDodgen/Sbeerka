import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CityResults = (props) => {
    const { search, searchString } = useParams();


    const [data, setData] = useState([])
    const [searchItems, setSearchItems] = useState([])

    //parameters search + text passed into the string
    const url = `http://www.sbeerka.beer/api/search?search=city&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    console.log("url from CR:" + url);

    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);

    }
    useEffect(() => {
        fetchData();

    }, [props.searchType, searchString])

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {

        return item.city.toLowerCase().includes(searchString.toLowerCase())
        // }

    });

    return (
        <>
            <h1>Tapping results for: <br /> {searchString}</h1>
            <div className="search__result">

                {/* for less displayed results use splice method on array .splice(0,10) */}

                {!!newSearch.length ? (
                    newSearch.map((value, index) => {

                        return (
                            <Link key={value.id} to={`/breweries/${value.user.id}`}><p>{value.user.brewery_name} / {value.city}</p></Link>
                        )

                    })
                ) : <h2>From this city we dont have a brewery</h2>}
            </div>







        </>
    )
}

export default CityResults;