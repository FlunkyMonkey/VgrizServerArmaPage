import { Link } from "wouter";
import FlagUS from "../assets/FlagUS";
import FlagUA from "../assets/FlagUA";

export default function Footer() {
  return (
    <footer className="bg-dark-darker py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <Link href="/">
                <span className="text-white">V</span><span className="text-primary">GRIZ</span>
              </Link>
            </h2>
            <p className="text-sm text-gray-400">
              ARMA Reforger Dedicated Server<br />
              Connect at: arma.vgriz.com
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">Powered By</p>
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <FlagUS className="h-6 rounded" />
              <FlagUA className="h-6 rounded" />
            </div>
            <p className="text-gray-500 text-xs mt-4">
              © {new Date().getFullYear()} VGRIZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
