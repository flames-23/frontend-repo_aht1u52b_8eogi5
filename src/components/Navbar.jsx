import { Github } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 text-white font-bold">
            V
          </div>
          <span className="text-lg font-semibold text-gray-800">Vibe Coding</span>
        </div>
        <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#cta" className="hover:text-gray-900">Get started</a>
        </nav>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Github className="h-4 w-4" />
          Star
        </a>
      </div>
    </header>
  );
}

export default Navbar;
