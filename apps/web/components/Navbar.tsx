import Container from "@/components/Container";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-[#06111a]/55 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.2em] text-white"
        >
          JIMMY
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}