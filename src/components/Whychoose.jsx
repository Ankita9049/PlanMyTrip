import "../styles/whychoose.css";

const features = [
    {
        icon: "🛡️",
        title: "Secure Booking",
        description:
            "Book your trips safely with our secure and reliable booking system."
    },
    {
        icon: "👨‍💼",
        title: "Verified Tour Guides",
        description:
            "Experienced and verified guides to make your journey memorable."
    },
    {
        icon: "💳",
        title: "Secure Payments",
        description:
            "Fast and encrypted payment process with complete transaction safety."
    },
    {
        icon: "⭐",
        title: "Top Rated Packages",
        description:
            "Highly rated destinations selected by thousands of happy travelers."
    },
    {
        icon: "📞",
        title: "24 × 7 Support",
        description:
            "Our support team is always available to help you during your trip."
    },
    {
        icon: "💰",
        title: "Best Price Guarantee",
        description:
            "Affordable packages with the best value for your money."
    }
];

function WhyChoose() {
    return (
        <section className="why-section">

            <div className="container">

                <div className="why-heading">

                    <h2>Why Choose PlanMyTrip?</h2>

                    <p>
                        Everything you need for a safe and memorable travel experience.
                    </p>

                </div>

                <div className="row">

                    {features.map((feature, index) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={index}>

                            <div className="why-card">

                                <div className="why-icon">
                                    {feature.icon}
                                </div>

                                <h4>{feature.title}</h4>

                                <p>{feature.description}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChoose;