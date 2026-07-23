import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    addReview,
    getReviewsByPackage
} from "../../services/ReviewService";
import "./Reviews.css";

function Reviews() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        loadReviews();
    }, [id]);

    const loadReviews = async () => {

        try {

            const data = await getReviewsByPackage(id);

            setReviews(data);

        } catch (error) {

            console.error(error);

        }

    };

    const submitReview = async () => {

        if (!loggedInUser) {

            alert("Please login first.");

            navigate("/login");

            return;

        }

        if (comment === "" || rating === "") {

            alert("Please enter review and rating.");

            return;

        }

        try {

            const review = {

                packageId: Number(id),

                userId: loggedInUser.userId,

                comment: comment,

                rating: Number(rating)

            };

            await addReview(review);

            alert("Review Added Successfully");

            setComment("");
            setRating("");

            loadReviews();

        } catch (error) {

            console.error(error);

            alert("Unable to add review");

        }

    };

    return (

        <div className="container mt-5">

            <h2>Customer Reviews</h2>

            <div className="review-form">

                <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Write your review"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <select
                    className="form-select mb-3"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >

                    <option value="">Rating</option>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>

                </select>

                <button
                    className="btn btn-primary"
                    onClick={submitReview}
                >
                    Submit Review
                </button>

            </div>

            <hr />

            {reviews.length === 0 ? (

                <h5>No Reviews Yet</h5>

            ) : (

                reviews.map((review) => (

                    <div
                        className="review-card"
                        key={review.reviewId}
                    >

                        <h5>⭐ {review.rating}</h5>

                        <p>{review.comment}</p>

                        <small>
                            User ID: {review.userId}
                        </small>

                    </div>

                ))

            )}

        </div>

    );

}

export default Reviews;