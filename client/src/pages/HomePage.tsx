import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ServerSpecs from "@/components/ServerSpecs";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { isServerOnline } from "@/lib/utils";
import { Server } from "lucide-react";
import armaRussiaImage from "@/assets/arma-russia.jpg";
import armaUsImage from "@/assets/arma-us.jpg";

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
    
    setServerStatus({
      online,
      players: 0 // keep this for structure but we don't display it
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <section id="home" className="mb-16 pt-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-center">
              Welcome to <span className="text-primary">ARMA Reforger</span><br />
              Dedicated Server
            </h2>
            
            {/* Server Status - Centered */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#222520] border border-[#5D6E4C] p-4 rounded-lg inline-flex items-center">
                <div className="w-4 h-4 rounded-full mr-3 bg-green-500 animate-pulse"></div>
                <span className="font-medium text-[#F2F0EB]">Server Status: 
                  <span className="text-green-500 ml-1">ONLINE</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8">
            <div className="md:col-span-2">
              <p className="text-lg text-[#D0CFC0] mb-6 text-center md:text-left">
                Our server is powered by top-tier hardware and welcomes players of all experience levels. Jump in and experience ARMA Reforger at its best!
              </p>
              <p className="text-lg text-[#D0CFC0] mb-8 text-center md:text-left">
                With dedicated NVMe storage, 32GB of RAM, and gigabit internet connection, we provide a smooth gaming experience for both casual players and organized units.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            
            <div className="md:col-span-1">
              {/* Single image - US Army */}
              <div className="bg-[#222520] p-2 rounded-lg shadow-lg border border-[#5D6E4C] h-full">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={armaUsImage} 
                    alt="ARMA Reforger US Army" 
                    className="object-cover w-full"
                  />
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
