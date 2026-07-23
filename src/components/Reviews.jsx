import "../styles/Review.css";

const reviews = [
    {
        id: 1,
        name: "Ankita Gaikwad",
        package: "Goa Beach Escape",
        rating: 5,
        comment:
            "Amazing experience! The hotel, guide and itinerary were perfectly planned."
    },
    {
        id: 2,
        name: "Rahul Patil",
        package: "Manali Adventure",
        rating: 4,
        comment:
            "Beautiful destination and friendly guide. Worth every penny."
    },
    {
        id: 3,
        name: "Priya Sharma",
        package: "Kashmir Paradise",
        rating: 5,
        comment:
            "One of the best trips I've ever had. Highly recommended!"
    }
];

function Reviews() {
    return (
        <section className="reviews-section">

            <div className="container">

                <div className="reviews-heading">

                    <h2>What Our Travelers Say</h2>

                    <p>
                        Real experiences shared by our happy customers.
                    </p>

                </div>

                <div className="row">

                    {reviews.map((review) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={review.id}>

                            <div className="review-card">

                                <div className="profile-circle">
                                    {review.name.charAt(0)}
                                </div>

                                <h5>{review.name}</h5>

                                <small>{review.package}</small>

                                <div className="stars">

                                    {"⭐".repeat(review.rating)}

                                </div>

                                <p>"{review.comment}"</p>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="text-center mt-4">

                    <button className="btn btn-outline-primary">
                        View All Reviews
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Reviews;