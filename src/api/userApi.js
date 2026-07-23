import api from "./api";

export const register = (user) => {
    return api.post("/users/register", user);
};

export const login = (email, password) => {
    return api.post("/users/login", {
        email,
        password,
    });
};

export const getUser = (id) => {
    return api.get(`/users/id/${id}`);
};

export const getAllUsers = () => {
    return api.get("/users");
};

export const sendOtp = (email) => {
    return api.post(`/users/send-otp?email=${email}`);
};

export const verifyOtp = (email, otp) => {
    return api.post(`/users/verify-otp?email=${email}&otp=${otp}`);
};