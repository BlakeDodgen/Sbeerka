import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchDropDown from './SearchDropDown';

function Nav() {

    return (
        <div className='nav'>
            <a href="/homepage">LOGO</a>
            <SearchDropDown />
            <SearchBar />
            <a href="/homepage">About</a>
            <div className='nav__log-in'><img className='nav__icon' src="./img/profile.svg" alt="profile" /><a href="/homepage">Log In</a></div>
            <a href="/homepage">Sign Up</a>
        </div>
    )
}

export default Nav;