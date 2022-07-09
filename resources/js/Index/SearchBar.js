function SearchBar() {
    return (
        <div className="search">
            {/* create a new component ?? */}
            <select>
                <option>Breweries</option>
                <option>Beer</option>
                <option>Flavors</option>
                <option>Alcohol Content</option>
                <option>Beer Type</option>  
                <option>Random Beer</option>               
            </select>
            <input name="search" onChange={(event) => setSearchQuery(event.target.value)} value="" />
        </div>
    )
}

export default SearchBar;