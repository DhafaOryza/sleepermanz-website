
import Barier from "../../etc/Barier";
import CapabilityGroup from "../../etc/CapabilityGroup";
import ToolsBar from "../../etc/Tools/ToolsBar";

const capabilityGroups = [
    {
        title: "Game Art",
        items: ["Character Design", "Environment Art", "UI/UX", "Illustration"],
    },
    {
        title: "Animation",
        items: ["2D Animation", "Spine", "Character Animation", "VFX"],
    },
    {
        title: "Game Development",
        items: ["Gameplay", "Game Systems", "UI Implementation", "Prototyping"],
    },
];

const capabilityImages = [
    "/capabilities/1.png",
    "/capabilities/2.png",
    "/capabilities/3.png",
    "/capabilities/4.png",
    "/capabilities/5.png",
    "/capabilities/6.png",
];

const tools = ["photoshop", "illustrator", "aftereffects", "spine", "figma", "blender", "unity", "clipstudio"];

export default function Capabilities() {
    return (
        <div className="w-full flex flex-col items-center px-6 mt-16">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-8">
                <h1 className="inline-block w-fit px-4 py-1 text-8xl font-black uppercase">
                    Capabilities
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-row gap-10 mt-10">
                {/* Image Wrapper */}
                <div className="w-[55%] grid grid-cols-3 grid-rows-2 gap-1 border-2 border-r-[6px] border-b-[6px] border-black overflow-hidden">
                    {capabilityImages.map((url, i) =>
                        url ? (
                            <img
                                key={i}
                                src={url}
                                alt={`capability-${i}`}
                                className="w-full h-full object-cover aspect-square"
                            />
                        ) : (
                            <div key={i} className="w-full h-full bg-gray-400 aspect-square" />
                        )
                    )}
                </div>

                {/* Detail Wrapper */}
                <div className="w-[45%] flex flex-col gap-6">
                    {capabilityGroups.map((group) => (
                        <CapabilityGroup key={group.title} {...group} />
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="w-full mt-10">
                <ToolsBar tools={tools} />
            </div>
        </div>
    );
}