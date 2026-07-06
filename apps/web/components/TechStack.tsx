import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiBun,
  SiTurborepo,
  SiVercel,
  SiRender,
  SiExpress,
  SiNestjs,
  SiGithubactions,
} from "react-icons/si";
import { LuFolderTree } from "react-icons/lu";
import Container from "@/components/Container";

type LucideLikeIcon = React.ComponentType<{ className?: string }>;

type MixedTechItem = {
  name: string;
  icon: IconType | LucideLikeIcon;
};

const languages: MixedTechItem[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Dart", icon: SiDart },
];

const frameworks: MixedTechItem[] = [
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const databases: MixedTechItem[] = [
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
];

const tools: MixedTechItem[] = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "CI/CD", icon: SiGithubactions },
  { name: "Docker", icon: SiDocker },
  { name: "Bun", icon: SiBun },
  { name: "Turborepo", icon: SiTurborepo },
  { name: "Monorepo", icon: LuFolderTree },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

function TechBadge({ item }: { item: MixedTechItem }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white">
      <Icon className="h-4 w-4 shrink-0" />
      <span>{item.name}</span>
    </div>
  );
}

function TechGroup({
  title,
  items,
}: {
  title: string;
  items: MixedTechItem[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/80">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <TechBadge key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="relative pt-16 pb-8 md:pt-20 md:pb-10">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Tech Stack
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Technologies I work with
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <TechGroup title="Programming Languages" items={languages} />
            <TechGroup title="Frameworks and Libraries" items={frameworks} />
            <TechGroup title="Databases" items={databases} />
            <TechGroup title="Tools & Others" items={tools} />
          </div>
        </div>
      </Container>
    </section>
  );
}
