import API from "../api/api";

export const loginUser = async (loginData) => {
    const response = await API.post("/users/login", loginData);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await API.post("/users/register", userData);
    return response.data;
};