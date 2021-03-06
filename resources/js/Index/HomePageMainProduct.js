import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const HomePageMainProduct = () => {
    const [data, setData] = useState([]);

    const urlAll = `/api/beers`;

    const fetchData = async () => {
        const response = await fetch(urlAll);
        const parsedData = await response.json();

        // let ratingScore = 0;
        // props.data.reviews.forEach(review => {
        //         ratingScore += review.rating;
        // })
        // let avRating = ratingScore/props.data.reviews.length
        // if (isNaN(avRating)) {
        //     avRating = 0;
        // }

        setData(parsedData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    //uses random number 1-30 to select from database for each render, later for carousel maybe
    const randomNum = Math.floor(Math.random() * 30);

    return (
        <div className="main-product">
            <div className="main-product__container">
                {/* container for featured beer */}
                {/* refactor as carousel */}

                {data.slice(randomNum, randomNum + 1).map((item) => {
                    return (
                        <>
                            <h2 className="main-product__title">
                                FEATURED BEER
                            </h2>
                            <Link to={`/beers/${item.id}`}>
                                <p className="main-product__name">
                                    {item.name}
                                </p>
                            </Link>
                            <div className="main-product__image-container">
                                <Link to={`/beers/${item.id}`}>
                                    <img
                                        src={`img/beers/${item.beer_pic_id}.png`}
                                        className="main-product__img"
                                        alt="featured-beer-img"
                                    />
                                </Link>
                            </div>
                            {/* <div className="main-product__detail">
                                <p className="main-product__rating">Rating</p>
                            </div> */}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePageMainProduct;
