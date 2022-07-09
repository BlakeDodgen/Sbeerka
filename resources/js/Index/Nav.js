import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Nav() {

    return (
        <div className='nav'>
            <a href="/">LOGO</a>
            <SearchBar />
            <a href="/">About</a>
            <a href="/">Log In</a>
            <a href="/">Sign Up</a>
        </div>
    )
}

export default Nav;