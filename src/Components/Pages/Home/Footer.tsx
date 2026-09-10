import Barier from "../../etc/Barier";

const navLinks = ["Home", "Portofolio", "Services", "Careers"];

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white mt-24">
            <div className="w-full flex flex-row items-center gap-16 px-6 py-8">
                {/* Logo */}
                <div className="flex flex-row items-center gap-3">
                    <img
                        src="/logo-white.svg"
                        alt="Sleeper Manz logo"
                        className="w-14 h-14 border border-white p-2"
                    />
                    <span className="flex flex-col text-2xl font-black uppercase leading-tight">
                        <span>Sleeper</span>
                        <span>Manz</span>
                    </span>
                </div>

                {/* Nav */}
                <nav className="flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="font-bold uppercase text-sm hover:opacity-70 transition-opacity"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="w-full px-6">
                <Barier width="full" height="1" className="bg-white/20" />
            </div>

            <p className="w-full text-center text-xs text-gray-400 py-4">
                © {new Date().getFullYear()} Sleeper Manz
            </p>
        </footer>
    );
}