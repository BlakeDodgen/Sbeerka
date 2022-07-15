import { Link } from "react-router-dom";

const Product = (props) => {

    //add the rating



    return (
        <>

            <div className="product-list__item">
                <div className="product-list__image-container">
                    <Link to={`/beers/${props.id}`}><img src={`/img/beers/${props.id}`} className="product-list__img" alt="beer-item-img" /></Link>                   
                </div>
                <p className="product-list__name">{props.name}</p>
                <p className="product-list__rating">Rating</p>


            </div>
        </>
    )
}

export default Product;