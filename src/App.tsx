
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Footer from "./Components/Pages/Home/Footer.tsx";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <div className="px-6 py-6">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}