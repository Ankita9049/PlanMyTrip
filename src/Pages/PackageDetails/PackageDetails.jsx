import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaUserTie
} from "react-icons/fa";

import "./PackageDetails.css";
import { getPackageById } from "../../services/PackageService";

function PackageDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPackage();
    }, [id]);

    const loadPackage = async () => {

        try {

            const data = await getPackageById(id);
            setTour(data);

        } catch (error) {

            console.error(error);
            alert("Unable to load package.");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <div className="container text-center mt-5">
                <h3>Loading Package...</h3>
            </div>
        );

    }

    if (!tour) {

        return (
            <div className="container text-center mt-5">
                <h3>Package Not Found</h3>
            </div>
        );

    }

    return (

        <div className="package-details">

            <div className="container">

                <div className="row">

                    {/* Package Image */}

                    <div className="col-lg-6">

                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3?w=1200"
                            alt={tour.title}
                            className="details-image"
                        />

                    </div>

                    {/* Package Details */}

                    <div className="col-lg-6">

                        <h1>{tour.title}</h1>

                        <h3 className="text-primary mb-3">
                            ₹ {tour.price}
                        </h3>

                        <p>
                            <FaMapMarkerAlt className="me-2 text-danger" />
                            <strong>Destination :</strong> {tour.destination}
                        </p>

                        <hr />

                        <p>{tour.description}</p>

                        <div className="details-grid">

                            <div>

                                <FaCalendarAlt />

                                <strong> Duration</strong>

                                <p>{tour.durationDays} Days</p>

                            </div>

                            <div>

                                <FaUserTie />

                                <strong> Guide ID</strong>

                                <p>{tour.guideId}</p>

                            </div>

                        </div>

                        <div className="mt-4">

                            <button
                                className="btn btn-primary me-3"
                                onClick={() =>
                                    navigate("/booking", {
                                        state: { packageData: tour }
                                    })
                                }
                            >
                                Book Now
                            </button>
                            <button
    className="btn btn-outline-primary ms-3"
    onClick={() => navigate(`/reviews/${tour.packageId}`)}
>
    View Reviews
</button>

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => navigate("/packages")}
                            >
                                Back to Packages
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PackageDetails;