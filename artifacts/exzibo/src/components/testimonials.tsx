import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "EXZIBO helped us go online in just a few hours. Our orders increased by 3X in the first month!",
      name: "Rahul Sharma",
      restaurant: "Spice Villa",
      initials: "RS"
    },
    {
      quote: "The templates are beautiful and easy to customize. My customers love the online ordering experience.",
      name: "Neha Verma",
      restaurant: "The Grill House",
      initials: "NV"
    },
    {
      quote: "Excellent support and amazing features. Highly recommended for every restaurant owner.",
      name: "Arjun Patel",
      restaurant: "Urban Thali",
      initials: "AP"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4 border border-primary/20">
            CUSTOMER REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Restaurant Owners
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="bg-white rounded-2xl p-8 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground text-lg leading-relaxed mb-8 flex-1 font-medium">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.restaurant}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
