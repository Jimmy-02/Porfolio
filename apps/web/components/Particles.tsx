type Particle = {
  id: number;
  size: string;
  top: string;
  left?: string;
  right?: string;
  delay?: string;
  duration?: string;
};

const particles: Particle[] = [
  {
    id: 1,
    size: "h-2 w-2",
    top: "10%",
    left: "8%",
    delay: "0s",
    duration: "5s",
  },
  {
    id: 2,
    size: "h-1.5 w-1.5",
    top: "18%",
    left: "28%",
    delay: "1s",
    duration: "6s",
  },
  {
    id: 3,
    size: "h-2.5 w-2.5",
    top: "16%",
    right: "16%",
    delay: "2s",
    duration: "7s",
  },
  {
    id: 4,
    size: "h-2 w-2",
    top: "32%",
    left: "12%",
    delay: "0.5s",
    duration: "5.5s",
  },
  {
    id: 5,
    size: "h-1.5 w-1.5",
    top: "38%",
    right: "10%",
    delay: "1.5s",
    duration: "6.5s",
  },
  {
    id: 6,
    size: "h-2.5 w-2.5",
    top: "54%",
    left: "46%",
    delay: "2.5s",
    duration: "7.5s",
  },
  {
    id: 7,
    size: "h-1.5 w-1.5",
    top: "70%",
    left: "18%",
    delay: "1.2s",
    duration: "5.8s",
  },
  {
    id: 8,
    size: "h-2 w-2",
    top: "76%",
    right: "22%",
    delay: "0.8s",
    duration: "6.2s",
  },
  {
    id: 9,
    size: "h-2.5 w-2.5",
    top: "86%",
    left: "70%",
    delay: "2.2s",
    duration: "7.2s",
  },
  {
    id: 10,
    size: "h-1.5 w-1.5",
    top: "62%",
    right: "38%",
    delay: "1.8s",
    duration: "5.2s",
  },
  {
    id: 11,
    size: "h-2 w-2",
    top: "26%",
    left: "60%",
    delay: "0.3s",
    duration: "6.8s",
  },
  {
    id: 12,
    size: "h-1.5 w-1.5",
    top: "82%",
    left: "38%",
    delay: "1.9s",
    duration: "7s",
  },
];

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-x-6 inset-y-0 z-0 overflow-hidden md:inset-x-10">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`absolute ${particle.size} rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)] animate-float`}
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}