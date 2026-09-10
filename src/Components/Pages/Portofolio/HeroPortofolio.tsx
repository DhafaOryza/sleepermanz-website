
import Barier from "../../etc/Barier";

export default function HeroPortofolio() {
    return (
        <div className="w-full flex flex-col items-center px-6">
            {/* Header */}
            <div className="w-full flex flex-row items-center justify-center gap-6 mt-10">
                <Barier width="full" height="2" className="flex-1" />
                <h1 className="shrink-0 text-6xl font-black text-center leading-tight uppercase">
                    Our Work
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>
        </div>
    );
}