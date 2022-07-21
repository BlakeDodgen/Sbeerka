import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ placeholder, data, search }) {
    const [searchString, setSearchString] = useState("");

    //from this state are data  mapped and rendered
    const [searchItems, setSearchItems] = useState([]);

    //const [searchOption, setSearchOption] = useState(search);
    
    const navigate = useNavigate();

   
    //function triggered after each keystroke and runs the filter, results saved in new array
    const handleSearchQuery = (e) => {
        const searchItem = e.target.value;
        //const prop = searchOption;
        const newSearch = data.filter((item) => {
            //return value if true-> if object.name includes search items
            //compare the user input and data-> lowercase both values
            // console.log(item);
            
            return item.toLowerCase().match(searchString.toLowerCase());
        });

        
        if (searchItems === "") {
            setSearchItems([]);
        } else {
            setSearchItems(newSearch);
        }
    };

    const handleSearchBarChange = (e) => {
        handleSearchQuery(e);
        setSearchString(e.target.value);

    }

    const redirect = () => {
        if(searchString===""){
            return null
        } else {

            navigate(`/results/${search}/${searchString}`);
        }
        
    };
    

    return (
        <div className="search__container">
            <input
                className="search__input"
                type="text"
                placeholder="Search Sbeerka"
                name="search"
                value={searchString}
                onChange={handleSearchBarChange}
                onKeyDown={(e) => e.keyCode == "13" && redirect()}
                autoComplete="off"
            />

            {searchItems && (
                <div className="search__result">
                    {/* loops in the array which contains updated search items */}
                    {/* for less displayed results use splice method on array .splice(0,10) */}
                    {searchItems.map((value, index) => {
                        return (
                            <a className="search__items" key={index}>
                                {value}
                            </a>
                        );
                    })}
                </div>
            )}           

            {/* <Routes >
                <Redirect to="/results" element={<SearchResults results={searchItems} />} />
            </Routes> */}
        </div>
    );
}

export default SearchInput;
