import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryResult from "./CountryResult";

const CountryResults = (props) => {
    const { search,searchString } = useParams();


    const [data, setData] = useState([])
    const [searchItems, setSearchItems] = useState([])
   


    //parameters search + text passed into the string
    const url = `/api/search?search=country&text=${searchString}`;

    // Search
    // General form: http://www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    // Beer search: http://www.sbeerka.beer/api/search?search=beers&text=[search_query]
    // Brewery search: http://www.sbeerka.beer/api/search?search=breweries&text=[search_query]
    // Beer type search: http://www.sbeerka.beer/api/search?search=beer-type&text=[search_query]
    // City search: http://www.sbeerka.beer/api/search?search=city&text=[search_query]
    // Country search: http://www.sbeerka.beer/api/search?search=country&text=[search_query]

    console.log("url from CountryR:" + url);

    const fetchData = async () => {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);

    }
    useEffect(() => {
        fetchData();

    }, [props.searchType, searchString])

    console.log(data);

    //data are fetch after each selection in searchbar
    const newSearch = data.filter((item) => {
  
        return item.country.toLowerCase().includes(searchString.toLowerCase())
       

    });

 
    return (
        <>
            <h1>Tapping results for: <br /> {searchString}</h1>
            {searchItems && (
                <div className="search__result">
            
                    {!!newSearch.length ? (
                        newSearch.map((value, index) => {

                            
                            return (<>

                            <CountryResult key={value.id} link={`/breweries/${value.id}`} name={value.city} values={value} />
                                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.user.brewery_name} / {value.country}</p></Link> */}
                                
                                 {/* <a className="search__items" key={index} >{value.name} </a> */}
                            </>
                            )

                        })
                    ) : <h2>No {search} found</h2>}
                </div>
            )}






        </>
    )
}

export default CountryResults;