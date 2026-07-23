import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPackages } from "../services/PackageService";
import "../styles/Package.css";

function PopularPackages() {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        loadPackages();
    }, []);

    const loadPackages = async () => {
        try {
            const data = await getAllPackages();

            // Show only first 3 packages on Home page
            setPackages(data.slice(0, 3));

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="package-section">

            <div className="container">

                <div className="section-title">

                    <h2>Popular Tour Packages</h2>

                    <p>
                        Choose from our best-selling travel experiences.
                    </p>

                </div>

                <div className="row">

                    {packages.map((pkg) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={pkg.packageId}
                        >

                            <div className="package-card">

                                <img
                                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3?w=800"
                                    alt={pkg.title}
                                />

                                <div className="package-body">

                                    <h4>{pkg.title}</h4>

                                    <p>📍 {pkg.destination}</p>

                                    <p>⏳ {pkg.durationDays} Days</p>

                                    <h5>₹ {pkg.price}</h5>

                                    <Link
                                        to={`/packages/${pkg.packageId}`}
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PopularPackages;