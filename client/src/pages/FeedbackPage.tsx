import Navbar from "@/components/Navbar";
import ViewFeedback from "@/components/ViewFeedback";
import Footer from "@/components/Footer";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <ViewFeedback />
      </div>
      
      <Footer />
    </div>
  );
}
