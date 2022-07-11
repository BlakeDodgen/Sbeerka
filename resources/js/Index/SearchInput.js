import { BrowserRouter, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchResults from "./SearchResults";

function SearchInput({ placeholder, data, search }) {

    const [searchItems, setSearchItems] = useState([])
    const [searchOption, setSearchOption] = useState(search);
    const navigate = useNavigate();

    //function triggered after each keystroke and runs the filter, results saved in new array
    const handleSearchQuery = (e) => {
        const searchItem = e.target.value;
        const prop = searchOption;
        const newSearch = data.filter((item) => {
            //return value if true-> if object.name includes search items 
            //compare the user input and data-> lowercase both values
            console.log(prop);
            return item.beername.toLowerCase().includes(searchItem.toLowerCase())
            
        });
        
        //array with results is updated in state
        //if search imput is empty nothing is show
        if ( searchItems === "") {
            setSearchItems([]);
        } else {
            setSearchItems(newSearch);
        }
    }

    const redirect = () => {
        navigate("/results")
    }
    // console.log(data);

    return (
        <>
            <input type="text" placeholder={placeholder} name="search" onChange={handleSearchQuery} onKeyDown={(e) => e.keyCode == '13' && redirect()}/>

            {searchItems && (
                <div>
                    {/* loops in the array which contains updated search items */}
                    {/* for less displayed results use splice method on array .splice(0,10) */}
                    {searchItems.map((value, index) => {

                        return <a className="search__items" key={index} target="_blank">{value.beername} / {value.city}</a>

                    })}
                </div>
            )}

            {/* new route , not defined yet, for search results listed and rendered, filltered array passed via props */}
            
            {/* <Routes >
                <Redirect to="/results" element={<SearchResults results={searchItems} />} />
            </Routes> */}
        </>


    )
}

export default SearchInput;