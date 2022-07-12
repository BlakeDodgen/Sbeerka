import { useState, useEffect, createContext } from "react";
import SearchInput from "./SearchInput";

function SearchBar() {
    // default value is set as Search All - state handles different options
    const [search, setSearch] = useState("all");

    //fetched response is saved as an array in this state
    const [data, setData] = useState([]);

    //function changes state of search req in select
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        console.log("select:" + e.target.value);
    };

    // logic for fetch request will go here and pass the data via props//
    //choose url according to selected value
    const urlSpecific = `http://www.sbeerka.beer/api/${search}`;
    const urlAll = "";
    console.log("search:" + search);
    console.log("urlspecific:" + urlSpecific);

    const fetchData = async () => {
        const response = await fetch(urlSpecific);
        //   !search === "all" ? urlSpecific : urlAll
        const parsedData = await response.json();
        setData(parsedData);
        console.log(parsedData);
    };

    //data are fetch after each selection in searchbar
    useEffect(() => {
        fetchData();
    }, [search]);

    return (
        <div className="search">
            {/* create a new component ?? */}
            <select value={search} onChange={handleSearchChange}>
                <option value="all">ALL</option>
                <option value="breweries">Breweries</option>
                <option value="beers">Beer</option>
                <option value="city">City</option>
                <option value="flavors">Flavors</option>
                <option value="alcohol-content">Alcohol Content</option>
                <option value="beer-type">Beer Type</option>
                <option value="random-beer">Random Beer</option>
            </select>

            {/*input element as Component , data are passed with props */}
            <SearchInput
                search={search}
                data={data}
                placeholder="Sbeerka beer search"
            />
        </div>
    );
}

export default SearchBar;
