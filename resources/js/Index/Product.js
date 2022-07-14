const Product = (props) => {

    //add the rating



    return (
        <>

            <div className="product-list__item">
                <div className="product-list__image-container">
                    <img src={`img/beers/${props.id}.png`} className="product-list__img" alt="beer-item-img" />
                </div>
                <p className="product-list__name">{props.name}</p>
                <p className="product-list__rating">Rating</p>


            </div>
        </>
    )
}

export default Product;