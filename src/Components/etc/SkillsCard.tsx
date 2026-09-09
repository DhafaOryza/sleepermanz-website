
interface SkillsCardProps {
    title: string;
    description: string;
    number: string;
    bgColor: string;
}

export default function SkillsCard({ title, description, number, bgColor }: SkillsCardProps) {
    return (
        <div
            className="relative w-full h-82 p-8 overflow-hidden border-2 rounded-sm border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: bgColor }}
        >
            <h3 className="text-5xl font-extrabold uppercase">{title}</h3>
            <p className="text-3xl mt-2 max-w-[70%]">{description}</p>

            <span className="absolute bottom-2 right-4 text-9xl font-black text-black/20 select-none">
                {number}
            </span>
        </div>
    );
}