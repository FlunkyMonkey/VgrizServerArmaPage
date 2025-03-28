import { Card, CardContent } from "@/components/ui/card";
import { Server, Cpu, Database, HardDrive, Wifi } from "lucide-react";

export default function ServerSpecs() {
  return (
    <section id="specs" className="py-12 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Powerful <span className="text-primary">Server Specs</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our server runs on dedicated hardware optimized for ARMA Reforger, ensuring smooth gameplay and minimal latency.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CPU Spec */}
        <Card className="bg-dark-lighter border-gray-700 transform hover:scale-105 transition-transform">
          <CardContent className="pt-6">
            <div className="text-primary-light mb-4">
              <Cpu className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">8 vCPU</h3>
            <p className="text-gray-400">High-performance CPU cores dedicated to server processing for seamless gameplay</p>
          </CardContent>
        </Card>
        
        {/* Memory Spec */}
        <Card className="bg-dark-lighter border-gray-700 transform hover:scale-105 transition-transform">
          <CardContent className="pt-6">
            <div className="text-primary-light mb-4">
              <Database className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">32GB Memory</h3>
            <p className="text-gray-400">Ample RAM ensures the server runs smoothly even with multiple players and events</p>
          </CardContent>
        </Card>
        
        {/* Storage Spec */}
        <Card className="bg-dark-lighter border-gray-700 transform hover:scale-105 transition-transform">
          <CardContent className="pt-6">
            <div className="text-primary-light mb-4">
              <HardDrive className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">NVMe Storage</h3>
            <p className="text-gray-400">Ultra-fast storage for quick loading times and reliable performance</p>
          </CardContent>
        </Card>
        
        {/* Network Spec */}
        <Card className="bg-dark-lighter border-gray-700 transform hover:scale-105 transition-transform">
          <CardContent className="pt-6">
            <div className="text-primary-light mb-4">
              <Wifi className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gigabit Internet</h3>
            <p className="text-gray-400">High-speed network connection for minimal latency and lag-free experience</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-12 bg-dark-lighter border-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
              <div className="w-40 h-40 bg-dark-darker rounded-lg overflow-hidden flex items-center justify-center">
                <Server className="h-20 w-20 text-gray-700" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Open to <span className="text-primary">Everyone</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Our server is dedicated to creating a welcoming environment for all ARMA Reforger players. Whether you're a veteran or just getting started, you'll find a supportive community here.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Server Uptime</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular Updates & Maintenance</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
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