import { Card, CardContent } from "@/components/ui/card";
import { Server, Cpu, Database, HardDrive, Wifi } from "lucide-react";

export default function ServerSpecs() {
  return (
    <section id="specs" className="py-12 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#F2F0EB]">
          Powerful <span className="text-primary font-black">Server Specs</span>
        </h2>
        <p className="text-lg text-[#D0CFC0] max-w-3xl mx-auto">
          Our server runs on dedicated hardware optimized for ARMA Reforger, ensuring smooth gameplay and minimal latency.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CPU Spec */}
        <Card className="bg-[#222520] border border-[#5D6E4C] transform hover:scale-105 transition-transform shadow-lg">
          <CardContent className="pt-6">
            <div className="text-primary mb-4">
              <Cpu className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F2F0EB]">8 vCPU</h3>
            <p className="text-[#D0CFC0]">High-performance CPU cores dedicated to server processing for seamless gameplay</p>
          </CardContent>
        </Card>
        
        {/* Memory Spec */}
        <Card className="bg-[#222520] border border-[#5D6E4C] transform hover:scale-105 transition-transform shadow-lg">
          <CardContent className="pt-6">
            <div className="text-primary mb-4">
              <Database className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F2F0EB]">32GB Memory</h3>
            <p className="text-[#D0CFC0]">Ample RAM ensures the server runs smoothly even with multiple players and events</p>
          </CardContent>
        </Card>
        
        {/* Storage Spec */}
        <Card className="bg-[#222520] border border-[#5D6E4C] transform hover:scale-105 transition-transform shadow-lg">
          <CardContent className="pt-6">
            <div className="text-primary mb-4">
              <HardDrive className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F2F0EB]">NVMe Storage</h3>
            <p className="text-[#D0CFC0]">Ultra-fast storage for quick loading times and reliable performance</p>
          </CardContent>
        </Card>
        
        {/* Network Spec */}
        <Card className="bg-[#222520] border border-[#5D6E4C] transform hover:scale-105 transition-transform shadow-lg">
          <CardContent className="pt-6">
            <div className="text-primary mb-4">
              <Wifi className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F2F0EB]">Gigabit Internet</h3>
            <p className="text-[#D0CFC0]">High-speed network connection for minimal latency and lag-free experience</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-12 bg-[#272A23] border border-[#5D6E4C] shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
              <div className="w-40 h-40 bg-[#1A1D18] rounded-lg overflow-hidden flex items-center justify-center border border-[#5D6E4C]">
                <Server className="h-20 w-20 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#F2F0EB]">
                Open to <span className="text-primary font-black">Everyone</span>
              </h3>
              <p className="text-[#D0CFC0] mb-4">
                Our server is dedicated to creating a welcoming environment for all ARMA Reforger players. Whether you're a veteran or just getting started, you'll find a supportive community here.
              </p>
              <div className="mb-4 p-3 bg-[#1A1D18] border border-[#5D6E4C] rounded-md">
                <p className="text-lg font-semibold text-primary">Connect at: <span className="text-[#F2F0EB]">arma.vgriz.com:2001</span></p>
              </div>
              <ul className="space-y-2 text-[#F2F0EB]">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Server Uptime</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular Updates & Maintenance</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Active Community Support</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}