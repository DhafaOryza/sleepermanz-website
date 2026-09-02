import StylizedButton from "./etc/Buttons/StylizedButtons";

export default function Navbar() {
    const navlinks = [
        { label: "HOME", href: "#" },
        { label: "PORTOFOLIO", href: "#" },
        { label: "SERVICES", href: "#" },
    ]

    return (
        <div
            id="Navbar"
            className="w-full h-fit flex flex-row items-center justify-between bg-[#E9E9E9] rounded-sm py-3 px-6"
        >
            {/* Logo */}
            <img src="/logo.png" alt="sleeperman-logo" className="h-10 w-10 object-contain" />

            {/* Nav links + button */}
            <div id="navbar-buttons" className="flex flex-row items-center gap-8">
                {navlinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-medium uppercase tracking-wide text-black hover:opacity-70 transition-opacity"
                    >
                        {link.label}
                    </a>
                ))}

                {/* Join button */}
                <StylizedButton href="#">Join Us</StylizedButton>
            </div>
        </div>
    );
}