import Nav from "./Nav";
import Footer from "./Footer";
import HomePageMainProduct from "./HomePageMainProduct";
import HomePageProductList from "./HomePageProductList";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <Nav />
            <div className="main">



                {/* Left side -- Featured beer */}
                <HomePageMainProduct />

                {/* Right Side -- Beers you might light */}
                <HomePageProductList />

            <Routes >
                <Route path="/results" element={<SearchResults />} />
            </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    )
}

export default App;