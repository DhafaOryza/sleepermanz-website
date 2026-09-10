import Barier from "../../etc/Barier";
import FrameImage from "../../etc/FrameImage";

export default function Hero() {
    const imageUrl = "/hero-image.png";
    const stats = [
        { value: "3 Years", label: "Of Experience" },
        { value: "PC / Mobile / Web", label: "Platforms" },
        { value: "Open", label: "For Services" },
    ];

    return (
        <div className="w-full flex flex-col items-center px-6">
            {/* Header + garis kiri-kanan */}
            <div className="w-full flex flex-row items-center justify-center gap-6 mt-10">
                <Barier width="full" height="2" className="flex-1" />
                <h1 className="shrink-0 text-6xl font-black text-center leading-tight uppercase">
                    We Make <br /> Playful Games
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Hero image */}
            <FrameImage imageUrl={imageUrl} className="mt-10" border={[2, 2, 6, 6]}>
                <div className="w-full grid grid-cols-3 divide-x divide-black border-t-2 border-black">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center py-6">
                            <span className="text-2xl font-extrabold">{stat.value}</span>
                            <span className="text-sm text-gray-500">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </FrameImage>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-400 mt-4">
                Founden in 2023, Sleeper Manz Studios <br />
                develops self-publishes and develop for service
            </p>
        </div>
    );
}