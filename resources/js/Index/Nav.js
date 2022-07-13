import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SearchTest from "./SearchTest";

function Nav() {
    return (
        <div className="nav">
            <a href="/">LOGO</a>
            <SearchBar />
            <SearchTest />

            <Link to="/">About</Link>

            <div className="dropdown">
                <button className="dropbtn">
                    <div className="nav__log-in">
                        <img
                            className="nav__icon"
                            src="./img/profile.svg"
                            alt="profile"
                        />
                        <Link to="/login">Log In</Link>
                    </div>
                </button>

                <div className="dropdown-content">
                    <Link to="/">Settings</Link>
                    <Link to="/">Beer Collection</Link>
                    <Link to="/logout">Log Out</Link>
                </div>
            </div>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default Nav;
