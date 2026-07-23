import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay">

                <div className="container">

                    <div className="hero-content">

                        <h1>
                            Explore Your Dream Destination
                        </h1>

                        <p>
                            Discover amazing tour packages, trusted guides and unforgettable travel experiences with PlanMyTrip.
                        </p>

                        <div className="search-box">

                            <div className="row g-3">

                                <div className="col-lg-3">
                                    <label>Destination</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Goa"
                                    />
                                </div>

                                <div className="col-lg-2">
                                    <label>Start Date</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                    />
                                </div>

                                <div className="col-lg-2">
                                    <label>End Date</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                    />
                                </div>

                                <div className="col-lg-2">
                                    <label>Budget</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="₹15000"
                                    />
                                </div>

                                <div className="col-lg-3 d-flex align-items-end">

                                    <button className="btn btn-primary search-btn">
                                        Search Packages
                                    </button>

                                </div>

                            </div>

                        </div>

                        <div className="hero-stats">

                            <div>
                                <h3>25+</h3>
                                <p>Destinations</p>
                            </div>

                            <div>
                                <h3>500+</h3>
                                <p>Happy Travelers</p>
                            </div>

                            <div>
                                <h3>50+</h3>
                                <p>Tour Guides</p>
                            </div>

                            <div>
                                <h3>100%</h3>
                                <p>Secure Booking</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;