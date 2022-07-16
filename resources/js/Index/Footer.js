import axios from "axios";
import { loadUser } from './Functions.js';

function Footer() {

    // const loadUser = async () => {
    //     const res = await axios.get('/api/user');
    //     return res.data;

    // }

    return (
        <div className="footer">
            <span className="footer__copyright">© Copyright Sbeerka, 2022</span>
            <button onClick={async () => {
                const user = await loadUser()
                console.log(user)
            }}>Check User</button>
            <div className="footer__social">
                <a href="#">
                    <img className="footer__fb" src="./img/FB.svg" alt="Facebook" />
                </a>
                <a href="#">
                    <img className="footer__ig" src="./img/IG.svg" alt="Instagram" />
                </a>
                <a href="#">
                    <img className="footer__twitter" src="./img/Twitter.svg" alt="Twitter" />
                </a>
            </div>
        </div>
    )
}

export default Footer;