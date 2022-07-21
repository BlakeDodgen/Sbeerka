import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Fragment, useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import Logout from "./auth/Logout";
import About from "./about-page/About";
import BasicModal from "./mui/BasicModal";

function Nav(props) {
    const { user, text } = useContext(UserContext);

    return (
        <div className="nav">
            <a className="nav__logo" href="/">
                SBEERKA
            </a>

            <SearchBar setSearchType={props.setSearchType} />

            <Link className="nav__about" to="/about">
                About
            </Link>
            <BasicModal />

            {user ? (
                <div className="dropdown">
                    <button className="dropbtn">
                        <div className="dropdown__content">
                            <img
                                className="nav__icon"
                                src="./img/profile.svg"
                                alt="profile"
                            />
                            {user.username ? (
                                <span>{user.username}</span>
                            ) : (
                                <span>{user.brewery_name}</span>
                            )}
                        </div>
                    </button>
                    <div className="dropdown-content">
                        {user.username ? (
                            <Link to={`/user/${user.id}`}>Profile</Link>
                        ) : (
                            <Link to={`/breweries/${user.id}`}>Profile</Link>
                        )}
                        <Link to={`/favorites/${user.id}`}>Beer Collection</Link>
                        <Link to="/logout">Log out</Link>
                    </div>
                </div>
            ) : (
                <Fragment>
                    <Link className="nav__login" to="/login">
                        <img
                            className="nav__icon"
                            src="./img/profile.png"
                            alt="profile"
                        />
                        Log In
                    </Link>

                    <Link className="nav__signup" to="/signup">
                        Sign Up
                    </Link>
                </Fragment>
            )}
        </div>
    );
}

export default Nav;
