const SearchResult = (props) => {

    //beertype , alcohol, degree, brewery review

 //change the path beer_pic.

    return (
        <>

            <div className="product-list__item">
                <div className="product-list__image-container">
                    <img src={`/img/beers/${props.beer_pic_id}.png`} className="product-list__img" alt="beer-item-img" />
                </div>
                <p className="product-list__name">{props.name}</p>
                <p className="product-list__name">{props.brewery}</p>
                <p className="product-list__name">{props.type}</p>
                <p className="product-list__rating">Rating</p>


            </div>


        </>
    )
}

export default SearchResult;