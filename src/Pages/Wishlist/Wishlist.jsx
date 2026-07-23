import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {

    const navigate = useNavigate();

    const [wishlist, setWishlist] = useState([
        {
            packageId: 1,
            title: "Goa Beach Escape",
            destination: "Goa",
            price: 14999,
            durationDays: 5,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3?w=900"
        },
        {
            packageId: 2,
            title: "Manali Adventure",
            destination: "Manali",
            price: 18999,
            durationDays: 6,
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900"
        }
    ]);

    const removeItem = (id) => {

        setWishlist(wishlist.filter((item) => item.packageId !== id));

    };

    return (

        <div className="wishlist-page">

            <div className="container">

                <h2 className="wishlist-title">
                    My Wishlist ❤️
                </h2>

                {wishlist.length === 0 ? (

                    <div className="empty-wishlist">

                        <h4>Your wishlist is empty.</h4>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => navigate("/packages")}
                        >
                            Browse Packages
                        </button>

                    </div>

                ) : (

                    <div className="row">

                        {wishlist.map((tour) => (

                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                key={tour.packageId}
                            >

                                <div className="wishlist-card">

                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                    />

                                    <div className="wishlist-body">

                                        <h4>{tour.title}</h4>

                                        <p>
                                            📍 {tour.destination}
                                        </p>

                                        <p>
                                            ⏳ {tour.durationDays} Days
                                        </p>

                                        <h5>
                                            ₹ {tour.price}
                                        </h5>

                                        <div className="wishlist-buttons">

                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    navigate(`/packages/${tour.packageId}`)
                                                }
                                            >
                                                View Details
                                            </button>

                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() =>
                                                    removeItem(tour.packageId)
                                                }
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Wishlist;