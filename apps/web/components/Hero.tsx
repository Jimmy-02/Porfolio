import Image from "next/image";
import Container from "@/components/Container";
import Particles from "@/components/Particles";
import SocialLinks from "@/components/SocialLinks";
import { Download } from "lucide-react";
import { track } from "@vercel/analytics";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-12"
    >
      <Particles />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-cyan-500/30 to-emerald-500/30 blur-2xl" />

            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:h-48 sm:w-48 md:h-56 md:w-56">
              <Image
                src="/fip.png"
                alt="Nguyen Anh Truong Tai avatar"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                priority
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Nguyen Anh Truong Tai
            </h1>

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90 sm:text-base">
              Software Engineer
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base md:text-lg">
            I build modern web applications with a focus on clean architecture,
            performance, and polished user experiences.
          </p>

          <SocialLinks className="mt-6 justify-center" />
          <div className="mt-4 flex justify-center">
            <a
              href="https://www.youtube.com/watch?v=fdppIIWets8"
              target="_blank"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:border-cyan-400/30 hover:text-cyan-300 hover:bg-white/10"
              onClick={() => track("click_download_cv")}
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
