import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row">

                    {/* Company */}

                    <div className="col-lg-4 mb-4">

                        <h3 className="footer-logo">
                            ✈️ PlanMyTrip
                        </h3>

                        <p>
                            Discover amazing destinations, book trusted tour
                            packages, connect with verified guides and enjoy
                            secure travel experiences.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-2 col-md-4 mb-4">

                        <h5>Quick Links</h5>

                        <ul>

                            <li><a href="/">Home</a></li>

                            <li><a href="/packages">Packages</a></li>

                            <li><a href="/guides">Guides</a></li>

                            <li><a href="/support">Support</a></li>

                        </ul>

                    </div>

                    {/* Services */}

                    <div className="col-lg-3 col-md-4 mb-4">

                        <h5>Services</h5>

                        <ul>

                            <li>Tour Booking</li>

                            <li>Travel Guides</li>

                            <li>Secure Payments</li>

                            <li>24×7 Support</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-3 col-md-4 mb-4">

                        <h5>Contact</h5>

                        <p>📍 Pune, Maharashtra</p>

                        <p>📧 support@planmytrip.com</p>

                        <p>📞 +91 9876543210</p>

                    </div>

                </div>

                <hr />

                <div className="footer-bottom">

                    <p>
                        © 2026 PlanMyTrip. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;