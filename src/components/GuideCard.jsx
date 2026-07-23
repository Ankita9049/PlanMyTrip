import { Link } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaStar,
    FaMoneyBillWave,
    FaUserTie
} from "react-icons/fa";
import "../styles/GuideCard.css";

function GuideCard({ guide }) {

    return (
        <div className="guide-card">

            <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt={guide.name}
                className="guide-image"
            />

            <div className="guide-content">

                <h4>{guide.name}</h4>

                <p>
                    <FaMapMarkerAlt /> {guide.location}
                </p>

                <p>
                    <FaUserTie /> {guide.experience}
                </p>

                <p>
                    <FaMoneyBillWave /> ₹{guide.pricePerDay} / Day
                </p>

                <p className="guide-rating">
                    <FaStar /> {guide.rating}
                </p>

                <p>
                    {guide.available ? (
                        <span className="text-success fw-bold">
                            Available
                        </span>
                    ) : (
                        <span className="text-danger fw-bold">
                            Not Available
                        </span>
                    )}
                </p>

                <Link
    to={`/guides/${guide.guideId}`}
    className="btn btn-primary w-100 mt-3"
>
    View Profile
</Link>

            </div>

        </div>
    );
}

export default GuideCard;