import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    FaUserTie,
    FaMapMarkerAlt,
    FaStar,
    FaMoneyBillWave,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

import { getGuideById } from "../../services/GuideService";
import "./GuideDetails.css";

function GuideDetails() {

    const { id } = useParams();

    const [guide, setGuide] = useState(null);

    useEffect(() => {
        loadGuide();
    }, [id]);

    const loadGuide = async () => {

        try {

            const data = await getGuideById(id);

            setGuide(data);

        } catch (error) {

            console.error(error);

            alert("Unable to load guide.");

        }

    };

    if (!guide) {

        return (

            <div className="container mt-5 text-center">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

        <div className="guide-details">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-4 text-center">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt={guide.name}
                            className="guide-profile-image"
                        />

                    </div>

                    <div className="col-lg-8">

                        <h2>{guide.name}</h2>

                        <hr />

                        <p>
                            <FaEnvelope /> <strong>Email:</strong> {guide.email}
                        </p>

                        <p>
                            <FaPhone /> <strong>Phone:</strong> {guide.phone}
                        </p>

                        <p>
                            <FaMapMarkerAlt /> <strong>Location:</strong> {guide.location}
                        </p>

                        <p>
                            <FaUserTie /> <strong>Experience:</strong> {guide.experience}
                        </p>

                        <p>
                            <FaStar /> <strong>Rating:</strong> {guide.rating}
                        </p>

                        <p>
                            <FaMoneyBillWave /> <strong>Price:</strong> ₹ {guide.pricePerDay} / Day
                        </p>

                        <p>

                            <strong>Status :</strong>{" "}

                            {guide.available ? (

                                <span className="badge bg-success">
                                    Available
                                </span>

                            ) : (

                                <span className="badge bg-danger">
                                    Unavailable
                                </span>

                            )}

                        </p>

                        <button className="btn btn-primary mt-3">

                            Hire Guide

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default GuideDetails;