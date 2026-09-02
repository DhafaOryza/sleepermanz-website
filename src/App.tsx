import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
    return (
        <div className="min-h-screen bg-white px-6 py-6">
            <Navbar />
            <Hero />
        </div>
    );
}