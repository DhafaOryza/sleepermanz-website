import Barier from "./etc/Barier";
import SocialIcon from "./etc/Icons/SocialIcon";

const socials = [
    { type: "youtube", href: "https://youtube.com/@sleepermanz", boxed: true },
    { type: "instagram", href: "https://instagram.com/sleepermanz", boxed: true },
    { type: "linkedin", href: "https://linkedin.com/company/sleepermanz", boxed: true },
    { type: "x", href: "https://x.com/sleepermanz", boxed: false },
];

export default function ContactSection() {
    return (
        <div id="contact" className="w-full flex flex-col items-center gap-6 mt-24 mb-16">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-8">
                <Barier width="full" height="2" className="flex-1" />
                <h2 className="text-4xl font-black uppercase whitespace-nowrap">
                    [ Contact Us ]
                </h2>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Email */}
            <a href="mailto:sleepermanz@gmail.com" className="text-base hover:underline">
                sleepermanz@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex flex-row items-center gap-4">
                {socials.map((s) => (
                    <a
                        key={s.type}
                        href={s.href}
                        aria-label={s.type}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-9 h-9 rounded-md transition-opacity hover:opacity-70 ${
                            s.boxed ? "bg-black" : ""
                        }`}
                    >
                        <SocialIcon type={s.type} />
                    </a>
                ))}
            </div>
        </div>
    );
}