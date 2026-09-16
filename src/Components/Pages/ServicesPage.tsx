import HeroServices from "./Services/HeroServices";
import GameArtSection from "./Services/GameArtSection";
import AnimationSection from "./Services/AnimationSection";
import GameDevelopmentSection from "./Services/GameDevelopmentSection";

export default function ServicesPage() {
    return (
        <div className="px-6 py-6">
            <HeroServices />
            <GameArtSection />
            <AnimationSection />
            <GameDevelopmentSection />
        </div>
    );
}