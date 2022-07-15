import { Link } from "react-router-dom";

const Product = (props) => {
    
    //add the rating
    let ratingScore = 0;
        props.data.reviews.forEach(review => {
                ratingScore += review.rating;
        })
    let avRating = ratingScore/props.data.reviews.length
    if (isNaN(avRating)) {
        avRating = 0;
    }
    

    return (
        <>

            <div className="product-list__item">
                <div className="product-list__image-container">
                    <Link to={`/beers/${props.data.id}`}><img src={`/img/beers/${props.data.beer_pic.picture}`} className="product-list__img" alt="beer-item-img" /></Link>                   
                </div>
                <Link to={`/beers/${props.data.id}`}><p className="product-list__name">{props.data.name}</p></Link>
                <p className="product-list__rating">Rating: {avRating.toFixed(1)}</p>


            </div>
        </>
    )
}

export default Product;