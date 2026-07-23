import API from "../api/api";

export const getAllGuides = async () => {

    const response = await API.get("/travel/guides");

    return response.data;

};

export const getGuideById = async (id) => {

    const response = await API.get(`/travel/guides/${id}`);

    return response.data;

};