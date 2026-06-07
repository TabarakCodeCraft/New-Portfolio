"use client"
import SectionHeader from "@/components/ui/SectionHeader"
import React, { useEffect, useRef, useState } from "react"

const experiences = [
    {
        role: "Fullstack Enginner",
        company: "Freelance",
        period: "2025- Present",
        location: "Remotely",
        description: "Designing and building production-ready web applications with a foucus on scalability, performance, and clean architecture. Implemented authentication systems, dashbords, and API integrations.",
        technologies: ["Next js", "React js", "Express js", "TypeScript", "Prisma ORM", "Postgress SQL", "MangoDB", "AWS",]
    },
    {
        role: "Frontend Web Developer",
        company: "Talabatey",
        period: "04/2025 - Present",
        location: "Remotely",
        description: "Managed front-end development of a React.js platform with 12+ components, ensuring seamless integration and responsive design Dashboard. Delivered fully functional app overcoming major React.js challenges, achieving 90% user satisfaction. Led development of a large-scale React.js project integrating 100+ complex APIs.",
        technologies: ["React js", "UI/UX", "Figma"]
    },
    {
        role: "Mid Level React JS Developer",
        company: "Al-Jazeera Telecom",
        period: "10/2024 - 07/2025",
        location: "Baghdad Al-Karahda 62'st",
        description: "Built high-quality dynamic interactive projects using React.js according to company needs. Handled API collections from the developer package with interfaces built by me. Strong background in logic and building philosophy for user interfaces.",
        technologies: ["React js", "UI/UX"]
    },
    {
        role: "Junior Fullstack Developer",
        company: "PureTik Company",
        period: "03/2024 - 10/2024",
        location: "Baghdad Al-Senaha Street",
        description: "Completed and submitted dr.Lab project tasks punctually, maintaining project timelines. Implemented efficient front-end and back-end solutions, reducing project time loss by 40%. Contributed to both front-end and back-end development across projects. Delivered project tasks on time, meeting 100% of deadlines.",
        technologies: ["Next js", "React js", "Express js", "Electron js", "Prisma ORM", "Postgres SQL"]
    },
]

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Experience that "
                    highlight="speaks volumes"
                    badge="Experience"
                    description="A timeline of my growth from learning the fundamentals to building real fullstack applications."
                />

                <div className="relative mt-14 experience-sheet">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-10" style={{ background: "linear-gradient(180deg, rgba(255,77,187,0.75), rgba(255,77,187,0.35), transparent)" }} />
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-8">
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-20">
                                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                </div>

                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`experience-card hover:border-primary/10 hover:transition ${index % 2 === 0 ? "experience-left" : "experience-right"} p-6 rounded-3xl border border-primary/30 backdrop-blur-sm transition-all duration-700 ${isVisible ? "open" : "closed"}`} style={{ transitionDelay: `${index * 90}ms` }}>
                                        <span className="text-primary text-sm font-medium">{exp.period}</span>
                                        <h3 className="text-2xl font-semibold mt-2 text-text">{exp.role}</h3>
                                        <p className="text-gray-300 mt-1">{exp.company}</p>
                                        <p className="text-sm text-gray-400 mt-4">{exp.description}</p>

                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300 whitespace-nowrap">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
