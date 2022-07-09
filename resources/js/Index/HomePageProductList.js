import Product from "./Product";

const HomePageProductList = () => {

    return (
        <>
            <h3 className="product-list__title">BEERS YOU WOULD MIGHT LIKE</h3>

             {/* container for whole list of products */}
            <div className="product-list">

                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />                  
              
            </div>
        </>
    )
}

export default HomePageProductList;