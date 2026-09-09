
import ToolIcon from "./ToolsIcon";

interface ToolsBarProps {
    tools: string[];
}

export default function ToolsBar({ tools }: ToolsBarProps) {
    return (
        <div className="w-full border-2 border-r-[6px] border-b-[6px] border-black rounded-sm p-6">
            <h3 className="text-center text-[62px] font-extrabold uppercase mb-4">Tools</h3>
            <div className="flex flex-row items-center justify-center gap-4">
                {tools.map((tool) => (
                    <ToolIcon key={tool} name={tool} />
                ))}
            </div>
        </div>
    );
}