import { useParams } from "react-router-dom";
import { useContext } from "react";



const SearchResults = () => {

    const { searchString } = useParams();
    const data = useContext(DataContext);

    console.log("searchstring:"+searchString)

    //parameter search + text


    return (
        <>

            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>

        </>
    )
}

export default SearchResults;