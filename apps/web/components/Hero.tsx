import Image from "next/image";
import Container from "@/components/Container";
import Particles from "@/components/Particles";

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-64px)] items-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.12),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_0%,rgba(16,185,129,0.08),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] opacity-20" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-400/40 to-transparent blur-sm" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-24 w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="pt-20 text-sm uppercase tracking-[0.3em] text-white/50">
              Fullsnake Developer
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Hi, I&apos;m <span className="text-cyan-300">Jimmy</span>
              <br />a Fullstack Developer
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              I create web applications with a strong focus on performance,
              maintainable architecture, and polished user interfaces. 
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/50">
              <p>
                <span className="text-white/70">Name:</span> Nguyen Anh Truong Tai
              </p>
              <p>
                <span className="text-white/70">Email:</span> tainat1202@gmail.com
              </p>
              <p>
                <span className="text-white/70">Date of Birth:</span> 2002
              </p>
            </div>
            <div className="mt-6 mb-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-cyan-500 to-emerald-500 opacity-30 blur-2xl" />

            <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl md:h-96">
              <Image
                src="/fip.png"
                alt="avatar"
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />

              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}