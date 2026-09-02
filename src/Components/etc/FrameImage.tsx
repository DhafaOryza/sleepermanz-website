
interface StatItem {
    value: string;
    label: string;
}

interface FrameImageProps {
    imageUrl?: string | null;
    stats?: StatItem[];
}

function FrameImage({ imageUrl = null, stats = [] }: FrameImageProps) {
    return (
        <div className="w-full mt-10 border-2 border-r-[6px] border-b-[6px] border-black rounded-sm overflow-hidden">
            {/* Image */}
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="image-url"
                    className="w-full h-100 object-cover"
                />
            ) : (
                <div className="w-full h-100 bg-gray-100" />
            )}

            {/* Stats Bar */}
            <div className="w-full grid grid-cols-3 divide-x divide-black border-t-2 border-black">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center py-6">
                        <span className="text-2xl font-extrabold">{stat.value}</span>
                        <span className="text-sm text-gray-500">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrameImage;