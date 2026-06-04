import SectionHeader from "@/components/ui/SectionHeader"
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu"

const contactInfo = 
[
    {
        icon: LuMail,
        label: "Email",
        value: "aaltwt49@example.com",
        href: "mailto:aaltwt49@example.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+964 7728422106",
        href: "tel:+9647728422106"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Iraq Baghdad",
        href: "#"
    },
]
export default function ContactSection() {
    return (
        <section id="contact" className="py-24 overflow-hidden relative">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
                <SectionHeader
                    title="Let’s build "
                    highlight="something great"
                    badge="Contact"
                    description="Have a project in mind? I’d love to hear about it. Let’s connect." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <form className="p-6 rounded-3xl bg-surface border border-border space-y-4 shadow-xl">
                        <h3 className="text-xl font-semibold text-text">Send a message</h3>

                        <div>
                            <label className="text-sm text-gray-400 block mb-2">Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-3 py-2 rounded-2xl bg-background text-text outline-none border border-border focus:border-primary transition"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 block mb-2">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-3 py-2 rounded-2xl bg-background text-text outline-none border border-border focus:border-primary transition"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 block mb-2">Message</label>
                            <textarea
                                rows={3}
                                required
                                placeholder="Your message"
                                className="w-full px-3 py-2 rounded-2xl bg-background text-text outline-none border border-border focus:border-primary transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-full flex items-center justify-center gap-2 border border-transparent bg-primary text-white font-medium hover:opacity-90 transition"
                        >
                            Send Message <LuSend className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="p-2">
                        <h3 className="text-xl font-semibold text-text mb-8">Contact Information</h3>

                        <div className="space-y-4">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-border/70 bg-background/60 p-4">
                                        <div className="min-w-48px min-h-48px flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="">
                                            <p className="text-xs uppercase tracking-[0.25em] text-gray-400  hover:text-primary transition">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-sm text-text hover:text-primary transition">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm text-text">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
