import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-24 bg-[#101010] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 bg-white/5 backdrop-blur-sm">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl relative">
            <div className="absolute -left-6 -top-6 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md hidden md:flex">
              <UtensilsCrossed className="w-5 h-5 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Take Your Restaurant Online?
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of restaurant owners who trust EXZIBO to grow their business. Set up your beautiful website in minutes.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-14 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Button size="lg" className="h-14 rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-semibold shadow-[0_0_20px_rgba(255,107,44,0.3)] whitespace-nowrap">
                Start Free Trial
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center sm:text-left w-full max-w-md px-2">
              No credit card required • 14-day free trial
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
