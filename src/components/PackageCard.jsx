import { Link } from "react-router-dom";
import "./../styles/PackageCard.css";

function PackageCard({ tour }) {

    return (

        <div className="package-card">

            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3?w=800"
                alt={tour.title}
                className="package-image"
            />

            <div className="package-content">

                <span className="package-location">
                    📍 {tour.destination}
                </span>

                <h4>{tour.title}</h4>

                <p className="package-description">
                    {tour.description}
                </p>

                <div className="package-info">
                    <span>⏳ {tour.durationDays} Days</span>
                </div>

                <div className="package-bottom">

                    <div>
                        <h5>₹ {tour.price}</h5>
                    </div>

                    <div>

                        <Link
                            to={`/packages/${tour.packageId}`}
                            className="btn btn-outline-primary btn-sm me-2"
                        >
                            Details
                        </Link>

                        <button className="btn btn-primary btn-sm">
                            Book
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PackageCard;