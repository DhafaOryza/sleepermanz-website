
import Barier from "../../etc/Barier";
import SkillsCard from "../../etc/SkillsCard";

const skills = [
    {
        title: "2D Game Development",
        description: "Character-driven games with expressive visuals.",
        number: "01",
        bgColor: "#7FB2F0",
    },
    {
        title: "2D Art & Animation",
        description: "Stylized characters, environments, UI and gameplay animation.",
        number: "02",
        bgColor: "#5FE3B3",
    },
    {
        title: "Indie Game Development",
        description: "Small-to-mid scale games focused on strong gameplay identity.",
        number: "03",
        bgColor: "#F98C7C",
    },
    {
        title: "Prototyping",
        description: "Turning game ideas into playable prototypes.",
        number: "04",
        bgColor: "#C79EF0",
    },
];

export default function Specialization() {
    return (
        <div className="w-full flex flex-col items-center px-6 mt-16">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-8">
                <h1 className="inline-block w-fit px-4 py-1 text-8xl font-black uppercase">
                    Specialization
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Main Content */}
            <div className="w-full grid grid-cols-2 gap-8 mt-10">
                {skills.map((skill) => (
                    <SkillsCard key={skill.title} {...skill} />
                ))}
            </div>
        </div>
    );
}