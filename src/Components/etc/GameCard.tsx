import FrameImage from "./FrameImage";
import StoresIcon from "./Icons/StoresIcon";

type BorderSides = [left: number, top: number, right: number, bottom: number];

interface GameCardProps {
    coverUrl: string;
    thumbnailUrls: [string, string, string];
    title: string;
    description: string;
    tags: string;
    store?: string;
    statusColor?: string;
    href?: string;
    border?: BorderSides;
}

export default function GameCard({
    coverUrl,
    thumbnailUrls,
    title,
    description,
    tags,
    store,
    statusColor = "",
    href = "#",
    border = [2, 2, 6, 6],
}: GameCardProps) {
    const [left, top, right, bottom] = border;

    const isReleased = Boolean(store);
    const statusLabel = isReleased ? "GO TO GAME" : "IN DEVELOPMENT";

    return (
        <div
            className="w-full flex flex-col rounded-sm p-4"
            style={{
                borderStyle: "solid",
                borderColor: "black",
                borderLeftWidth: left,
                borderTopWidth: top,
                borderRightWidth: right,
                borderBottomWidth: bottom,
            }}
        >
            <FrameImage imageUrl={coverUrl} imageHeight="h-40" border={[0, 0, 0, 0]}>
                <div className="w-full grid grid-cols-3 gap-1 py-1">
                    {thumbnailUrls.map((url, i) =>
                        url ? (
                            <img
                                key={i}
                                src={url}
                                alt={`${title}-thumb-${i}`}
                                className="w-full h-16 object-cover"
                            />
                        ) : (
                            <div key={i} className="w-full h-16 bg-gray-400" />
                        )
                    )}
                </div>
            </FrameImage>

            <div className="mt-3">
                <h3 className="text-lg font-extrabold uppercase">{title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-3">{description}</p>
            </div>

            <div className="flex flex-row items-center justify-between mt-3">
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                    {tags}
                </span>
                <a
                    href={href}
                    className={`flex flex-row items-center gap-4 px-3 py-3 text-xs font-semibold text-white rounded bg-gray-400`}
                    style={{ backgroundColor: statusColor }}
                >
                    {statusLabel}
                    {isReleased && store && <StoresIcon type={store} />}
                </a>
            </div>
        </div>
    );
}