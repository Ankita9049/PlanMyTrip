import api from "./api";

export const getPackages = () => {
    return api.get("/travel/packages");
};

export const getPackage = (id) => {
    return api.get(`/travel/packages/${id}`);
};

export const searchPackages = (keyword) => {
    return api.get(`/travel/search/${keyword}`);
};

export const getDestination = (destination) => {
    return api.get(`/travel/destination/${destination}`);
};

export const getPrice = (price) => {
    return api.get(`/travel/price/${price}`);
};