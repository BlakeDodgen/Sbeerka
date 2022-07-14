import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <a className="nav__logo" href="/">
                SBEERKA
            </a>

            <SearchBar />

            <Link className="nav__about" to="/">About</Link>

            <div className="dropdown">
                <button className="dropbtn">
                    <div className="nav__log-in">
                        <img
                            className="nav__icon"
                            src="./img/profile.svg"
                            alt="profile"
                        />
                        <Link className="nav__login" to="/login">
                            Log In
                        </Link>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/">Settings</Link>
                        <Link to="/">Beer Collection</Link>
                        <Link to="/logout">Log Out</Link>
                    </div>
                </button>

            </div>
            <Link className="nav__signup" to="/signup">
                Sign Up
            </Link>
        </div>
    );
}

export default Nav;

{
    /* <div className='dropdown'>
<button className='dropbtn'>
    <div className='nav__log-in'>
        <img className='nav__icon' src='./img/profile.svg' alt='profile' />
        <Link to='/'>Log In</Link>
    </div>
</button>
<div className='dropdown-content'>
    <Link to="/">Settings</Link>
    <Link to="/">Beer Collection</Link>
    <Link to="/">Log Out</Link>
</div>
</div> */
}

{
    /* <div className="nav__dropdown">
                <input type="checkbox" id="drop" hidden />
                <label className="nav__header" htmlFor="drop">Click Me</label>
                <div className="nav__list">
                    <div className="nav__item">Option one</div>
                    <div className="nav__item">Option two</div>
                    <div className="nav__item">Option three</div>
                    <div className="nav__item">Option four</div>
                </div>
            </div> */
}

{
    /* <div style={{ margin: "16px", position: "relative" }}>
                <SelectBox
                    items={[
                        { value: "United States", id: 1 },
                        { value: "Canada", id: 2 },
                        { value: "Mexico", id: 3 },
                        { value: "Japan", id: 4 }
                    ]}
                />
            </div> */
}
