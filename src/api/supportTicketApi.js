import api from "./api";

export const createTicket = (ticket) => {
    return api.post("/payments/tickets", ticket);
};

export const userTickets = (userId) => {
    return api.get(`/payments/tickets/user/${userId}`);
};

export const resolveTicket = (id) => {
    return api.put(`/payments/tickets/resolve/${id}`);
};