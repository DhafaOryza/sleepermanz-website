import ServiceSectionHeader from "./ServiceSectionHeader";
import ServiceCard from "./ServiceCard";
import { animationServices } from "./DataDummy";

export default function AnimationSection() {
    return (
        <div className="w-full">
            <ServiceSectionHeader title="Animation" />
            <div className="w-full grid grid-cols-2 gap-6">
                {animationServices.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </div>
    );
}