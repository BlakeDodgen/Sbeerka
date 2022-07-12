import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {
    const [data, setData] = useState([]);
    const { search, searchString } = useParams();
    // const data = useContext(DataContext);

    // console.log("searchstring:"+ searchString)

    //parameters search + text passed into the string
    const url = `http://www.sbeerka.beer/api/${search}/${searchString}`;
    console.log("url:" + url);

    const fetchData = async () => {
        const response = await fetch(url);

        const parsedData = await response.json();
        setData(parsedData);
        console.log(parsedData);
    };

    //data are fetch after each selection in searchbar
    useEffect(() => {
        fetchData();
    }, [search]);

    return (
        <>
            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>
        </>
    );
};

export default SearchResults;
