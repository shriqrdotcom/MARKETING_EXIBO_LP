import { motion } from "framer-motion";
import { Check, Code2, ShoppingCart, Calendar, Zap, LayoutDashboard, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary border border-primary/20">
                <span className="flex w-2 h-2 rounded-full bg-primary mr-2"></span>
                #1 Restaurant Website Builder
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Build Stunning Restaurant Websites <span className="text-primary block mt-1">That Bring More Orders</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              EXZIBO helps restaurant owners create beautiful, mobile-first websites with online ordering, reservations, and everything they need to grow online.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2"><Code2 className="w-4 h-4 text-primary" /> No Coding</div>
              <div className="flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-primary" /> Online Ordering</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Reservations</div>
              <div className="flex items-center gap-2"><Search className="w-4 h-4 text-primary" /> SEO Ready</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Lightning Fast</div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95" data-testid="btn-start-free">
                Start Building for Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-border bg-transparent hover:bg-black/5 transition-transform hover:scale-105 active:scale-95" data-testid="btn-view-demo">
                View Live Demo
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> 14-Day Free Trial</div>
              <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> No Credit Card Required</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Device Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0 perspective-1000"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Laptop Mockup */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[90%] md:w-[85%] bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/10"
              style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(5deg)" }}
            >
              <div className="w-full pt-[60%] bg-background rounded-lg sm:rounded-xl overflow-hidden relative border border-border">
                {/* Fake Browser UI */}
                <div className="absolute top-0 left-0 w-full h-8 bg-black/5 border-b border-border flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Mock Website Inside Laptop */}
                <div className="absolute top-8 left-0 w-full h-[calc(100%-2rem)] bg-white overflow-hidden">
                  <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6">
                    <div className="font-bold tracking-widest text-sm">FLIP FLOP</div>
                    <div className="flex gap-4 text-[10px] text-gray-500">
                      <span>MENU</span>
                      <span>ABOUT</span>
                      <span>RESERVATIONS</span>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-xl font-serif font-bold text-gray-800 mb-2">The Finest Ingredients</div>
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                  <div className="p-6 grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gray-100 rounded-md"></div>
                    <div className="h-20 bg-gray-100 rounded-md"></div>
                    <div className="h-20 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="h-2 sm:h-3 w-full bg-[#2a2a2a] mt-2 sm:mt-3 rounded-b-xl sm:rounded-b-2xl"></div>
            </motion.div>

            {/* Mobile Phone Mockup */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[35%] md:w-[30%] aspect-[1/2.1] bg-[#1a1a1a] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 z-20"
            >
              <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative border border-border">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#1a1a1a] rounded-b-xl z-30"></div>
                
                {/* Mock App UI Inside Phone */}
                <div className="w-full h-full bg-gray-50 pt-8 pb-4 px-3 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-[10px]">Menu</div>
                    <ShoppingCart className="w-3 h-3" />
                  </div>
                  
                  <div className="flex gap-2 overflow-hidden mb-4">
                    <div className="px-2 py-1 bg-primary text-white text-[8px] rounded-full whitespace-nowrap">Popular</div>
                    <div className="px-2 py-1 bg-white border border-gray-200 text-gray-500 text-[8px] rounded-full whitespace-nowrap">Mains</div>
                    <div className="px-2 py-1 bg-white border border-gray-200 text-gray-500 text-[8px] rounded-full whitespace-nowrap">Sides</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm flex gap-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                      <div className="flex-1">
                        <div className="h-2 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-1/4 bg-primary/30 rounded mt-2"></div>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm flex gap-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                      <div className="flex-1">
                        <div className="h-2 w-2/3 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-1/4 bg-primary/30 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-10 mt-auto bg-primary rounded-xl flex items-center justify-center text-white text-[10px] font-bold">
                    View Cart
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
