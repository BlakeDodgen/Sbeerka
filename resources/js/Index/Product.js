const Product = (props) => {

    //beertype , alcohol, degree, brewery review

 console.log(props);
 
    return (
        <>
              
            <div className="product-list__item">
                <img src={`img/beers/${props.id}.png`} className="product-list__img" alt="beer-item-img"/>
                <p className="product-list__name">{props.name}</p>
                <p className="product-list__rating">Rating</p>
                       
              
            </div>
        </>
    )
}

export default Product;