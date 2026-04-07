import Image from "next/image";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.15),transparent_60%)]" />

      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Fullsnake Developer
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
              I build clean, modern, and scalable web experiences.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              I create web applications with a strong focus on performance,
              maintainable architecture, and polished user interfaces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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

            <div className="relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <Image
                src="/fip.png"
                alt="avatar"
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
