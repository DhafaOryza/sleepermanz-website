export interface ServiceCardData {
    title: string;
    description: string;
    images: (string | null)[];
    includes: string[];
}

interface ServiceCardProps extends ServiceCardData {
    className?: string;
}

export default function ServiceCard({
                                        title,
                                        description,
                                        images,
                                        includes,
                                        className = "",
                                    }: ServiceCardProps) {
    const columns = Math.min(images.length, 3);
    const colsClass =
        columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-3";

    return (
        <div
            className={`flex flex-col border-2 border-r-[6px] border-b-[6px] border-black overflow-hidden ${className}`}
        >
            {/* Image collage */}
            <div className={`w-full grid ${colsClass} gap-1`}>
                {images.map((src, i) =>
                    src ? (
                        <img
                            key={i}
                            src={src}
                            alt={`${title}-${i}`}
                            loading="lazy"
                            className="w-full h-32 object-cover"
                        />
                    ) : (
                        <div key={i} className="w-full h-32 bg-gray-300" />
                    )
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-center gap-2 text-center">
                <h3 className="font-black uppercase">{title}</h3>
                <p className="text-sm text-gray-600 max-w-sm">{description}</p>

                <div className="mt-3 w-full text-left">
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