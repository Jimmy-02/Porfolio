import {FaGithub} from "react-icons/fa6";
import { track } from "@vercel/analytics";

export default function Github() {
  return (
    <a
      href="https://github.com/Jimmy-02"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
      onClick={() => track("click_github")}
    >
      <FaGithub className="size-4" />
    </a>
  );
}
