const SearchResult = (props) => {
    //beertype , alcohol, degree, brewery review

    //change the path beer_pic.

    return (
        <>
            <div className="search-result">
                <div className="search-result__container">
                    <img src={`/img/beers/${props.beer_pic_id}.png`} className="search-result__img" alt="beer-item-img" />
                </div>
                <p className="search-result__name">{props.name}</p>
                <p className="search-result__brewery">{props.brewery}</p>
                <p className="search-result__type">{props.type}</p>
                <p className="search-result__rating">Rating</p>


            </div>
        </>
    );
};

export default SearchResult;
