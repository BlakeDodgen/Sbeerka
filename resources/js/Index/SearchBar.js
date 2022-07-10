import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import BeerData from "./Data.json"; 

function SearchBar({placeholder, data}) {

    // default value after render is set as Search All
    const [search, setSearch] = useState("beername");

    //function changes state when option is selected
    const handleSearchChange = (e) => {
        
        setSearch(e.target.value);
        console.log(e.target.value);
    }

   

////////// logic for fetch request will go here and pass the data via props/////////////////

    

    return (
        <div className="search">
            {/* create a new component ?? */}
            <select value={search} onChange={handleSearchChange}>
                <option value="all">ALL</option>
                <option value="breweries">Breweries</option>
                <option value="beername">Beer</option>
                <option value="city">City</option>
                <option value="flavors">Flavors</option>
                <option value="alcohol-content">Alcohol Content</option>
                <option value="beer-type">Beer Type</option>
                <option value="random-beer">Random Beer</option>
            </select>

            {/*input elemement as Component , data are passed with props ?? */}
            <SearchInput search={search} data={BeerData} placeholder="Sbeerka beer search"/>
        </div>
    )
}

export default SearchBar;