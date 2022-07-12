import Product from "./Product";
import { useState, useEffect } from "react";

const HomePageProductList = () => {
    const [data, setData] = useState([]);

    const urlAll = `http://www.sbeerka.beer/api/beers`;

    const fetchData = async () => {
        const response = await fetch(urlAll);

        const parsedData = await response.json();
        setData(parsedData);
        console.log(parsedData);
    };

    //data are fetch after each selection in searchbar
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-list">
            {/* container for whole list of products */}

            <h3 className="product-list__title">BEERS YOU MIGHT LIKE</h3>

            {data.slice(0, 6).map((item, index) => {
                return (
                    <Product
                        key={index}
                        name={item.name}
                        id={item.beer_pic_id}
                    />
                );
                console.log(item.name);
            })}
        </div>
    );
};

export default HomePageProductList;
