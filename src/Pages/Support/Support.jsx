import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    createTicket,
    getUserTickets
} from "../../services/SupportService";

import "./Support.css";

function Support() {

    const navigate = useNavigate();

    const [issue, setIssue] = useState("");
    const [tickets, setTickets] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!user) {
            navigate("/login");
            return;
        }

        loadTickets();

    }, []);

    const loadTickets = async () => {

        try {

            const data = await getUserTickets(user.userId);

            setTickets(data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createTicket({

                userId: user.userId,
                issue: issue,
                status: "OPEN",
                createdAt: new Date().toISOString()

            });

            alert("Ticket Created Successfully");

            setIssue("");

            loadTickets();

        } catch (error) {

            console.error(error);

            alert("Unable to create ticket");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Support Center
            </h2>

            <form
                className="support-form"
                onSubmit={handleSubmit}
            >

                <textarea
                    rows="5"
                    className="form-control mb-3"
                    placeholder="Describe your issue..."
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    required
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit Ticket
                </button>

            </form>

            <hr />

            <h3 className="mb-4">
                My Tickets
            </h3>

            {tickets.length === 0 ? (

                <h5>No Tickets Found</h5>

            ) : (

                tickets.map((ticket) => (

                    <div
                        className="ticket-card"
                        key={ticket.id}
                    >

                        <h5>Issue</h5>

                        <p>{ticket.issue}</p>

                        <p>
                            <strong>Status:</strong> {ticket.status}
                        </p>

                        <p>
                            <strong>Created:</strong> {ticket.createdAt}
                        </p>

                    </div>

                ))

            )}

        </div>

    );

}

export default Support;