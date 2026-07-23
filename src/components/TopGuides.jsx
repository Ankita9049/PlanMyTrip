import "../styles/Guide.css";

const guides = [
    {
        id: 1,
        name: "Rahul Sharma",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Goa",
        rating: 4.9,
        experience: "8 Years",
        price: 2500,
        available: true
    },
    {
        id: 2,
        name: "Priya Verma",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        location: "Manali",
        rating: 4.8,
        experience: "6 Years",
        price: 2200,
        available: true
    },
    {
        id: 3,
        name: "Amit Singh",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        location: "Kashmir",
        rating: 4.7,
        experience: "10 Years",
        price: 2800,
        available: false
    }
];

function TopGuides() {
    return (
        <section className="guides-section">

            <div className="container">

                <div className="guides-heading">
                    <h2>Meet Our Top Tour Guides</h2>
                    <p>Experienced local experts to make every journey memorable.</p>
                </div>

                <div className="row">

                    {guides.map((guide) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={guide.id}>

                            <div className="guide-card">

                                <img src={guide.image} alt={guide.name} />

                                <h4>{guide.name}</h4>

                                <p>📍 {guide.location}</p>

                                <p>⭐ {guide.rating}</p>

                                <p>🏆 {guide.experience}</p>

                                <p>💰 ₹{guide.price} / Day</p>

                                <span className={guide.available ? "available" : "busy"}>
                                    {guide.available ? "Available" : "Busy"}
                                </span>

                                <button className="btn btn-primary w-100 mt-3">
                                    Book Guide
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default TopGuides;