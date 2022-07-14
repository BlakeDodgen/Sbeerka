import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import SignUp from "./auth/SignUp";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route, Link, UNSAFE_RouteContext } from "react-router-dom";
import { useReducer, useEffect, useState, useContext } from "react";
import axios from 'axios';
import UserContext from "./UserContext";

const App = () => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Nav />
            <div className="main">
=======

    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);

    const loadUser = async () => {
        const res = await axios.get('/api/user');
        return res.data;
        
    }
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
        const res =loadUser();
        setUser(res);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loadingUser, setLoadingUser }}>
            <BrowserRouter>
                <Nav />
                    <div className="main">
                
>>>>>>> 683373cd956d53c9091739d98f5b5a1ae94e3363
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
<<<<<<< HEAD
    );
};
=======
        </UserContext.Provider>
    )
}
>>>>>>> 683373cd956d53c9091739d98f5b5a1ae94e3363

export default App;
