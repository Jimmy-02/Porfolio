import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
            Fullsnake Developer
          </p>

          <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            I build clean, modern, and scalable web experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
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
      </Container>
    </section>
  );
}