import API from "../api/api";

export const makePayment = async (payment) => {
    const response = await API.post("/payments", payment);
    return response.data;
};

export const getPaymentById = async (id) => {
    const response = await API.get(`/payments/${id}`);
    return response.data;
};

export const getPaymentsByBooking = async (bookingId) => {
    const response = await API.get(`/payments/booking/${bookingId}`);
    return response.data;
};