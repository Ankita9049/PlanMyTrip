import Hero from "../../components/Hero";
import FeaturedDestinations from "../../components/FeaturedDestinations";
import PopularPackages from "../../components/PopularPackages";
import WhyChoose from "../../components/WhyChoose";
import TopGuides from "../../components/TopGuides";
import Reviews from "../../components/Reviews";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedDestinations />
            <PopularPackages />
            <WhyChoose />
            <TopGuides />
            <Reviews />
        </>
    );
}

export default Home;