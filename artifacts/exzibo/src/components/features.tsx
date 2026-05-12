import { motion } from "framer-motion";
import { LayoutGrid, ShoppingCart, Calendar, Smartphone, Zap, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <LayoutGrid className="w-6 h-6 text-primary" />,
      title: "Beautiful Menu",
      description: "Showcase your dishes with stunning layouts and high-quality images."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      title: "Online Ordering",
      description: "Take orders directly from your website without paying 30% commissions."
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Reservations",
      description: "Let customers book tables instantly. Manage everything in one place."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Mobile First",
      description: "Your website will look perfect and load instantly on any device."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "SEO & Fast",
      description: "Built-in SEO tools to help you rank higher on Google search results."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#fcfbf9] rounded-[2.5rem] p-8 md:p-16 border border-border shadow-sm">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-4 block">
                POWERFUL FEATURES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Everything You Need to Grow Online
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop juggling multiple tools. EXZIBO gives you a complete suite of restaurant management features integrated directly into your beautifully designed website.
              </p>
              <a href="#" className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors group">
                Explore All Features 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className={`bg-white rounded-2xl p-6 border border-border shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    index === 4 ? "sm:col-span-2 sm:w-1/2 sm:justify-self-center" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
