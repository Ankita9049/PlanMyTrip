import API from "../api/api";

export const createTicket = async (ticket) => {
    const response = await API.post("/payments/tickets", ticket);
    return response.data;
};

export const getUserTickets = async (userId) => {
    const response = await API.get(`/payments/tickets/user/${userId}`);
    return response.data;
};