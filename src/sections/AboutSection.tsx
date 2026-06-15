import Image from "next/image";
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 overflow-hidden relative">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="hidden lg:flex justify-center lg:justify-start">
                    <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />
                        <div className="w-[85%] h-[85%] relative">
                            <Image fill src="/images/me.png" alt="About me" className="z-10 object-cover rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <span className="text-sm inline-block px-4 py-1.5 rounded-full border border-border bg-surface/80 text-primary">
                        About Me
                    </span>
                    <h2 className="text-3xl font-bold text-gray-300">
                        My Name is Tabarak Ali from Baghdad-Iraq and I have 24 years old.
                    </h2>
                    <p className="text-gray-400 max-w-xl tracking-wide">
                        I'm a software engineer who enjoys building useful web applications and learning how things work behind the scenes. I mainly work with JavaScript, TypeScript, React, and Next.js, and I have a strong interest in backend development and system design.
                    </p>
                    <p className="text-gray-400 max-w-xl tracking-wide">
                        I'm always looking for opportunities to learn, build, and solve real-world problems through technology.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuCode className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Clean code</p>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Fullstack Apps</p>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuRocket className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}