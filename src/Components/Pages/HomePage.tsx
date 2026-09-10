
import Hero from "./Home/Hero";
import Game from "./Home/GameSection";
import Specialization from "./Home/SpecializationSection";
import Capabilities from "./Home/CapabilitiesSection";
import AboutSection from "./Home/AboutSection";
import ContactSection from "./Home/ContactSection";

export default function HomePage() {
    return (
        <div className="px-6 py-6">
            <Hero />
            <Game />
            <Specialization />
            <Capabilities />
            <AboutSection />
            <ContactSection />
        </div>
    );
}