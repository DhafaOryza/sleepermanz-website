
interface CapabilityGroupProps {
    title: string;
    items: string[];
}

export default function CapabilityGroup({ title, items }: CapabilityGroupProps) {
    return (
        <div>
            <h3 className="text-5xl font-extrabold uppercase mb-2">{title}</h3>
            <ul className="flex flex-col gap-1 ml-6">
                {items.map((item) => (
                    <li key={item} className="text-[32px] text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}