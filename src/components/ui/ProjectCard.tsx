import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    gitHubLink?: string;
    image: string;
}
export default function ProjectCard({ title, description, tags, liveUrl, gitHubLink, image }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-[30px] bg-surface border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg h-full flex flex-col">

            <div className="overflow-hidden rounded-t-[30px]">
                <Image
                    src={image}
                    alt={title}
                    width={640}
                    height={360}
                    className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-[240px] rounded-t-[30px] bg-background/50 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="p-6 space-y-5 flex-1 flex flex-col">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-3 mt-auto">
                    {liveUrl && (
                        <Link href={liveUrl} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition">
                            <LuExternalLink className="w-4 h-4" />
                            Live
                        </Link>
                    )}
                    {gitHubLink && (
                        <Link href={gitHubLink} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition">
                            <LuGithub className="w-4 h-4" />
                            GitHub
                        </Link>
                    )}
                </div>

            </div>

        </div>
    )
}
