function SearchBar() {
    return (
        <div className="search">
            <input name="search" onChange={(event) => setSearchQuery(event.target.value)} value="" />
        </div>
    )
}

export default SearchBar;