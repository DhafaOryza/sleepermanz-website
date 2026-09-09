const STORE_ICONS: Record<string, string> = {
    steam: "/assets/stores/steam.svg",
    playstore: "/assets/stores/playstore.svg",
    appstore: "/assets/stores/appstore.svg",
    itch: "/assets/stores/itch.svg",
    epic: "/assets/stores/epic.svg",
    web: "/assets/stores/web.svg",
};

interface StoresIconProps {
    type: string;
    className?: string;
}

export default function StoresIcon({ type, className = "" }: StoresIconProps) {
    const iconSrc = STORE_ICONS[type.toLowerCase()];

    if (!iconSrc) return null;

    return (
        <div className={`w-fit h-fit ${className}`}>
            <img src={iconSrc} alt={`${type}-store-icon`} className="w-4 h-4" />
        </div>
    );
}