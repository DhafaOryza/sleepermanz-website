import Barier from "../../etc/Barier";
import TeamMemberCard, { type TeamMemberCardProps } from "../../etc/TeamMemberCard";

const teamMembers: TeamMemberCardProps[] = [
    { name: "NAI", role: "Team Lead", photo: "/team/nai.png" },
    { name: "MEL", role: "Lead Art", photo: "/team/mel.png" },
    { name: "DHAF", role: "Programmer", photo: "/team/dhaf.png" },
    { name: "SAV", role: "Animator", photo: "/team/sav.png" },
    { name: "SPARE 01", role: "Junior Artist", photo: null },
    { name: "SPARE 02", role: "Junior Animator", photo: null },
];

export default function AboutSection() {
    return (
        <div className="w-full flex flex-col items-center px-6 mt-16">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-8">
                <h1 className="inline-block w-fit px-4 py-1 text-8xl font-black uppercase">
                    About Us
                </h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Intro */}
            <div className="max-w-2xl text-center mt-8 flex flex-col gap-2">
                <p className="text-lg">
                    Sleeper Manz is an independent game studio creating playful games,
                    expressive characters, and worlds worth exploring.
                </p>
                <p className="font-bold uppercase">Founded 2023 · Indonesia</p>
            </div>

            {/* Team */}
            <div className="mt-16 flex flex-col items-center gap-1">
                <h2 className="text-4xl font-black uppercase">Meet Our Team</h2>
                <p className="text-gray-500">Who is behind the studio?</p>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 mt-10 max-w-[700px]">
                    {teamMembers.map((member) => (
                        <div key={member.name} className= " w-36">
                            <TeamMemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-24 max-w-2xl text-center flex flex-col items-center gap-4">
                <h2 className="text-5xl font-black uppercase leading-tight">
                    Let's Make Something Fun.
                </h2>
                <p className="uppercase text-lg">
                    Have a project, game idea, or collaboration in mind?
                </p>
            </div>
        </div>
    );
}