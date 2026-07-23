import "../styles/featured.css";

const destinations = [
    {
        id: 1,
        name: "Goa",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
        rating: 4.8,
        price: "₹8,999"
    },
    {
        id: 2,
        name: "Manali",
        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
        rating: 4.7,
        price: "₹10,499"
    },
    {
        id: 3,
        name: "Kashmir",
        image:
            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900",
        rating: 4.9,
        price: "₹14,999"
    },
    {
        id: 4,
        name: "Kerala",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900",
        rating: 4.8,
        price: "₹11,999"
    },
    {
        id: 5,
        name: "Ladakh",
        image:
            "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900",
        rating: 4.9,
        price: "₹18,999"
    }
];

function FeaturedDestinations() {
    return (
        <section className="featured-section">

            <div className="container">

                <div className="featured-heading">

                    <h2>Featured Destinations</h2>

                    <p>
                        Discover the most loved destinations across India.
                    </p>

                </div>

                <div className="featured-scroll">

                    {destinations.map((item) => (

                        <div className="featured-card" key={item.id}>

                            <img src={item.image} alt={item.name} />

                            <div className="featured-overlay">

                                <h3>{item.name}</h3>

                                <div className="featured-bottom">

                                    <span>⭐ {item.rating}</span>

                                    <span>From {item.price}</span>

                                </div>

                                <button className="btn btn-light mt-3">
                                    View Packages
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedDestinations;