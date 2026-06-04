"use client"
import LinkButton from "@/components/ui/LinkButton";
import DotGrid from "../components/hero/background";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home"
      className="relative min-h-screen overflow-hidden flex item-center pt-30 py-10" >

      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      <div className="inset-0 absolute">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#2F293A"
          activeColor="#ff4dbb"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-border">
            Software Engineer · Full-Stack Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text/90">
            Building modern web experiences with <span className="text-primary/70">clean code</span>
          </h1>
          <p className="text-gray-400 max-w-lg tracking-wide">
            Software Engineer with 4+ years of experience developing modern web applications, business platforms, ERP, and scalable solutions using React, Next.js, TypeScript, and contemporary backend technologies.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <LinkButton text="Get in touch" href="#contact" rounded icon={LuArrowRight} />
            <LinkButton text="View projects" href="#projects" rounded variant="outline" />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-85 h-85 md:w-110 md:h-110 rounded-full
          bg-surface/80 backdrop-border flex items-center justify-center
          ">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <Image fill src="/images/me.png" alt="profile-image" className="z-10 object-cover rounded-full" />
          </div>
        </div>

      </div>

    </section>
  )
}
