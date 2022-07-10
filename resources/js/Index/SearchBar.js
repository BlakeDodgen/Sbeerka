import { useState } from "react";

function SearchBar() {

    // default value after render is set as Search All
    const [search, setSearch] = useState("All");

    //function changes state when option is selected
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    
    return (
        <div className="search">
            {/* create a new component ?? */}
            <select value={search} onChange={handleSearchChange}>
                <option value="all">ALL</option>
                <option value="breweries">Breweries</option>
                <option value="beer">Beer</option>
                <option value="flavors">Flavors</option>
                <option value="alcohol-content">Alcohol Content</option>
                <option value="beer-type">Beer Type</option>  
                <option value="random-beer">Random Beer</option>               
            </select>
            <input type="text" name="search" onChange={(event) => setSearchQuery(event.target.value)} value="" />
        </div>
    )
}

export default SearchBar;