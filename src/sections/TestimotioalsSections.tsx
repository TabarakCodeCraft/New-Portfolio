import SectionHeader from "@/components/ui/SectionHeader"
import Image from "next/image"
import { LuQuote } from "react-icons/lu"

const testmonials = [
    {
        name: "Nabba Nahith",
        role: "Startup Founder",
        image: "/images/NabbaNahith.jpg",
        feedback: "Tabarak is an inspiring success story for young people — full of positive energy, courageous, proactive, eager to learn, and intelligent.",

    },
    {
        name: "Yousif Abbas",
        role: "Architect & Team Lead",
        image: "/images/YousifAbbas.png",
        feedback: "Tabarak reminds me of myself when I was young: driven and hardworking. She is persistent and creatively productive in her work.",

    },
    {
        name: "Karrar Honi",
        role: "Manager International Company",
        image: "/images/KarrarHoni.jpg",
        feedback: "Tabarak is a valuable addition to the team — when she works you can see she doesn't just write code to build systems, she creates beautiful, artful solutions.",

    },
    {
        name: "Neo Kim",
        role: "System Design Manager",
        image: "/images/NeoKim.jpg",
        feedback: "Tabarak is one of the most creative and intelligent trainees — she loves learning and achieving, and is capable of solving the toughest problems.",

    },

]
export default function TestimotioalsSections() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto space-y-16">
                <SectionHeader
                    title="What people say about me"
                    badge="Testimonials"
                    description="Feedback from clients and collabrators Ive worked with on various projects.."/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testmonials.map((item, index) => (
                        <div key={item.name} className="group relative p-6 rounded-2xl bg-surface border border-border
                        transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg
                        ">
                            <LuQuote className="absolute top-5 right-5 text-primary/10 w-10 h-10" />
                            <p>{item.feedback}</p>
                            <div className="flex items-center gap-4">
                                <Image width={50} height={50} src={item.image} alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border border-border"
                                />
                                <div>
                                    <h4 className="text-text font-semibold group-hover:text-primary transition"> {item.name}</h4>
                                </div>
                                <p className="text-sm text-gray-400">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
