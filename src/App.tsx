import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Game from "./Components/GameSection";
import Specialization from "./Components/SpecializationSection";
import Capabilities from "./Components/CapabilitiesSection";

export default function App() {
    return (
        <div className="min-h-screen bg-white px-6 py-6">
            <Navbar />
            <Hero />
            <Game />
            <Specialization />
            <Capabilities />
        </div>
    );
}