import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";



function SearchBar(props) {

    // default value is set as Search Beers - Select handles different options
    const [search, setSearch] = useState("beers");

    //fetched response is saved as an array in this state
    const [data, setData] = useState([])

    //function updates state after select is made 
    const handleSearchChange = (e) => {
        props.setSearchType(e.target.value)
        setSearch(e.target.value);
        console.log("select:" + e.target.value);
    }



    //chooses url according to selected value in state ,,search,,
    // const urlSpecific = `http://www.sbeerka.beer/api/string/${search}`;
    //www.sbeerka.beer/api/search?search=[search_type]&text=[search_query]
    //const urlAll = '';
    // console.log("search:"+ search);
    // console.log("urlspecific:"+ urlSpecific);

    // const fetchData = async () => {
    //     const response = await fetch(urlSpecific);
    //     //   !search === "all" ? urlSpecific : urlAll
    //     const parsedData = await response.json();
    //     const dataLowerCase = parsedData.map((item) => {
    //         return item.toLowerCase();
    //     })


    //     setData(parsedData);

    // }

    //data are fetch after each selection in searchbar
    // useEffect(() => {
    //     fetchData();

    // }, [search])

    console.log(data)
    return (
        <div className="search">
            {/* create a new component ?? */}
            <select value={search} onChange={handleSearchChange}>
                <option value="all">ALL</option>
                <option value="breweries">Breweries</option>
                <option value="beers">Beer</option>
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="beer-type">Beer Type</option>
                {/* <option value="random-beer">Random Beer</option> */}
            </select>

            {/*input element as Component , data are passed with props */}
        <SearchInput search={search} data={data} placeholder="Sbeerka beer search" />
        </div>
    )
}

export default SearchBar;