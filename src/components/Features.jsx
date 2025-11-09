import { Zap, Shield, Clock, Database } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant scaffolding',
    desc: 'Spin up complete full‑stack projects with best practices baked in.'
  },
  {
    icon: Shield,
    title: 'Type‑safe by default',
    desc: 'Strong typing and validation ensure reliable, maintainable code.'
  },
  {
    icon: Clock,
    title: 'Live preview',
    desc: 'See changes instantly with hot reload across frontend and backend.'
  },
  {
    icon: Database,
    title: 'Built‑in database',
    desc: 'Production‑ready persistence with schemas and migrations.'
  }
];

function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Everything you need to ship</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          A streamlined toolkit that helps you move from idea to production without the busywork.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
