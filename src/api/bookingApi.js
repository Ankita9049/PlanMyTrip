import api from "./api";

export const createBooking = (booking) => {
    return api.post("/travel/bookings", booking);
};

export const getBookings = () => {
    return api.get("/travel/bookings");
};

export const getBookingByUser = (id) => {
    return api.get(`/travel/bookings/user/${id}`);
};

export const deleteBooking = (id) => {
    return api.delete(`/travel/bookings/${id}`);
};