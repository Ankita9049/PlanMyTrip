import API from "../api/api";

export const getAllPackages = async () => {
    const response = await API.get("/travel/packages");
    return response.data;
};

export const getPackageById = async (id) => {
    const response = await API.get(`/travel/packages/${id}`);
    return response.data;
};

export const searchPackages = async (keyword) => {
    const response = await API.get(`/travel/packages/search/${keyword}`);
    return response.data;
};

export const getPackagesByDestination = async (destination) => {
    const response = await API.get(`/travel/packages/destination/${destination}`);
    return response.data;
};

export const getPackagesByPrice = async (price) => {
    const response = await API.get(`/travel/packages/price/${price}`);
    return response.data;
};