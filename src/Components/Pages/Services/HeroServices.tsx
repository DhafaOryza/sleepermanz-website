import Barier from "../../etc/Barier";

export default function HeroServices() {
    return (
        <div className="w-full flex flex-col items-center text-center mt-10">
            <div className="w-full flex flex-row items-center gap-6">
                <Barier width="full" height="2" className="flex-1" />
                <h1 className="shrink-0 text-6xl font-black uppercase leading-tight">
                    What Can We
                    <br />
                    Build For You?
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>
            <p className="max-w-xl mt-4 text-gray-600">
                From game development to art and animation, we help turn ideas into
                playable experiences.
            </p>
        </div>
    );
}