import { FaLinkedinIn } from "react-icons/fa6";

export default function Linkedin() {
    return (
      <a
        href="https://www.linkedin.com/in/tainat/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
      >
        <FaLinkedinIn className="size-4" />
      </a>
    );
}