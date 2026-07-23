import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserBookings } from "../../services/BookingService";
import "./MyBooking.css";

function MyBookings() {

    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!loggedInUser) {
            navigate("/login");
            return;
        }

        loadBookings();

    }, []);

    const loadBookings = async () => {

        try {

            const data = await getUserBookings(loggedInUser.userId);

            setBookings(data);

        } catch (error) {

            console.error(error);

            alert("Unable to load bookings.");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                My Bookings
            </h2>

            {bookings.length === 0 ? (

                <h5>No Bookings Found</h5>

            ) : (

                bookings.map((booking) => (

                    <div
                        className="booking-card"
                        key={booking.bookingId}
                    >

                        <h5>
                            Booking #{booking.bookingId}
                        </h5>

                        <p>
                            <strong>Package ID:</strong> {booking.packageId}
                        </p>

                        <p>
                            <strong>Guide ID:</strong> {booking.guideId}
                        </p>

                        <p>
                            <strong>Booking Date:</strong> {booking.bookingDate}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            <span className="badge bg-success">
                                {booking.status}
                            </span>
                        </p>

                    </div>

                ))

            )}

        </div>

    );

}

export default MyBookings;