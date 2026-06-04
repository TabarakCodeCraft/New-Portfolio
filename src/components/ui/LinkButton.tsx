import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
    href: string;
    text: string;
    icon?: IconType;
    iconPostion?: "left" | "right";
    rounded?: boolean;
    download?: boolean
    variant?: "primary" | "outline"
}


export default function LinkButton({
    href, text, icon, iconPostion = "right", rounded, variant = "primary", download = false }: LinkButtonProps) {
    const Icon = icon;

    const baseStyles = `
    relative px-6 py-3 font-medium ${rounded ? "rounded-full" : "rounded-lg"}
    inline-flex items-center justify-center gap-2
    overflow-hidden text-text
    border 
    transition-all duration-300 
    hover:scale-[1.02]
    active:scale-[0.98]`


    const variants = {
        primary: `bg-primary border-none`,
        outline: `bg-transparent text-text border-border hover:text-primary hover:border-primary hover:bg-primary/10`
    }

    return (
        <Link className={`${baseStyles} ${variants[variant]}`} href={href} download={download}>
            {Icon && iconPostion === "left" && (
                <Icon className="w-5 h-5 z-10" />
            )}
            <span className="z-10">{text}</span>
            {Icon && iconPostion === "right" && (
                <Icon className="w-5 h-5 z-10" />
            )}
        </Link>
    )
}
