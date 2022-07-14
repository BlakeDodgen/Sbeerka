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
import { loadUser } from "./actions/auth";

const App = () => {
    const [user, setUser] = useState("");
    const [loadingUser, setLoadingUser] = useState(false);

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
                <Nav />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/beers/:id" element={<BeerProfile />} />
                        <Route
                            path="/breweries/:id"
                            element={<BreweryProfile />}
                        />
                        <Route
                            path="/results/:search/:searchString"
                            element={<SearchResults />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
};

export default App;
