import { Mail, Phone } from "lucide-react";
import Linkedin from "../Linkedin";
import Github from "../Github";

export default function DirectChannels() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-6">
      <h3 className="text-2xl font-semibold text-white">Direct Channels</h3>
      <p className="mt-2 text-sm text-white/60">
        Reach out through the channel that works best for you.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href="mailto:tainat1202@gmail.com"
          className="flex flex-col items-center text-center rounded-2xl border border-white/8 bg-black/10 p-4 transition hover:border-cyan-400/20 hover:bg-white/5"
        >
          <div className="mb-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
            <Mail className="size-5" />
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            Email
          </p>
          <p className="mt-1 break-all text-sm font-medium text-white">
            tainat1202@gmail.com
          </p>
          <p className="mt-1 text-xs leading-5 text-white/55">
            Best for contact and opportunities.
          </p>
        </a>

        <a
          className="flex flex-col items-center text-center rounded-2xl border border-white/8 bg-black/10 p-4 transition hover:border-cyan-400/20 hover:bg-white/5 cursor-pointer"
        >
          <div className="mb-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
            <Phone className="size-5" />
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            Phone
          </p>
          <p className="mt-1 text-sm font-medium text-white">+84 79 455 1290</p>
          <p className="mt-1 text-xs leading-5 text-white/55">
            For quick contact if needed.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/tainat/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-center rounded-2xl border border-white/8 bg-black/10 p-4 transition hover:border-cyan-400/20 hover:bg-white/5"
        >
          <div className="mb-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
            <div className="[&>a]:border-none [&>a]:p-0 [&>a]:text-cyan-300">
              <Linkedin />
            </div>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            LinkedIn
          </p>
          <p className="mt-1 text-xs leading-5 text-white/55">
            Professional network and collaboration.
          </p>
        </a>

        <a
          href="https://github.com/Jimmy-02"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-center rounded-2xl border border-white/8 bg-black/10 p-4 transition hover:border-cyan-400/20 hover:bg-white/5"
        >
          <div className="mb-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
            <div className="[&>a]:border-none [&>a]:p-0 [&>a]:text-cyan-300">
              <Github />
            </div>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            GitHub
          </p>
          <p className="mt-1 text-xs leading-5 text-white/55">
            Review open-source work and projects.
          </p>
        </a>
      </div>
    </div>
  );
}
