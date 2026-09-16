import ServiceSectionHeader from "./ServiceSectionHeader";
import ServiceCard from "./ServiceCard";
import { gameArtServices } from "./DataDummy";

export default function GameArtSection() {
    return (
        <div className="w-full">
            <ServiceSectionHeader title="Game Art" />
            <div className="w-full grid grid-cols-2 gap-6">
                {gameArtServices.map((service, i) => {
                    const isLast = i === gameArtServices.length - 1;
                    return (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            maxImages={isLast ? undefined : 4}
                            className={isLast ? "col-span-2" : ""}
                        />
                    );
                })}
            </div>
        </div>
    );
}