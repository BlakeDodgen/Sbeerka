import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Nav() {

    return (
        <div className='nav'>
            <a href="/homepage">LOGO</a>
            <SearchBar />
            <a href="/homepage">About</a>
            <a href="/homepage">Log In</a>
            <a href="/homepage">Sign Up</a>
        </div>
    )
}

export default Nav;