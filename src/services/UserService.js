import API from "../api/api";

export const getUserById = async (id) => {
    const response = await API.get(`/users/id/${id}`);
    return response.data;
};