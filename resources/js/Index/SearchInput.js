import { useState } from "react";

function SearchInput({ placeholder, data }) {

    const [searchItems, setSearchItems] = useState([])

    //function triggered after each keystroke and runs the filter, results saved in new array
    const handleSearchQuery = (e) => {
        const searchItem = e.target.value;
        const newSearch = data.filter((item) => {
            //return value if true-> if object.name includes search items 
            //compare the user input and data-> lowercase both values
            return item.name.toLowerCase().includes(searchItem.toLowerCase())
        });
        
        //array with results is updated in state
        //if search imput is empty nothing is show
        if ( searchItems === "") {
            setSearchItems([]);
        } else {
            setSearchItems(newSearch);
        }
    }

    // console.log(data);

    return (
        <>
            <input type="text" placeholder={placeholder} name="search" onChange={handleSearchQuery} />

            {searchItems && (
                <div>
                    {/* loops in the array which contains updated search items */}
                    {/* for less displayed results use splice method on array .splice(0,10) */}
                    {searchItems.map((value, index) => {

                        return <a className="search__items" key={index} target="_blank">{value.name} / {value.city}</a>

                    })}
                </div>
            )}
        </>


    )
}

export default SearchInput;