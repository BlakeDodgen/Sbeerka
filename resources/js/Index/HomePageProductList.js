import Product from "./Product";
import { useState, useEffect } from "react";

const HomePageProductList = () => {
    const [data, setData] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(6);

    const urlAll = `http://www.sbeerka.beer/api/beers`;

    const fetchData = async () => {
        const response = await fetch(urlAll);
        const parsedData = await response.json();
        setData(parsedData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-list">
            {/* container for whole list of products, slice can set the range of products per page */}

            <h3 className="product-list__title">BEERS YOU MIGHT LIKE</h3>
            <div className="product-list__products-container">
                {data.slice(min, max).map((item, index) => {
                    return <Product key={index} data={item} />
                })}

            </div>
            {/* new feature loads another six items */}
            {/* <button onClick={()=>setMax(max+6)}>Another round</button> */}
        </div>
    );
};

export default HomePageProductList;
