import { helloUi } from "@portfolio/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p>{helloUi()}</p>
      </div>
    </main>
  );
}
