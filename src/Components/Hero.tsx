import Barier from "./etc/Barier";
import FrameImage from "./etc/FrameImage";

export default function Hero() {
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
            <FrameImage
                imageUrl=""
                stats={[
                    { value: "3 Years", label: "Of Experience" },
                    { value: "PC / Mobile / Web", label: "Platforms" },
                    { value: "Open", label: "For Services" },
                ]}
            />

            {/* Footer note */}
            <p className="text-center text-xs text-gray-400 mt-4">
                Founden in 2023, Sleeper Manz Studios <br />
                develops self-publishes and develop for service
            </p>
        </div>
    );
}