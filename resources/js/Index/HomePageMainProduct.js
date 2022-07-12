import Product from "./Product";
import { useState, useEffect } from "react";
const HomePageMainProduct = () => {

    const [data, setData] = useState([]);

    const urlAll = `http://www.sbeerka.beer/api/beers`;


    const fetchData = async () => {
        const response = await fetch(urlAll);

        const parsedData = await response.json();
        setData(parsedData);
        console.log(parsedData);
    }

    //data are fetch after each selection in searchbar
    useEffect(() => {
        fetchData();

    }, [])
    return (
        <div className="main-product">
            <div className="main-product__container">
                {/* container for featured beer */}
                {/* refactor as carousel */}
                {data.slice(0, 1).map((item, index) => {
                    return (<>
                        <h2 className="main-product__title">FEATURED BEER</h2>
                        <div className="main-product__image-container">
                            <img src={`img/beers/${item.beer_pic_id}.png`} className="main-product__img" alt="featured-beer-img" />
                        </div>
                        <div className="main-product__detail">
                            <p className="main-product__name">{item.name}</p>
                            <p className="main-product__rating">Rating</p>
                        </div>

                    </>
                    )


                })}
            </div>
        </div>
    )
}

export default HomePageMainProduct;