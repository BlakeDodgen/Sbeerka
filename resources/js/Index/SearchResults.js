import { useParams } from "react-router-dom";
import { useContext } from "react";



const SearchResults = () => {

    const { search, searchString} = useParams();
    // const data = useContext(DataContext);
   

    
    // console.log("searchstring:"+ searchString)

    //parameter search + text
    const url = `http://www.sbeerka.beer/${search}/${searchString}`;
    console.log("url:" + url);

    return (
        <>

            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>

        </>
    )
}

export default SearchResults;