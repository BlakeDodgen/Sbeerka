import { useParams } from "react-router-dom";



const SearchResults = () => {

    const { searchString } = useParams()

    console.log("searchstring: "searchString)

    return (
        <>

            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>

        </>
    )
}

export default SearchResults;