import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <Nav />
            <div className="main">
            {/*  */}
            <Routes>
                <Route path="/" element={<HomePage />} />                         
                <Route path="/results/:searchString" element={<SearchResults />} />
            </Routes>

            </div>

            <Footer />
        </BrowserRouter>
    )
}

export default App;