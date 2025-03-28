import { Link } from "wouter";
import { Mail, MessageSquare } from "lucide-react";
import { FaSteam, FaDiscord } from "react-icons/fa";
import FlagUS from "../assets/FlagUS";
import FlagUA from "../assets/FlagUA";

export default function Footer() {
  return (
    <footer className="bg-[#1A1D18] py-8 border-t border-[#5D6E4C]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and server info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">
              <Link href="/">
                <span className="text-[#F2F0EB] font-black">V</span><span className="text-primary font-black">GRIZ</span>
              </Link>
            </h2>
            <p className="text-[#D0CFC0]">
              ARMA Reforger Dedicated Server<br />
              Connect at: <span className="text-primary">arma.vgriz.com</span>
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3 text-[#F2F0EB]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start md:ml-12">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-[#D0CFC0]">admin@vgriz.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start md:ml-12">
                <FaDiscord className="h-5 w-5 text-primary mr-2" />
                <span className="text-[#D0CFC0]">flunkymonkey</span>
              </li>
              <li className="flex items-center justify-center md:justify-start md:ml-12">
                <FaSteam className="h-5 w-5 text-primary mr-2" />
                <span className="text-[#D0CFC0]">FlunkyMonkey</span>
              </li>
            </ul>
          </div>
          
          {/* Flags and Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[#D0CFC0] text-sm mb-3 font-medium">Powered By</p>
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <FlagUS className="h-6 w-10 rounded shadow-sm" />
              <FlagUA className="h-6 w-10 rounded shadow-sm" />
            </div>
            <p className="text-[#9A9B8D] text-xs mt-4">
              © {new Date().getFullYear()} VGRIZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
