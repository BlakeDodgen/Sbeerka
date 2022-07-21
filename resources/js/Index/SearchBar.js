import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";


function SearchBar(props) {

    // default value is set as Search Beers - Select handles different options
    const [search, setSearch] = useState("beers");

    //fetched response is saved as an array in this state
    const [data, setData] = useState([]);

    //function updates state after select is made
    const handleSearchChange = (e) => {
        props.setSearchType(e.target.value)
        setSearch(e.target.value);
        
    };    
    
    return (

        <>
            <div className="search">
                {/* create a new component ?? */}

                <div className="search__categories">
                    <select value={search} onChange={handleSearchChange}>
                        <option value="breweries">Breweries</option>
                        <option value="beers">Beer</option>
                        <option value="city">City</option>
                        <option value="country">Country</option>
                        <option value="beer-type">Beer Type</option>
                        {/* <option value="random-beer">Random Beer</option> */}
                    </select>
                </div>

                <SearchInput search={search} data={data} autocomplete="off" />

            </div>
        </>

    );
}

export default SearchBar;
