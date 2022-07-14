import axios from "axios";

function Footer() {

    const loadUser = async () => {
        const res = await axios.get('/api/user');
        return res.data;
        
    }

    return (
        <div className="footer">
            <span>© Copyright Sbeerka, 2022</span>
            <button onClick={async () => {
            const user = await loadUser()
            console.log(user)
            }}>Check User</button>
        </div>
    )
}

export default Footer;