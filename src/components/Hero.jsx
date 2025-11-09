import { Rocket, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-700">
            <Sparkles className="h-4 w-4" />
            Build apps visually with AI
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Launch ideas faster with your AI coding copilot
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Design, code, and ship full‑stack apps in minutes. Instant previews, smart scaffolding, and a beautiful developer experience.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700">
              <Rocket className="h-5 w-5" />
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50">Explore features</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
              alt="Product preview"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
          <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
