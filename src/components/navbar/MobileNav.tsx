import Link from "next/link"
import LinkButton from "../ui/LinkButton"
import { LuDownload } from "react-icons/lu"
import { navLinks } from "./Navbar"

interface MobileNavProps {
    navOpen: boolean
}

export default function MobileNav({ navOpen }: MobileNavProps) {
    return (
        <>
            <div className={`fixed inset-0 z-40 lg:hidden bg-background/70
            background-blur-sm transition-all duration-500 ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} />

            <aside className={`fixed top-0 right-0 z-50 h-full w-[80%] sm:w-[60%] lg:hidden  bg-surface/95 backdrop-blur-md 
              border-1  border-border flex flex-col items-center 
                justify-between space-y-2 px-6 transition-all duration-500 
                ${navOpen ? "translate-x-0" : "translate-x-full"}`}>

                <ul className="w-full mt-10 space-y-2">
                    {navLinks.map((link, index) => (
                        <li key={index}
                            className="block w-full text-center py-4 px-6 rounded-lg
                        font-medium text-text border border-transparent transition-all duration-300
                        hover:bg-primary/10 hover:text-primary hover:border-border
                        ">
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}

                    <div className="w-full flex justify-center m-auto">
                    <LinkButton
                        iconPostion="left"
                        rounded
                        icon={LuDownload}
                        text="download CV"
                        href="/documents/CV-TabarakAli.pdf"
                        download
                    />
                </div>
                </ul>

                
            </aside>
        </>
    )
}
