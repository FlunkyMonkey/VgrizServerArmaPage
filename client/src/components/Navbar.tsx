import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="bg-dark-darker py-4 px-6 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-white">V</span><span className="text-primary">GRIZ</span>
              <span className="ml-2 text-sm text-gray-400 hidden sm:inline-block">| ARMA Reforger Server</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <Link href="/" className="text-white hover:text-primary-light transition-colors py-1 px-3">
            Home
          </Link>
          <a href="/#specs" className="text-white hover:text-primary-light transition-colors py-1 px-3">
            Specs
          </a>
          <a href="/#feedback" className="text-white hover:text-primary-light transition-colors py-1 px-3">
            Feedback
          </a>
          <Link href="/view-feedback" className="text-white hover:text-primary-light transition-colors py-1 px-3">
            View Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}
