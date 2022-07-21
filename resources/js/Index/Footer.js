import axios from "axios";
import { loadUser } from './Functions.js';

function Footer() {

    // const loadUser = async () => {
    //     const res = await axios.get('/api/user');
    //     return res.data;

    // }


    // <button onClick={async () => {
    //     const user = await loadUser()
    //     console.log(user)
    // }}>Check User</button>

    return (
        <div className="footer">
            <span className="footer__copyright">© Copyright Sbeerka, 2022</span>

            <div className="footer__social">
                <a href="#">
                    <img className="footer__fb" src="./img/assets/FB.svg" alt="Facebook" />
                </a>
                <a href="#">
                    <img className="footer__ig" src="./img/assets/IG.svg" alt="Instagram" />
                </a>
                <a href="#">
                    <img className="footer__twitter" src="./img/assets/Twitter.svg" alt="Twitter" />
                </a>
            </div>
        </div>
    )
}

export default Footer;