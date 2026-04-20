import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Football player in action on the pitch"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <p
          className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Center Midfielder
        </p>
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wide text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          TONY
          <br />
          PALITO
        </h1>
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-md mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Creative and technically gifted central midfielder with strong physical presence and exceptional vision. A dynamic box-to-box player who controls tempo, creates chances, and contributes goals while maintaining composure and high pass accuracy under pressure.
        </p>
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="#highlights"
            className="inline-flex items-center px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            Watch Highlights
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 border border-foreground/20 text-foreground font-semibold text-sm rounded-md hover:bg-foreground/5 active:scale-[0.97] transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
