import { useScrollReveal } from "@/hooks/useScrollReveal";

const HighlightsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="highlights" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Watch
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          HIGHLIGHTS
        </h2>

        <div
          className={`relative mb-8 aspect-video rounded-lg overflow-hidden glass-card transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/xD8XptN9mJM"
            title="Player Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div
          className={`relative aspect-video rounded-lg overflow-hidden glass-card transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/GFGyto3mZ2I"
            title="Player Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div
          className={`relative aspect-video rounded-lg overflow-hidden glass-card transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/u49y4H-DbdA"
            title="Player Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div
          className={`relative aspect-video rounded-lg overflow-hidden glass-card transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/qoatH3RlT34"
            title="Player Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
