import axios from "axios";

export const loadUser = async () => {
    const res = await axios.get('/api/user');
    return res.data;  
}