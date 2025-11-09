function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-lg">
          <div className="absolute left-1/2 top-1/2 -z-[1] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold md:text-3xl">Start building in minutes</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Spin up a full stack app with a beautiful UI, database, and API endpoints ready to go.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-blue-700 hover:bg-blue-50"
              >
                Get early access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
