"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Github from "./Github";
import Linkedin from "./Linkedin";

const navItems = [
  { label: "Home", href: "#", id: "home" },
  { label: "Tech Stack", href: "#techstack", id: "techstack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element:
          item.id === "home"
            ? document.documentElement
            : document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 120;

      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 1; i--) {
        const section = sections[i].element;
        if (!section) continue;

        const offsetTop = section.offsetTop;
        if (scrollPosition >= offsetTop) {
          setActiveSection(sections[i].id);
          return;
        }
      }

      setActiveSection("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-[#06111a]/55 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          onClick={() => setActiveSection("home")}
          className="text-sm font-semibold tracking-[0.2em] text-white"
        >
          JIMMY
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative text-sm transition ${
                    isActive
                      ? "text-cyan-300"
                      : "text-white/70 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-[22px] left-0 h-px bg-cyan-300 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="ml-2 flex items-center gap-3">
            
            <Github />
            <Linkedin />
          </div>
        </div>
      </Container>
    </header>
  );
}
