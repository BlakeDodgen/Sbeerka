import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className='nav'>
            <Link to="/">LOGO</Link>
            <SearchBar />
            <Link to="/">About</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Sign Up</Link>
        </div>
    )
}

export default Nav;