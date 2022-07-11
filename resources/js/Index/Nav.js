import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

function Nav() {

    return (
        <div className='nav'>
            <a href="/homepage">LOGO</a>
            <Dropdown />
            <SearchBar />
            <a href="/homepage">About</a>
            <div className='dropdown'>
                <button className='dropbtn'>
                    <div className='nav__log-in'>
                        <img className='nav__icon' src='./img/profile.svg' alt='profile' />
                        <a href='/homepage'>Log In</a>
                    </div>
                </button>
                <div className='dropdown-content'>
                    <a href="#">Settings</a>
                    <a href="#">Beer Collection</a>
                    <a href="#">Log Out</a>
                </div>
            </div>
            <a href="/homepage">Sign Up</a>
        </div>
    )
}

export default Nav;
