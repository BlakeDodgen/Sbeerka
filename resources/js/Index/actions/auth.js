import axios from "axios";



export const loadUser = async () => {
    const res = await axios.get("/api/user");
    // console.log(res.data)
    return res.data;
};


export const login = async (payload) => {
    try {
        const res = await axios.post("/login", payload);

        return res.data;
    } catch (err) {
        return err.message
    }
};

export const register = async (payload) => {
    try {
        const res = await axios.post("/register", payload);

        return res.data;
    } catch (err) {
        return err.message
    }
};