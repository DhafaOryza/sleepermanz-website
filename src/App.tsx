import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Game from "./Components/GameSection";
import Specialization from "./Components/SpecializationSection";
import Capabilities from "./Components/CapabilitiesSection";
import AboutSection from "./Components/AboutSection.tsx";
import ContactSection from "./Components/ContactSection.tsx";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <div className="px-6 py-6">
                <Navbar />
                <Hero />
                <Game />
                <Specialization />
                <Capabilities />
                <AboutSection />
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
}