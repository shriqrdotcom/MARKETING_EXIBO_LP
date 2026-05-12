export default function TrustedLogos() {
  const logos = [
    "SPICE VILLA",
    "urban thali",
    "THE GRILL HOUSE",
    "The Biryani Factory",
    "SIZZLE & SPICE"
  ];

  return (
    <section className="py-12 border-y border-border/40 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 1000+ Restaurant Owners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="text-lg md:text-xl font-bold tracking-widest text-foreground opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{
                fontFamily: index % 2 === 0 ? 'var(--app-font-serif)' : 'var(--app-font-sans)',
                textTransform: index === 1 ? 'lowercase' : 'uppercase'
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
