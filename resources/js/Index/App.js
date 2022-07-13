import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import SignUp from "./auth/SignUp";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <div className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/results/:search/:searchString"
                        element={<SearchResults />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
