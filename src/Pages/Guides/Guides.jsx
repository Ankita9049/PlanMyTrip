import { useEffect, useState } from "react";
import { getAllGuides } from "../../services/GuideService";
import GuideCard from "../../components/GuideCard";
import "./Guides.css";

function Guides() {

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        loadGuides();
    }, []);

    const loadGuides = async () => {

        try {

            const data = await getAllGuides();

            setGuides(data);

        } catch (error) {

            console.error(error);

            alert("Unable to load guides.");

        }

    };

    return (

        <div className="container mt-5">

            <div className="text-center mb-5">

                <h2>Our Tour Guides</h2>

                <p>
                    Meet our experienced travel experts who will make your trip memorable.
                </p>

            </div>

            <div className="row">

                {guides.length > 0 ? (

                    guides.map((guide) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={guide.guideId}
                        >

                            <GuideCard guide={guide} />

                        </div>

                    ))

                ) : (

                    <div className="text-center">

                        <h4>No Guides Available</h4>

                    </div>

                )}

            </div>

        </div>

    );

}

export default Guides;