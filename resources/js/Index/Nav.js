import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchDropDown from './SearchDropDown';

function Nav() {

    return (
        <div className='nav'>
            <Link to="/homepage">LOGO</Link>
            {/* <SearchDropDown /> */}
            <SearchBar />
            <Link to="/homepage">About</Link>
            <div className='dropdown'>
                <button className='dropbtn'>
                    <div className='nav__log-in'>
                        <img className='nav__icon' src='./img/profile.svg' alt='profile' />
                        <Link to='/homepage'>Log In</Link>
                    </div>
                </button>
                <div className='dropdown-content'>
                    <Link to="/homepage">Settings</Link>
                    <Link to="/homepage">Beer Collection</Link>
                    <Link to="/homepage">Log Out</Link>
                </div>
            </div>
            <a href="/homepage">Sign Up</a>
        </div>
    )
}

export default Nav;
