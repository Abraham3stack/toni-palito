import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  { src: "/gallery/gallery-1.webp", alt: "Dribbling past defenders" },
  { src: "/gallery/gallery-2.webp", alt: "Celebrating a goal" },
  { src: "/gallery/gallery-3.webp", alt: "Close-up on the ball" },
  { src: "/gallery/gallery-4.webp", alt: "Training session" },
  { src: "/gallery/gallery-5.webp", alt: "Player portrait" },
  { src: "/gallery/gallery-6.webp", alt: "Match action" },
  { src: "/gallery/gallery-7.webp", alt: "Match action" },
  { src: "/gallery/gallery-8.webp", alt: "Match action" },
  { src: "/gallery/gallery-9.webp", alt: "Match action" },
  { src: "/gallery/gallery-10.webp", alt: "Match action" },
  { src: "/gallery/gallery-11.webp", alt: "Match action" },
  { src: "/gallery/gallery-12.webp", alt: "Match action" },
  { src: "/gallery/gallery-13.webp", alt: "Match action" },
  { src: "/gallery/gallery-14.webp", alt: "Match action" },
  { src: "/gallery/gallery-15.webp", alt: "Match action" },
  { src: "/gallery/gallery-16.webp", alt: "Match action" },
  { src: "/gallery/gallery-17.webp", alt: "Match action" },
  { src: "/gallery/gallery-18.webp", alt: "Match action" },
  { src: "/gallery/gallery-19.webp", alt: "Match action" },
  { src: "/gallery/gallery-20.webp", alt: "Match action" },
];

const GallerySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32 section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          In Action
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          GALLERY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
