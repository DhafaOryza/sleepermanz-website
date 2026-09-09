const SOCIAL_ICONS: Record<string, string> = {
    youtube: "/assets/socials/youtube.svg",
    instagram: "/assets/socials/instagram.svg",
    linkedin: "/assets/socials/linkedin.svg",
    x: "/assets/socials/x.svg",
};

interface SocialIconProps {
    type: string;
    className?: string;
}

export default function SocialIcon({ type, className = "" }: SocialIconProps) {
    const iconSrc = SOCIAL_ICONS[type.toLowerCase()];

    if (!iconSrc) return null;

    return (
        <div className={`w-fit h-fit ${className}`}>
            <img src={iconSrc} alt={`${type}-social-icon`} className="w-4 h-4" />
        </div>
    );
}