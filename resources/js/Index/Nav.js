import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import UserContext from "./UserContext";
import Logout from "./auth/Logout";

function Nav() {

    const { user, text } = useContext(UserContext);

    return (
        <div className="nav">
            <a className="nav__logo" href="/">
                SBEERKA
            </a>

            <SearchBar />

            <Link className="nav__about" to="/">About</Link>

            {
                user ?

                    <div className="dropdown">
                        <button className="dropbtn">
                            <div>
                                <img
                                    className="nav__icon"
                                    src="./img/profile.svg"
                                    alt="profile"
                                />
                                <span>User</span>
                            </div>
                        </button>

                        <div className="dropdown-content">
                            <Link to="/">Settings</Link>
                            <Link to="/">Beer Collection</Link>
                            <Logout />
                        </div>
                    </div>

                    :
                    <Fragment>
                        <Link className="nav__login" to="/login">
                            <img
                                className="nav__icon"
                                src="./img/profile.svg"
                                alt="profile"
                            />
                            Log In
                        </Link>

                        <Link className="nav__signup" to="/signup">
                            Sign Up
                        </Link>
                    </Fragment>
            }

        </div>
    );
}

export default Nav;
