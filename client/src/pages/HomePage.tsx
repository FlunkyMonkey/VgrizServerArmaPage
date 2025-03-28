import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ServerSpecs from "@/components/ServerSpecs";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { isServerOnline, getRandomPlayerCount } from "@/lib/utils";
import { AlertTriangle, Server, Zap } from "lucide-react";

export default function HomePage() {
  const [serverStatus, setServerStatus] = useState<{online: boolean; players: number}>({
    online: true,
    players: 12
  });

  useEffect(() => {
    // Initial server status check
    updateServerStatus();
    
    // Update server status every 60 seconds
    const interval = setInterval(updateServerStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to update server status (simulated)
  const updateServerStatus = () => {
    const online = isServerOnline();
    const players = online ? getRandomPlayerCount() : 0;
    
    setServerStatus({
      online,
      players
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <section id="home" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Welcome to <span className="text-primary">ARMA Reforger</span><br />
                Dedicated Server
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our server is powered by top-tier hardware and welcomes players of all experience levels. Jump in and experience ARMA Reforger at its best!
              </p>
              
              {/* Server Status */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="bg-dark-lighter p-4 rounded-lg inline-flex items-center">
                  <div 
                    className={`w-4 h-4 rounded-full mr-3 ${serverStatus.online 
                      ? "bg-secondary animate-pulse" 
                      : "bg-red-500"}`}
                  ></div>
                  <span className="font-medium">Server Status: 
                    <span className={serverStatus.online ? "text-secondary ml-1" : "text-red-500 ml-1"}>
                      {serverStatus.online ? "ONLINE" : "MAINTENANCE"}
                    </span>
                  </span>
                </div>
                <div className="bg-dark-lighter p-4 rounded-lg inline-flex items-center">
                  <span className="font-medium">Players: 
                    <span className="text-white ml-1">
                      {serverStatus.players}/64
                    </span>
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-accent hover:bg-accent-dark text-white flex items-center justify-center" 
                  asChild
                >
                  <a href="steam://connect/arma.vgriz.com">
                    <Zap className="h-5 w-5 mr-2" />
                    Connect Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center"
                  asChild
                >
                  <a href="#specs">
                    <Server className="h-5 w-5 mr-2" />
                    Server Details
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-first md:order-last mb-8 md:mb-0">
              <div className="bg-dark-lighter p-2 rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-dark-darker rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {/* ARMA Reforger illustration as fallback */}
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-center px-4">
                        <AlertTriangle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-400">ARMA Reforger</h3>
                        <p className="text-gray-500 mt-2">Gameplay Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Server Specs Section */}
        <ServerSpecs />
        
        {/* Feedback Form Section */}
        <FeedbackForm />
      </div>
      
      <Footer />
    </div>
  );
}
