"use client"
import Logo from "@/components/navbar/Logo";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/TabarakCodeCraft",
      icon: LuGithub,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/tabarak-ali-star/",
      icon: LuLinkedin,
      label: "LinkedIn",
      color: "hover:text-[#0077b5]",
    },
    {
      href: "mailto:aaltwt49@gmail.com",
      icon: LuMail,
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const contactInfo = [
    {
      icon: LuMail,
      label: "Email",
      value: "aaltwt49@gmail.com",
      href: "mailto:aaltwt49@gmail.com",
    },
    {
      icon: LuPhone,
      label: "Phone",
      value: "+964 7728422106",
      href: "tel:+9647728422106",
    },
    {
      icon: LuMapPin,
      label: "Location",
      value: "Baghdad, Iraq",
      href: "#",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 },
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-gradient-to-b from-background via-background to-gray-900/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/5" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="inline-block">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting elegant digital experiences with passion and precision.
              Let's build something amazing together.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`
                        w-10 h-10 rounded-full border border-white/10 
                        bg-white/5 backdrop-blur-sm
                        flex items-center justify-center
                        text-gray-400 transition-all duration-300
                        hover:border-white/20 hover:bg-white/10
                        ${item.color}
                      `}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={index}
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-3 group"
                  >
                    <Icon className="w-4 h-4 text-primary/60 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">{item.label}</p>
                      {item.href !== "#" ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm text-gray-300">{item.value}</p>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>




        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tabarak Ali. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>


    </footer>
  );
}