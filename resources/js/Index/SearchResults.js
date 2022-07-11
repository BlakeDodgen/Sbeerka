import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";



const SearchResults = () => {

    const { searchString } = useParams()

    console.log(searchString)

    return (
        <>

            {/* <p>hello </p> */}
            <p>hello, we're searching for {searchString}</p>

        </>
    )
}

export default SearchResults;