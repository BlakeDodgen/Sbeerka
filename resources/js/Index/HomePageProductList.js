import Product from "./Product";
import { useState, useEffect } from "react";

const HomePageProductList = () => {
    const [data, setData] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(6);

    const urlAll = `/api/beers`;

    const fetchData = async () => {
        const response = await fetch(urlAll);
        const parsedData = await response.json();
        setData(parsedData);
    };

    const loadNewSet = () => {
        setMin(min + 6);
        setMax(max + 6);
        if (max >= data.length) {
            setMin(0);
            setMax(6);
        }
    };

    // console.log(data.length);

    if (min >= data.length) {
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-list">
            {/* container for whole list of products, slice can set the range of products per page */}

            <h3 className="product-list__title">BEERS YOU MIGHT LIKE</h3>
            <div className="product-list__products-container">
                {data.slice(min, max).map((item, index) => {
                    return <Product key={index} data={item} />;
                })}
            </div>
            {/* loads another six items, if it hits the last , resets to beggining */}
            {(data.length > 0 && (
                <button
                    className="product-list__button"
                    onClick={() => loadNewSet()}
                >
                    <a href="#"> Another round</a>
                </button>
            )) || <p>Crafting beers....</p>}
        </div>
    );
};

export default HomePageProductList;
