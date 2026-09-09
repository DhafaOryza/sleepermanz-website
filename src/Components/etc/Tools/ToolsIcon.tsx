const TOOL_ICONS: Record<string, string> = {
    photoshop: "/assets/tools/photoshop.svg",
    illustrator: "/assets/tools/illustrator.svg",
    aftereffects: "/assets/tools/aftereffects.svg",
    spine: "/assets/tools/spine.svg",
    figma: "/assets/tools/figma.svg",
    blender: "/assets/tools/blender.svg",
    unity: "/assets/tools/unity.svg",
    clipstudio: "/assets/tools/clipstudio.svg",
};

interface ToolIconProps {
    name: string;
    className?: string;
}

export default function ToolIcon({ name, className = "" }: ToolIconProps) {
    const iconSrc = TOOL_ICONS[name.toLowerCase()];

    if (!iconSrc) return null;

    return (
        <div className={`w-24 h-24 flex items-center justify-center rounded-lg bg-black ${className}`}>
            <img src={iconSrc} alt={`${name}-icon`} className="object-cover" />
        </div>
    );
}