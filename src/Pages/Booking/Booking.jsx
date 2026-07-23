import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../../services/BookingService";
import "./Booking.css";

function Booking() {

    const location = useLocation();
    const navigate = useNavigate();

    const packageData = location.state?.packageData;

    const [bookingDate, setBookingDate] = useState("");
    const [loading, setLoading] = useState(false);

    if (!packageData) {

        return (

            <div className="booking-page">

                <div className="container">

                    <div className="booking-card text-center">

                        <h3>No Package Selected</h3>

                        <p>Please select a package before booking.</p>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => navigate("/packages")}
                        >
                            Browse Packages
                        </button>

                    </div>

                </div>

            </div>

        );

    }

    const handleBooking = async () => {

        try {

            setLoading(true);

            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) {

                alert("Please login first.");

                navigate("/login");

                return;

            }

            const booking = {

                userId: user.userId,
                packageId: packageData.packageId,
                guideId: packageData.guideId,
                bookingDate: bookingDate,
                status: "BOOKED"

            };

            const savedBooking = await createBooking(booking);

            navigate("/payment", {

                state: {

                    booking: {

                        bookingId: savedBooking.bookingId,
                        amount: packageData.price

                    }

                }

            });

        } catch (error) {

            console.error(error);

            alert("Booking Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="booking-page">

            <div className="container">

                <div className="booking-card">

                    <h2>Confirm Your Booking</h2>

                    <div className="booking-info">

                        <h4>{packageData.title}</h4>

                        <p>

                            <strong>Destination :</strong>

                            {" "}

                            {packageData.destination}

                        </p>

                        <p>

                            <strong>Duration :</strong>

                            {" "}

                            {packageData.durationDays} Days

                        </p>

                        <p>

                            <strong>Price :</strong>

                            {" "}

                            ₹ {packageData.price}

                        </p>

                    </div>

                    <div className="mb-4">

                        <label className="form-label">

                            Select Booking Date

                        </label>

                        <input
                            type="date"
                            className="form-control"
                            value={bookingDate}
                            onChange={(e) =>
                                setBookingDate(e.target.value)
                            }
                        />

                    </div>

                    <button
                        className="btn btn-success"
                        disabled={loading || bookingDate === ""}
                        onClick={handleBooking}
                    >

                        {loading ? "Booking..." : "Confirm Booking"}

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Booking;