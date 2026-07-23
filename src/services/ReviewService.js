import API from "../api/api";

export const addReview = async (review) => {
    const response = await API.post("/travel/reviews", review);
    return response.data;
};

export const getReviewsByPackage = async (packageId) => {
    const response = await API.get(`/travel/reviews/package/${packageId}`);
    return response.data;
};

export const getReviewsByUser = async (userId) => {
    const response = await API.get(`/travel/reviews/user/${userId}`);
    return response.data;
};