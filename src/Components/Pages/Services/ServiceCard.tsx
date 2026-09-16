export interface ServiceCardData {
    title: string;
    description: string;
    images: (string | null)[];
    includes: string[];
    layout?: "grid" | "featured-left";
}

interface ServiceCardProps extends ServiceCardData {
    className?: string;
    maxImages?: number;
}

function ImageCell({ src, alt, className }: { src: string | null; alt: string; className: string }) {
    return src ? (
        <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />
    ) : (
        <div className={`bg-gray-300 ${className}`} />
    );
}

export default function ServiceCard({
                                        title,
                                        description,
                                        images,
                                        includes,
                                        layout = "grid",
                                        maxImages,
                                        className = "",
                                    }: ServiceCardProps) {
    const displayedImages = maxImages ? images.slice(0, maxImages) : images;

    // 4 gambar sengaja dipetakan ke 2 kolom (jadi 2x2), bukan 3 kolom (yang bakal nyisain 1 nyempil sendirian di baris ke-2)
    const columns =
        displayedImages.length === 4 ? 2 : Math.min(displayedImages.length, 3);
    const colsClass =
        columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-3";

    return (
        <div
            className={`flex flex-col border-2 border-r-[6px] border-b-[6px] border-black overflow-hidden ${className}`}
        >
            {/* Image collage */}
            {layout === "featured-left" ? (
                <div className="w-full h-64 flex flex-row gap-1">
                    <ImageCell
                        src={displayedImages[0] ?? null}
                        alt={`${title}-0`}
                        className="w-2/3 h-full"
                    />
                    <div className="w-1/3 h-full flex flex-col gap-1">
                        {displayedImages.slice(1).map((src, i) => (
                            <ImageCell
                                key={i}
                                src={src}
                                alt={`${title}-${i + 1}`}
                                className="w-full flex-1"
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={`w-full grid ${colsClass} gap-1`}>
                    {displayedImages.map((src, i) => (
                        <ImageCell key={i} src={src} alt={`${title}-${i}`} className="w-full h-32" />
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col items-center gap-2 text-center">
                <h3 className="font-black uppercase">{title}</h3>
                <p className="text-sm text-gray-600 max-w-sm">{description}</p>

                <div className="mt-3 max-w-md mx-auto text-left">
                    <p className="font-bold text-sm uppercase mb-1">Includes:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        {includes.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="shrink-0">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}