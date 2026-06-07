import Logo from "@/components/navbar/Logo";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/TabarakCodeCraft",
      icon: LuGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/tabarak-ali-star/",
      icon: LuLinkedin,
      label: "LinkedIn",
    },
    {
      href: "aaltwt49@gmail.com",
      icon: LuMail,
      label: "Email",
    },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "aaltwt49@gmail.com",
      href: "mailto:aaltwt49@gmail.com",
    },
    {
      label: "Phone",
      value: "+964 7728422106",
      href: "tel:+9647728422106",
    },
    {
      label: "Location",
      value: "Baghdad, Iraq",
      href: "#",
    },
  ];

  return (
    <footer id="footer" className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:justify-between">
          <div className="space-y-4 max-w-xl">
            <Logo />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Contact
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="text-sm text-text">
                    <p className="font-semibold">{item.label}</p>
                    {item.href !== "#" ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-primary transition"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-sm text-gray-300">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-12 h-12 rounded-full border border-border bg-surface text-gray-300 flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tabarak Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}