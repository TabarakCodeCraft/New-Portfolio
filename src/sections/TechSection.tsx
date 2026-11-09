"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import React, { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiElectron,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Tech = {
  name: string;
  icon: IconType;
  years: number;
  level: number;
  color: string;
};

const technologies: Tech[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    years: 5,
    level: 95,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    years: 2,
    level: 70,
    color: "#3178C6",
  },

  { name: "React js", icon: SiReact, years: 4, level: 90, color: "#61DAFB" },
  { name: "Next js", icon: SiNextdotjs, years: 2, level: 85, color: "#ffffff" },

  {
    name: "Express js",
    icon: SiExpress,
    years: 4,
    level: 80,
    color: "#ffffff",
  },
  { name: "Prisma ORM", icon: SiPrisma, years: 2, level: 75, color: "#5A67D8" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    years: 4,
    level: 75,
    color: "#4169E1",
  },
  { name: "MongoDB", icon: SiMongodb, years: 1, level: 65, color: "#47A248" },
  { name: "AWS", icon: FaAws, years: 1, level: 55, color: "#FF9900" },
  {
    name: "Electron js",
    icon: SiElectron,
    years: 1,
    level: 60,
    color: "#47848F",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    years: 4,
    level: 95,
    color: "#06B6D4",
  },
  { name: "Figma", icon: SiFigma, years: 4, level: 95, color: "#F24E1E" },
];

function CountUp({ to, start }: { to: number; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, to]);

  return <>{value}</>;
}

export default function TechSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-primary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Tech I "
          highlight="work with"
          badge="Tech Stack"
          description="The tools and technologies I use every day to build fast, scalable and clean applications."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className={`group relative p-6 rounded-3xl border border-primary/30 backdrop-blur-sm
                                overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary/70
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl
                                    opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: tech.color }}
                />

                <div className="relative flex justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl bg-gray-800/70 border border-primary/20 flex items-center justify-center
                                        transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <Icon
                      size={32}
                      className="text-primary transition-all duration-500 group-hover:text-(--tech-color) group-hover:drop-shadow-[0_0_10px_var(--tech-color)]"
                      style={{ ["--tech-color" as string]: tech.color }}
                    />
                  </div>
                </div>

                <h3 className="relative text-lg font-semibold text-text text-center mt-4">
                  {tech.name}
                </h3>

                <p className="relative text-center mt-1 text-sm text-gray-400">
                  <span className="text-primary text-xl font-semibold">
                    <CountUp to={tech.years} start={isVisible} />+
                  </span>{" "}
                  {tech.years === 1 ? "year" : "years"}
                </p>

                <div className="relative mt-4 h-1.5 w-full rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1400 ease-out"
                    style={{
                      width: isVisible ? `${tech.level}%` : "0%",
                      transitionDelay: `${index * 70 + 300}ms`,
                      background:
                        "linear-gradient(90deg, rgba(255,77,187,0.35), rgba(255,77,187,0.95))",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
