import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="bg-[#1A1D18] py-4 px-6 shadow-lg border-b border-[#5D6E4C]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-[#F2F0EB] font-black">V</span><span className="text-primary font-black">GRIZ</span>
              <span className="ml-2 text-sm text-[#D0CFC0] hidden sm:inline-block">| ARMA Reforger Server</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center space-x-4 text-base font-medium">
          <Link href="/" className="text-[#F2F0EB] hover:text-primary transition-colors py-1 px-3">
            Home
          </Link>
          <a href="/#specs" className="text-[#F2F0EB] hover:text-primary transition-colors py-1 px-3">
            Specs
          </a>
          <a href="/#feedback" className="text-[#F2F0EB] hover:text-primary transition-colors py-1 px-3">
            Feedback
          </a>
          <Link href="/view-feedback" className="text-[#F2F0EB] hover:text-primary transition-colors py-1 px-3">
            View Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}
