import API from "../api/api";

export const createBooking = async (booking) => {
    const response = await API.post("/travel/bookings", booking);
    return response.data;
};

export const getUserBookings = async (userId) => {
    const response = await API.get(`/travel/bookings/user/${userId}`);
    return response.data;
};