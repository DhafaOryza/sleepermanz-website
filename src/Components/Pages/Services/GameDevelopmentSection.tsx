import ServiceSectionHeader from "./ServiceSectionHeader";
import ServiceCard from "./ServiceCard";
import { gameDevServices } from "./DataDummy";

export default function GameDevelopmentSection() {
    return (
        <div className="w-full">
            <ServiceSectionHeader title="Game Development" />
            <div className="w-full grid grid-cols-2 gap-6 mb-20">
                {gameDevServices.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </div>
    );
}