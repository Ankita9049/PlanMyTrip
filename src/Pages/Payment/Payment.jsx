import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makePayment } from "../../services/PaymentService";
import "./Payment.css";

function Payment() {

    const location = useLocation();
    const navigate = useNavigate();

    const booking = location.state?.booking;

    const [amount, setAmount] = useState(
        booking?.amount || ""
    );

    const [loading, setLoading] = useState(false);

    if (!booking) {
        return (
            <div className="container mt-5 text-center">
                <h3>No Booking Found</h3>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/packages")}
                >
                    Browse Packages
                </button>
            </div>
        );
    }

    const handlePayment = async () => {

        try {

            setLoading(true);

            const payment = {

                bookingId: booking.bookingId,

                amount: Number(amount),

                status: "SUCCESS",

                paymentDate: new Date().toISOString()

            };

            await makePayment(payment);

            alert("Payment Successful 🎉");

            navigate("/");

        } catch (error) {

            console.error(error);

            alert("Payment Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="payment-page">

            <div className="container">

                <div className="payment-card">

                    <h2 className="mb-4">
                        Complete Payment
                    </h2>

                    <p>
                        <strong>Booking ID :</strong> {booking.bookingId}
                    </p>

                    <div className="mb-3">

                        <label className="form-label">
                            Amount
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                        />

                    </div>

                    <button
                        className="btn btn-success w-100"
                        onClick={handlePayment}
                        disabled={loading}
                    >

                        {loading ? "Processing..." : "Pay Now"}

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Payment;