import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import SignUp from "./auth/SignUp";
import SearchResults from "./SearchResults";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    UNSAFE_RouteContext,
} from "react-router-dom";
import { useReducer, useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";
import BreweryForm from "./BreweryForm";
// import BeerForm from "./BeerForm";
import BeerProfile from "./BeerProfile";
import BreweryProfile from "./BreweryProfile";
import BreweryResults from "./searchresults-parts/BreweryResults";
import CityResults from "./searchresults-parts/CityResults";
import CountryResults from "./searchresults-parts/CountryResults";
import BeerTypeResults from "./searchresults-parts/BeerTypeResults";
import ReviewForm from "./forms/ReviewForm";

import { loadUser } from "./actions/auth";
import UserProfile from "./UserProfile";
import About from "./about-page/About";

const App = () => {
    const [user, setUser] = useState("");
    const [loadingUser, setLoadingUser] = useState(false);
    const [searchType, setSearchType] = useState("beers");

    // const loadUser = async () => {
    //     const response = await axios.get('/api/user');
    //     if (response) {
    //         setUser(response)
    //     }
    //     Get request to api/user
    //     If data: update state (user)

    //     Sep: create context file, import in this file, and wrap everything in instanceof.

    //     In value of context -User, function loaduser, function setUser
    // }

    useEffect(() => {
        (async () => {
            const res = await loadUser();

            setUser(res);
        })();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, setUser, loadingUser, setLoadingUser }}
        >
            <BrowserRouter>
                <Nav setSearchType={setSearchType} />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/beers/review" element={<ReviewForm />} />
                        <Route path="/beers/:id" element={<BeerProfile />} />
                        <Route
                            path="/breweries/:id"
                            element={<BreweryProfile />}
                        />
                        <Route
                            exact
                            path="/results/breweries/:searchString"
                            element={<BreweryResults searchType={searchType} />}
                        />
                        <Route
                            exact
                            path="/results/city/:searchString"
                            element={<CityResults searchType={searchType} />}
                        />
                        <Route
                            exact
                            path="/results/country/:searchString"
                            element={<CountryResults searchType={searchType} />}
                        />
                        <Route
                            exact
                            path="/results/beer-type/:searchString"
                            element={
                                <BeerTypeResults searchType={searchType} />
                            }
                        />
                        <Route
                            path="/results/:search/:searchString"
                            element={<SearchResults searchType={searchType} />}
                        />
                        <Route path="user/:id" element={<UserProfile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signup/brewery" element={<BreweryForm />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/about" element={<About />} />
                    </Routes>

                    {/* <Link to="/beers/review">Link</Link> */}
                </div>
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
};

export default App;
