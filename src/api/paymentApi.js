import api from "./api";

export const makePayment = (payment) => {
    return api.post("/payments", payment);
};

export const paymentByBooking = (bookingId) => {
    return api.get(`/payments/booking/${bookingId}`);
};

export const paymentById = (id) => {
    return api.get(`/payments/${id}`);
};