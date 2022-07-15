import { Link } from "react-router-dom";

const SearchResult = (props) => {
    //beertype , alcohol, degree, brewery review

    //change the path beer_pic.
    console.log(props)
    return (
        <>

            <div className="product-list__item">
                <div className="product-list__image-container">
                    <Link to={`/beers/${props.beer_id}`}><img src={`/img/beers/${props.beer_pic_id}.png`} className="product-list__img" alt="beer-item-img" /></Link>
                </div>
                <Link to={`/beers/${props.beer_pic_id}`}><p className="product-list__name">{props.name}</p></Link>
                <Link to={`/breweries/${props.brewery_id}`}><p className="product-list__name">{props.brewery}</p></Link>
                <p className="product-list__name">{props.type}</p>
                <p className="product-list__rating">Rating</p>


            </div>


        </>
    );
};

export default SearchResult;
