import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import BeerData from "./Data.json"; 

function SearchBar() {

    // default value after render is set as Search All
    const [search, setSearch] = useState("beername");
    const [data, setData] = useState([])

    //function changes state when option is selected
    const handleSearchChange = (e) => {
        
        setSearch(e.target.value);
        console.log(e.target.value);
    }

   

////////// logic for fetch request will go here and pass the data via props/////////////////
    const url = '';

    const fetchData = async() => {
        const response = await fetch(BeerData);
        const parsedData = await response.json();
        setData(parsedData);
    }
    
    useEffect(()=> {
        fetchData();

    },[search])


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
            <SearchInput search={search} data={data} placeholder="Sbeerka beer search"/>
        </div>
    )
}

export default SearchBar;