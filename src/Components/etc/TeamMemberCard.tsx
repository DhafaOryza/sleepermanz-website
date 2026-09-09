import { useState } from "react";

export type TeamMemberCardProps = {
    name: string;
    role: string;
    photo?: string | null;
    imgPosition?: "center" | "top" | "bottom";
};

export default function TeamMemberCard({
                                           name,
                                           role,
                                           photo,
                                           imgPosition = "top",
                                       }: TeamMemberCardProps) {
    const [imgError, setImgError] = useState(false);
    const showPhoto = photo && !imgError;
    const objectPositionClass =
        imgPosition === "top" ? "object-top" : imgPosition === "bottom" ? "object-bottom" : "object-center";

    return (
        <div className="flex flex-col items-center gap-2">
            {showPhoto ? (
                <img
                    src={photo}
                    alt={name}
                    onError={() => setImgError(true)}
                    className={`w-24 h-24 rounded-full object-cover ${objectPositionClass} border-2 border-black`}
                />
            ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 border-2 border-black" />
            )}
            <div className="text-center">
                <p className="font-bold uppercase text-sm">{name}</p>
                <p className="text-xs text-gray-500">{role}</p>
            </div>
        </div>
    );
}