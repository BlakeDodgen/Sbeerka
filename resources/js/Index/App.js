import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DataContext } from "./SearchBar";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <div className="main">
                {/* new Component Homepage needed for routing  */}
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route
                        path="/results/:search/:searchString"
                        element={<SearchResults />}
                    />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
