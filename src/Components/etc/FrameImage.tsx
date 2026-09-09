import type React from "react";

type BorderSides = [left: number, top: number, right: number, bottom: number];

interface FrameImageProps {
    imageUrl?: string | null;
    imageHeight?: string;
    className?: string;
    children?: React.ReactNode;
    border?: BorderSides;
}

function FrameImage({
    imageUrl = null,
    imageHeight = "h-100",
    className = "",
    children,
    border = [2, 2, 6, 6],
}: FrameImageProps) {
    const [left, top, right, bottom] = border;

    return (
        <div
            className={`w-full rounded-sm overflow-hidden ${className}`}
            style={{
                borderStyle: "solid",
                borderColor: "black",
                borderLeftWidth: left,
                borderTopWidth: top,
                borderRightWidth: right,
                borderBottomWidth: bottom,
            }}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="image-url"
                    className={`w-full ${imageHeight} object-cover`}
                />
            ) : (
                <div className={`w-full ${imageHeight} bg-gray-100`} />
            )}

            {children}
        </div>
    );
}

export default FrameImage;