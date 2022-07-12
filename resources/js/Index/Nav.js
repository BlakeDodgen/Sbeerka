import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className='nav'>
            <a href="/homepage">LOGO</a>
            <SearchBar />

            <Link to="/">About</Link>

            <div className='dropdown'>
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
            </div>
            <Link to="/">Sign Up</Link>
        </div>
    )
}

export default Nav;
