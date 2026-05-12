import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Templates() {
  const templates = [
    {
      name: "Fine Dining",
      badge: "HOT",
      style: "dark",
      bgColor: "bg-[#1a1a1a]",
      textColor: "text-white",
      borderColor: "border-gray-800"
    },
    {
      name: "Café & Bistro",
      badge: null,
      style: "light",
      bgColor: "bg-[#faf9f6]",
      textColor: "text-gray-900",
      borderColor: "border-gray-200"
    },
    {
      name: "Quick Bites",
      badge: null,
      style: "colorful",
      bgColor: "bg-orange-50",
      textColor: "text-gray-900",
      borderColor: "border-orange-100"
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl relative z-10">
            <span className="text-primary text-sm font-bold tracking-wider uppercase mb-4 block">
              MODERN & READY TO USE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Designed for Restaurants, Loved by Customers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from our collection of premium, professionally designed templates. Each one is optimized for mobile devices and built to convert visitors into diners.
            </p>
            <Button className="bg-[#101010] text-white hover:bg-black rounded-full px-8 h-12 group">
              View All Templates
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Showcase */}
          <div className="relative h-[500px] w-full flex items-center justify-center mt-10 lg:mt-0">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`absolute w-[280px] h-[380px] rounded-xl shadow-2xl border ${template.borderColor} ${template.bgColor} p-4 overflow-hidden group hover:-translate-y-4 hover:z-30 transition-all duration-500`}
                style={{
                  transform: `translateX(${(index - 1) * 60}px) translateY(${(index - 1) * 20}px) rotate(${(index - 1) * 5}deg)`,
                  zIndex: 20 - Math.abs(index - 1)
                }}
              >
                {/* Template Mockup UI */}
                <div className={`flex justify-between items-center mb-6 ${template.textColor}`}>
                  <div className="text-xs font-bold tracking-widest uppercase">{template.name}</div>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-0.5 bg-current opacity-30"></div>
                    <div className="w-4 h-0.5 bg-current opacity-30"></div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className={`text-3xl font-serif mb-2 ${template.textColor}`}>Reserve</div>
                  <div className={`text-3xl font-serif mb-6 ${template.textColor} italic`}>Your Table</div>
                  <div className={`w-12 h-0.5 mx-auto mb-6 ${template.style === 'dark' ? 'bg-primary' : 'bg-current opacity-20'}`}></div>
                  <div className={`text-[10px] max-w-[80%] mx-auto opacity-70 ${template.textColor}`}>
                    Experience culinary excellence in the heart of the city.
                  </div>
                </div>
                
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 border rounded text-[10px] font-bold tracking-wider ${
                  template.style === 'dark' ? 'border-primary text-primary' : 'border-current text-current opacity-80'
                }`}>
                  VIEW MENU
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {template.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-bold px-2 py-1 rounded-sm">
                    {template.badge}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
