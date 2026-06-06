"use client"
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import React, { useState } from "react";
const projects = [
    {
        title: "DR.Lab",
        description:
            "A desktop application built using React.js and Electron. Downloadable from the official site.",
        image: "/images/drlap.png",
        tags: ["Electron.js", "React.js"],
        liveUrl: "https://www.drlab.app/",
    },
    {
        title: "Storage Platform (StorIt)",
        description:
            "Cloud-based file storage and sharing platform inspired by Google Drive with authentication.",
        image: "/images/storeIt.png",
        tags: ["React", "Cloud"],
        gitHubLink: "https://github.com/TabarakCodeCraft/StoreIt-Clone-Google-Drive",
        liveUrl: "https://store-it-clone-google-drive-4ge8.vercel.app/",
    },
    {
        title: "PureTik website",
        description:
            "Company website for PureTik delivering digital solutions, cloud and data services.",
        image: "/images/puretik.png",
        tags: ["Next.js", "Tailwand CSS"],
        liveUrl: "https://www.puretik.com/ar",
    },
    {
        title: "Talabatey Packaging System",
        description:
            "Dashboard and frontend redesign used by thousands of users monthly with a responsive.",
        image: "/images/talabatey.png",
        tags: ["React", "Dashboard"],
        liveUrl:
            "https://www.linkedin.com/posts/tabarak-ali-star_im-so-happy-about-my-latest-achievement-activity-7357476830506827777-OMS0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErlMzwB9H1ANRGpX4abAEm-Ya0o8BQxLGc",
    },
    {
        title: "3D Skateboard App",
        description:
            "Interactive 3D skateboard customization app built with React Three Fiber and GSAP.",
        image: "/images/3d-skateboard.png",
        tags: ["3D", "Three.js"],
        gitHubLink: "https://github.com/TabarakCodeCraft/3d-Skateboard.git",
        liveUrl: "https://3d-skateboard-two.vercel.app/",
    },
    {
        title: "Macbook Style / Apple 3D",
        description:
            "Apple-style 3D showcase built with Three.js and GSAP, featuring scroll animations and responsive.",
        image: "/images/Apple3d.png",
        tags: ["Three.js", "GSAP"],
        gitHubLink: "https://github.com/TabarakCodeCraft/Apple-Website.git",
        liveUrl: "https://macbook-3d-by-tabarak.netlify.app/",
    },
    {
        title: "Awwwards Portfolio (3D)",
        description:
            "Animated, interactive 3D developer portfolio with scroll-based animations and production-level code.",
        image: "/images/3dapp.png",
        tags: ["Portfolio", "3D"],
        gitHubLink: "https://github.com/TabarakCodeCraft/My-New-Portfolio.git",
        liveUrl: "https://tabarak-dev.netlify.app",
    },
    {
        title: "GSAP Awwwards Site",
        description:
            "A showcase of GSAP-powered transitions and scroll effects paired with modern UI.",
        image: "/images/gsapProject.png",
        tags: ["Next.js", "GSAP", "Animations"],
        gitHubLink: "https://github.com/TabarakCodeCraft/GSAP-Awwwards-Website",
        liveUrl: "https://energydrink-website-with-gsap.netlify.app/",
    },
    {
        title: "Car Rental",
        description:
            "Full-stack car rental app with bookings, admin dashboard and multi-language support.",
        image: "/images/carRental.png",
        tags: ["Fullstack", "React"],
        gitHubLink: "https://github.com/TabarakCodeCraft/Car-Rental",
        liveUrl: "https://car-rental-frontend-by-tabarak2025.vercel.app/",
    },
    {
        title: "Car Lover",
        description:
            "Online code and markdown editor supporting live previews and local storage autosave.",
        image: "/images/carlover.png",
        tags: ["Html", "CSS"],
        gitHubLink: "https://github.com/TabarakCodeCraft/Car-lover",
        liveUrl: "https://car-lover-bytota.netlify.app/",
    },

];

export default function ProjectSection() {
    const [isVisible] = useState(true);

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto space-y-12">
                <div className={`transition duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                    <SectionHeader
                        title="Some of my recent "
                        highlight="work"
                        badge="Projects"
                        description="A selection of projects showcasing my ability to design, build, and scale modern fullstack applications."
                    />
                </div>

                <div className="project-animation-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 auto-rows-fr">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-panel h-full rounded-[30px] overflow-hidden ${isVisible ? "open" : ""}`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                image={project.image}
                                liveUrl={project.liveUrl}
                                gitHubLink={project.gitHubLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
